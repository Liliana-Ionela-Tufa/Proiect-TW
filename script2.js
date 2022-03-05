var password;
var pass1='1234'
password = prompt('Intruduceti parola:', ' ');
if(password==pass1)
alert('Parola corecta, apasati ok pentru a accesa site-ul.');
else
window.location="https://www.google.com/";

setInterval(changecolor, 500);
function changecolor()
{
    var x = document.getElementById("slogan");
    if(x.style.color=="yellow")
    x.style.color="red";
    else if (x.style.color=="red")
    x.style.color="green";
    else if (x.style.color=="green")
    x.style.color="pink";
    else x.style.color="yellow";
}