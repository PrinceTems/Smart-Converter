 
 

   
   
   
   
 
 
 function convertmiletokilo(){
    var x =document.getElementById("Miles").value;
let zx =    document.getElementById("milestokilometer").innerText=x*1.6;
let xz =zx.toFixed(3);
document.getElementById("milestokilometer").innerHTML=xz;
}


function convertkilotomile(){
    var y = document.getElementById("Kilometer").value;
let wa =    document.getElementById("kilometertomiles").innerHTML=y*0.62;
 let aw =wa.toFixed(3);
 document.getElementById("kilometertomiles").innerHTML=aw;
};

 



function converttoyards(){
    document.querySelector("h2").innerText="Convert From Feet To Yards";
    document.getElementById("miles").
    innerHTML="Feet";
    document.getElementById("Miles").placeholder="Feets To Yards";
    document.getElementById("kilo").
    innerHTML="Yards";
    document.getElementById("btnkilo").innerHTML="Convert To Yards"
var btn= document.getElementById("btnkilo");
var nbt=document.getElementById("btnmile");


   btn.addEventListener("click",feettoyards);
  function feettoyards(){
     var x = document.getElementById("Miles").value;
    let k = document.getElementById("milestokilometer").
     innerHTML=x*0.333;

     let l = k.toFixed(3);
     document.getElementById("milestokilometer").innerHTML=l;

  };



    document.querySelector("h3").innerText="Convert From Yards To Feet";
    document.getElementById("kil").
    innerHTML="Yards";
    document.getElementById("Kilometer").placeholder="Yards To Feet";
    document.getElementById("mile").
    innerHTML="Feet";
    document.getElementById("btnmile").innerHTML="Convert To Feet";

    nbt.addEventListener("click",yardstofeets);
      function yardstofeets(){
       var y = document.getElementById("Kilometer").value;
       let g = document.getElementById("kilometertomiles").innerHTML=y*3;

       let b = g.toFixed(3);

       document.getElementById("kilometertomiles").innerHTML=b;

}; 

}



function converttoinch(){
    document.querySelector("h2").innerText="Convert From Meter To Inches";
    document.getElementById("miles").
    innerHTML="Meter";
    document.getElementById("Miles").
   placeholder="Meter To Inches";
    document.getElementById("kilo").
    innerHTML="Inches";
    document.getElementById("btnkilo").
   innerHTML="Convert To Inches";

   var mtn = document.getElementById("btnkilo");
   mtn.addEventListener("click",convertmtoinch);

   function convertmtoinch(){
    var e = document.getElementById("Miles").value;
    let z=    document.getElementById("milestokilometer").
    innerHTML=e*39.37;

    let vc = z.toFixed(3);
    document.getElementById("milestokilometer").innerHTML=vc;
   }


 document.querySelector("h3").innerText="Convert From Inches To Meter";
 document.getElementById("kil").innerHTML="Inches";
 document.getElementById("Kilometer").placeholder="Inches To Meter";
 document.getElementById("mile").innerHTML="Meter";
 document.getElementById("btnmile").innerHTML="Convert To Meter";

var rty = document.getElementById("btnmile");
rty.addEventListener("click",converttometer);

 function converttometer(){
    var dy = document.getElementById("Kilometer").value;
let rg =    document.getElementById("kilometertomiles").
    innerHTML=dy*0.0254;

    let rh = rg.toFixed(3);
    document.getElementById("kilometertomiles").innerHTML=rh;
 };

   
}



function converttocelcious(){
    document.querySelector("h2").innerText="Convert Fahrenheit To Celsius"
    document.getElementById("miles").
    innerHTML="Fahrenheit";
    document.getElementById("Miles").
   placeholder="Fahrenheit To Celsius";
    document.getElementById("kilo").
    innerHTML="Celsius";
    document.getElementById("btnkilo").
   innerHTML="Convert To Celsius";
   var gh = document.getElementById("btnkilo");
   gh.addEventListener("click",convertcelcious);
   function convertcelcious(){
    var w = document.getElementById("Miles").value;
   let c = document.getElementById("milestokilometer").
    innerHTML=(w-32)*5/9;

    let v=c.toFixed(3);
    document.getElementById("milestokilometer").innerHTML=v;
   }


document.querySelector("h3").innerText="Convert Celsius To Fahrenheit";
document.getElementById("kil").innerHTML="Celsius";
document.getElementById("Kilometer").placeholder="Celsius To Fahrenheit";
document.getElementById("mile").innerHTML="Fahrenheit";
document.getElementById("btnmile").innerHTML="Convert To Fahrenheit";
 var jk = document.getElementById("btnmile");
 jk.addEventListener("click",convertfaren);

  function convertfaren(){
   var yd = document.getElementById("Kilometer").value;
 let b =  document.getElementById("kilometertomiles").
   innerHTML=(yd*1.8)+32;
   let h=b.toFixed(3);
   document.getElementById("kilometertomiles").innerHTML=h;
  };

}


function converttomiles(){
    document.querySelector("h2").innerText="Convert From Miles To Kilometer"
    document.getElementById("miles").
    innerHTML="Miles";
    document.getElementById("Miles").
   placeholder="Miles to Kilometer";
    document.getElementById("kilo").
    innerHTML="Kilometer";
    document.getElementById("btnkilo").
   innerHTML="Convert To Kilometer";
   var kl= document.getElementById("btnkilo");
   kl.addEventListener("click",convertmiletokilo)

   function convertmiletokilo(){
    var x =document.getElementById("Miles").value;
let cg =    document.getElementById("milestokilometer").innerText=x*1.6;
let yu =cg.toFixed(3);
document.getElementById("milestokilometer").innerHTML=yu;
}


document.querySelector("h3").innerText="Convert From Kilometer To Miles";
document.getElementById("kil").
innerHTML="Kilometer";
document.getElementById("Kilometer").placeholder="Kilometer to Miles";
document.getElementById("mile").
innerHTML="Miles";
document.getElementById("btnmile").innerHTML="Convert To Miles";
 var r = document.getElementById("btnmile");

 r.addEventListener("click",convertkilotomile);

 function convertkilotomile(){
    var y = document.getElementById("Kilometer").value;
let ro =    document.getElementById("kilometertomiles").innerHTML=y*0.62;
let rl = ro.toFixed(3);
document.getElementById("kilometertomiles").innerHTML=rl;
};

 

}


