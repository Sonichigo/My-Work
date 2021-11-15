var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
if ( username == "St Patrick Day" || username=="st patrick day"|| username=="St Patrick's Day"){
alert ("CONGARTS");
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}