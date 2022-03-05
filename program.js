function copiiB(elem){ 
    var copii=elem.getElementsByTagName("b");
    var ul=document.createElement("ul");
    for(var i=0;i<copii.length;i++){
        var li=document.createElement("li");
        li.innerHTML=copii[i].innerHTML;
        ul.appendChild(li);
    }
    var frate=elem.nextElementSibling;
    document.body.insertBefore(ul,frate);
    }

window.onload=function(){
    var colectie=document.getElementsByTagName("h5")
    for(var i=0;i<colectie.length;i++){ 
        let k=i;
        colectie[i].nr=0;
        colectie[i].onclick = function(){
            if(colectie[k].nr==0){
                copiiB(colectie[k]);
                colectie[k].nr=1;
            }
        }
    }
} 

const d = new Date();
    document.getElementById("demo").innerHTML = d;

function myFunction() {
    setInterval(function(){ alert("Nu puteti accesa datele angajatilor!"); }, 2000);
}

function functieTarget(event) { 
    alert(event.target.nodeName);
}

function schimbaCuloarea() {
    document.getElementById("p1").style.color = "#ff0000";
    document.getElementById("p2").style.color = "magenta";
    document.getElementById("p3").style.color = "blue";
    document.getElementById("p4").style.color = "#FFFA8B";
  }


function mOver(obj) {
    obj.innerHTML = "Va multumim pentru programare!"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Puneti mouse-ul aici!"
  }