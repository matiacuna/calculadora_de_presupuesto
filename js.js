let pv1 = ""
let pv2 = ""
let pv3 = ""

let co1 = ""
let co2 = ""
let co3 = ""
let co4 = ""
let co5 = ""
let co6 = ""
let co7 = ""
let co8 = ""

let oc1 = ""
let oc2 = ""
let oc3 = ""
let oc4 = ""
let oc5 = ""

let util = ""
let presupuesto = ""
let cost = ""

function calc(){

    pv1 = parseInt(document.getElementById("pv1").value);
    pv2 = parseInt(document.getElementById("pv2").value);
    pv3 = parseInt(document.getElementById("pv3").value);

    co1 = parseInt(document.getElementById("co1").value);
    co2 = parseInt(document.getElementById("co2").value);
    co3 = parseInt(document.getElementById("co3").value);
    co4 = parseInt(document.getElementById("co4").value);
    co5 = parseInt(document.getElementById("co5").value);
    co6 = parseInt(document.getElementById("co6").value);
    co7 = parseInt(document.getElementById("co7").value);
    co8 = parseInt(document.getElementById("co8").value);

    oc1 = parseInt(document.getElementById("oc1").value);
    oc2 = parseInt(document.getElementById("oc2").value);
    oc3 = parseInt(document.getElementById("oc3").value);
    oc4 = parseInt(document.getElementById("oc4").value);
    oc5 = parseInt(document.getElementById("oc5").value);

    cost = pv1 + pv2 + pv3 + co1 + co2 + co3 + co4 + co5 + co6 + co7 + co8 + oc1 + oc2 + oc3 + oc4 + oc5;
    util = cost * 0.2;
    presupuesto = cost + util;

    document.getElementById("porcentaje").innerHTML = `<h4> 20% del Costo: $ ${util}</h4>
    `
    document.getElementById("presupuesto").innerHTML = `<div class="card text-center border-success mb-3">
    <div class="card-header ">
      <h4>Presupuesto</h4>
    </div>
    <div class="card-body" ><h4> $ ${presupuesto}</h4> </div>`






}






document.addEventListener("DOMContentLoaded", function(e){


    document.getElementById("boton").addEventListener("click", function(e){
        calc();
    });




})