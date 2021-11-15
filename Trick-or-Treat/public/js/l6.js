var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
if ( username == "bing" || username=="Bing"|| username=="BING"){
window.location = "/delta.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("submit").disabled = true;
document.getElementById('xyz').play();
alert("Look Behind you ☠💀");
return false;
}
}
}