const express = require('express');
const route = express.Router();

const operationsSawo = require('../controllers/operationsSawo.js');

route
	.route("/sawo/email/")
	.get(operationsSawo.getSawoE)
	.post(operationsSawo.createSawoE);

route
	.route("/sawo/phone/")
	.get(operationsSawo.getSawoP)
	.post(operationsSawo.createSawoP);

module.exports = route;
