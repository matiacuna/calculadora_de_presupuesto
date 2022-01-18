let valpp = ""
let valc1 = ""
let valc2 = ""
let valc3 = ""
let valce = ""

let lic = ""
let users = ""

let pv1h = ""
let pv1p = ""
let pv2 = ""
let pv3 = ""

let co1 = ""
let co2 = ""
let co3 = ""
let co4 = ""
let co5 = ""
let co6 = ""


let oc1 = ""
let oc2 = ""
let oc3 = ""
let oc4 = ""


let preVenta = ""
let proyect = ""
let proyectAndPreVenta = ""
let util = ""
let presupuesto = ""
let cost = ""

let tabla = ""

//tomo los valores de horas y costos de horas
function getValues(){

    valpp = parseInt(document.getElementById("valpp").value);
    valc1 = parseInt(document.getElementById("valc1").value);
    valc2 = parseInt(document.getElementById("valc2").value);
    valc3 = parseInt(document.getElementById("valc3").value);
    valce = parseInt(document.getElementById("valce").value);

    lic = parseInt(document.getElementById("lic").value);
    users = parseInt(document.getElementById("users").value);

    pv1h = parseInt(document.getElementById("pv1h").value);
    pv1p = parseInt(document.getElementById("pv1p").value);
    pv2 = parseInt(document.getElementById("pv2").value);
    pv3 = parseInt(document.getElementById("pv3").value);

    co1 = parseInt(document.getElementById("co1").value);
    co2 = parseInt(document.getElementById("co2").value);
    co3 = parseInt(document.getElementById("co3").value);
    co4 = parseInt(document.getElementById("co4").value);
    co5 = parseInt(document.getElementById("co5").value);
    co6 = parseInt(document.getElementById("co6").value);


    oc1 = parseInt(document.getElementById("oc1").value);
    oc2 = parseInt(document.getElementById("oc2").value);
    oc3 = parseInt(document.getElementById("oc3").value);
    oc4 = parseInt(document.getElementById("oc4").value);
    oc5 = parseInt(document.getElementById("oc5").value);

}

//calculo los valores de la preventa
function calcPreVenta(){

    preVenta = ((pv1h*pv1p) + pv2 + pv3)* valpp;

}

//calculo el valor del area proyecto segun la categoria seleccioanda
function calcProyect(){

    let catP1 = document.getElementById("cat1").value;
    let catP2 = document.getElementById("cat2").value;
    //let catP3 = document.getElementById("cat3").value;
    let catP4 = document.getElementById("cat4").value;
    let catP5 = document.getElementById("cat5").value;
    let catP6 = document.getElementById("cat6").value;

    if ( catP1 == "1" ){
        co1 = co1 * valc1;
    }
    else if( catP1 == "2" ){
        co1 = co1 * valc2;
    }
    else if( catP1 == "3" ){
        co1 = co1 * valc3;
    }
    else if( catP1 == "4" ){
        co1 = co1 * valce;
    }

//----------------------------------------
    if ( catP2 == "1" ){
        co2 = co2 * valc1;
    }
    else if( catP2 == "2" ){
        co2 = co2  * valc2;
    }
    else if( catP2 == "3" ){
        co2 = co2 * valc3;
    }
    else if( catP2 == "4" ){
        co2 = co2  * valce;
    }

//----------------------------------------

        co3 = co3 * lic * users ;

//----------------------------------------
    if ( catP4 == "1" ){
        co4 = co4 * valc1;
    }
    else if( catP4 == "2" ){
        co4 = co4 * valc2;
    }
    else if( catP4 == "3" ){
        co4 = co4 * valc3;
    }
    else if( catP4 == "4" ){
        co4 = co4 * valce;
    }

//----------------------------------------

    if ( catP5 == "1" ){
        co5 = co5 * valc1;
    }
    else if( catP5 == "2" ){
        co5 = co5 * valc2;
    }
    else if( catP5 == "3" ){
        co5 = co5 * valc3;
    }
    else if( catP5 == "4" ){
        co5 = co5 * valce;
    }

//----------------------------------------

    if ( catP6 == "1" ){
        co6 = co6 * valc1;
    }
    else if( catP5 == "2" ){
        co6 = co6 * valc2;
    }
    else if( catP5 == "3" ){
        co6 = co6 * valc3;
    }
    else if( catP5 == "4" ){
        co6 = co6 * valce;
    }


    proyect = co1 + co2 + co3 + co4 + co5 + co6;


}


