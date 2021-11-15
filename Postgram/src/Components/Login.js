import React from "react";
import Sawo from "sawo";
import Main from "./Main";
function Login() { 

let [payload, setPayload] = React.useState(false);

React.useEffect(() => {
  var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: process.env.REACT_APP_API_KEY,
      onSuccess: (payload) => {
        // console.log(payload); 
        setPayload(payload)
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
 }, []); 
 return (
         <div>
           <div id="sawo-container" style={{ height: "300px", width: "300px" }}></div>
        {payload && (
        <Main>
        </Main>
        )}
        </div>
  );
}
export default Login;