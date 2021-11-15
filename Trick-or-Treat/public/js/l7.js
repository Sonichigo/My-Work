var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
if ( username == "Queen's Gambit" || username=="The Queen's Gambit"){
alert ("CONGARTS");
window.location = "/end.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("submit").disabled = true;
document.getElementById('xyz').play();
alert("Look Behind you ☠💀");
return false;
}
}
}