var attempt = 6; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
if ( username == "usain bolt" || username=="Usain Bolt" || username=="USAIN BOLT"){
window.location = "/binary.html"; // Redirecting to other page.
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