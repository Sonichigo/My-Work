import React from "react";
import Sawo from "sawo";
import Router from "./Router";
require('dotenv').config()
function Login() { 

let [payload, setPayload] = React.useState(false);

React.useEffect(() => {
  var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: process.env.REACT_APP_API,
      onSuccess: (payload) => {
        setPayload(payload)
        var sawoContainer = document.getElementById("sawo-container");
        sawoContainer.remove()
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
 }, []); 
 return( <>
         <div
          id="sawo-container"
          style={{ height: "450px", width: "300px" }}
        > <h2>Spyall Authorized </h2></div>
        {payload && (
        <Router/>
        )}
        </>
  );
}
export default Login;
