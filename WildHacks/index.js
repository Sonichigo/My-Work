const express = require('express')
const path = require("path")
const Sequelize = require("sequelize-cockroachdb");
const fs = require('fs');
require('dotenv').config()

const app = express()
const port = 3000;

var sequelize = new Sequelize({
    dialect: "postgres",
    username: process.env.user,
    password: process.env.pass,
    host: process.env.host,
    port: 26257,
    database: process.env.data,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync('certs/.postgresql/root.crt')
                .toString()
      },
    },
    logging: false, 
  });

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const Animal = sequelize.define("animal", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
    },
    name: {
        type: Sequelize.TEXT,
    },
    category: {
        type: Sequelize.TEXT,
    },
    habitat: {
        type: Sequelize.TEXT,
    },
    count: {
        type: Sequelize.INTEGER,
    },
});

app.use(express.static(path.join(__dirname,'./static' )))

app.get('/Update', (request,response)=>{
    response.sendFile(path.join(__dirname,'./static/Update.html'))
})
app.get('/AddNew', (request,response)=>{
    response.sendFile(path.join(__dirname,'./static/Add.html'))
})

app.post('/submit', function (req, res) {
 
    //Get our values submitted from the form
    var fromName = req.body.name;
    var fromCategory = req.body.category;
    var fromHabitat = req.body.habitat;
    var fromCount = req.body.count;
 
    //Add our POST data to CockroachDB via Sequelize
    Animal.sync({
        force: false,
    })
        .then(function () {
        return Animal.bulkCreate([
            {
            name: fromName,
            category: fromCategory,
            habitat: fromHabitat,
            count: fromCount
            },
        ]);
        })
 
    	  //Error handling for database errors
        .catch(function (err) {
        console.error("error: " + err.message);
        });    
        
        //Tell them it was a success
        res.redirect('/');
});

app.post('/update', function (req, res) {
 
    //Get our values submitted from the form
    var fromID = req.body.id;
    var fromName = req.body.name;
    var fromCategory = req.body.category;
    var fromHabitat = req.body.habitat;
    var fromCount = req.body.count;
 
    //Add our POST data to CockroachDB via Sequelize
    Animal.sync({
        force: true,
    })
        .then(function () {
        return Animal.bulkCreate([
            {
            id:fromID,
            name: fromName,
            category: fromCategory,
            habitat: fromHabitat,
            count: fromCount
            },
        ]);
        })
 
    	  //Error handling for database errors
        .catch(function (err) {
        console.error("error: " + err.message);
        });    
        
        //Tell them it was a success
        res.redirect('/AddNew')  
});

app.get('/', (req, res) => {
 
    //Get our data from CockroachDB
    Animal.sync({
         force:false,
    })
    .then(function() {
       return Animal.findAll();
    })
        
    .then(function (animal) {
        //Render output from CockroachDB using PUG template
        app.set('views', './views');
        app.set('view engine', 'pug');
        res.render('index', { animal : animal });
    })
 
});



app.listen(port,()=>{
    console.log(`Listening to localhost:${port}`)
})