//calculo el valor de los otros costos estimados
function calcOtrosCostos(){

    proyectAndPreVenta = proyect + preVenta;
    cost = proyectAndPreVenta;
    cost = oc5 + cost;

    let oct1 = document.getElementById("oct1").value;
    let oct2 = document.getElementById("oct2").value;
    let oct3 = document.getElementById("oct3").value;
    let oct4 = document.getElementById("oct4").value;


    if ( oct1 == 1){

        oc1 = proyectAndPreVenta*(oc1 / 100);
        cost = oc1 + cost;

        
    }else{
        cost = oc1 + cost;
        
    };

    if ( oct2 == 1){

        oc2 = proyectAndPreVenta*(oc2 / 100);
        cost = oc2 + cost;
    }else{
        cost = oc2 + cost;
    };

    if ( oct3 == 1){

        oc3 = proyectAndPreVenta*(oc3 / 100);
        cost = oc3 + cost;
    }else{
        cost = oc3 + cost;
    };

    if ( oct4 == 1){

        oc4 = proyectAndPreVenta*(oc4 / 100);
        cost = oc4 + cost;
    }else{
        cost = oc4 + cost;
    };




}


//calculo el presupuesto, la utilidad los imprimo
function calcTotal(){



    util = cost * (valce / 100);
    presupuesto = cost + util;


    document.getElementById("costo").innerHTML = `<div class="card text-white bg-primary mb-3 text-center border-success">
    <div class="card-header ">
      <h4>Costo</h4>
    </div>
    <div class="card-body" ><h4> $ ${Math.round(cost)}</h4> </div>`


    document.getElementById("porcentaje").innerHTML = `


    <div class="card-header">
              <h4>Utilidad</h4>
            </div>
            <div class="card-body" id="porcentaje">


            <h4> ${valce}% del Costo: $ ${Math.round(util)}</h4>

            </div>

    `
    document.getElementById("presupuesto").innerHTML = `<div class="card text-white bg-primary mb-3 text-center border-success">
    <div class="card-header ">
      <h4>Presupuesto</h4>
    </div>
    <div class="card-body" ><h4> $ ${Math.round(presupuesto)}</h4> </div>`

    document.getElementById("export").innerHTML = `<button id="boton" class="btn btn-success center inp" type="button" onclick="ExportToExcel('xlsx')">Exportar a excel</button>`


    

}

function table(){
    tabla = `<table border="1">

    <th>Item</th>
    <th>Costo</th>
 
</thead>
<tbody>

    <tr>
      <td>Reuniones pre venta</td>
      <td>${(pv1h*pv1p)*valpp}</td>
    </tr>

    <tr>
      <td>Armado de propuesta</td>
      <td>${pv2*valpp}</td>
    </tr>

    <tr>
    <td>Presentaciones pre venta</td>
    <td>${pv3*valpp}</td>
    </tr>

    <tr>
    <td><p> </p></td>
    <td><p> </p></td>
    </tr>

<!-- ------------------- -->

    <tr>
    <td>Villa Digital Recursos</td>
    <td>${co1}</td>
    </tr>

    <tr>
    <td>Infraestructura (Azure, M365, etc)</td>
    <td>${co2}</td>
    </tr>

    <tr>
    <td>Uso plataforma LMS</td>
    <td>${co3}</td>
    </tr>

    <tr>
    <td>QL otros recursos</td>
    <td>${co4}</td>
    </tr>

    <tr>
    <td>PM y administración</td>
    <td>${co5}</td>
    </tr>

    <tr>
    <td>Soporte y Gobernanza</td>
    <td>${co6}</td>
    </tr>
 
    <tr>
    <td><p> </p></td>
    <td><p> </p></td>
    </tr>
    
<!-- ------------------- -->
    <tr>
    <td>Logística (traslado, alojamiento, manutención)</td>
    <td>${oc5}</td>
    </tr>

    <tr>
    <td>Venta y costos comerciales o de terceros</td>
    <td>${oc1}</td>
    </tr>

    <tr>
    <td>Aspectos financieros y Amortizaciones</td>
    <td>${oc2}</td>
    </tr>

    <tr>
    <td>Impuestos, gravámenes y costes fiscales</td>
    <td>${oc3}</td>
    </tr>

    <tr>
    <td>Desviación probable</td>
    <td>${oc4}</td>
    </tr>

    <!-- ------------------- -->
    <tr>
    <td><p> </p></td>
    <td><p> </p></td>
    </tr>

    <tr>
    <td>Presupuesto</td>
    <td>${Math.round(presupuesto)}</td>
    </tr>

    <tr>
    <td>Utilidad</td>
    <td>${Math.round(util)}</td>
    </tr>

    <tr>
    <td>Costo</td>
    <td>${Math.round(cost)}</td>
    </tr>



    </tbody>
   
  </table>`

   document.getElementById("tabla").innerHTML = tabla;
}








document.addEventListener("DOMContentLoaded", function(e){


    document.getElementById("boton").addEventListener("click", function(e){
        getValues();
        calcPreVenta();
        calcProyect();
        calcOtrosCostos();
        calcTotal();
        table()
    });




})
