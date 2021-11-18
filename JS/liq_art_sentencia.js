//DECLARO VARIABLES Y CONST. GLOBALES
const mobileBreakpoint = window.matchMedia("(max-width: 991px )");
var calendario;
var monto;
var norma;
var ripte = document.getElementById("mostrarPisoMinimo");
var fa1;
var fa2;
var fa3;
var formula_objetc = new Object();
    formula_objetc.fecha_accidente = "";
    formula_objetc.fecha_inicioRL = "";
    formula_objetc.edad = "";
    formula_objetc.porcentaje = "";
    formula_objetc.piso_minimo = "";
    formula_objetc.vibm = "";
    formula_objetc.coef_edad = "";
    formula_objetc.ley_aplicable = "";
    formula_objetc.res_aplicable = "";
    formula_objetc.articuloTres = "";
    formula_objetc.total = "";
    formula_objetc.piso_aplicado = "";
    





//FUNCION QUE TRANSFORMA NUMERO EN MONEDA
function transformar(elemento) {

    // montoParaIBM = parseFloat(elemento).toFixed(2);
    // monto.toFixed(2);
    // alert(new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(number));
    var transformado = "$ " + new Intl.NumberFormat("de-DE").format(elemento);
    parseFloat(transformado).toFixed(2);

    return transformado;
} // FIN FUNCION TRANSFORMAR

function miFuncion() {

    formula_objetc.fecha_accidente = $("#fechaAccidente").val();
    formula_objetc.fecha_inicioRL = $("#fechaInicioRL").val();
    formula_objetc.edad = $("#edad").val();
    formula_objetc.coef_edad = (65 / formula_objetc.edad).toFixed(3);
    formula_objetc.porcentaje = $("#porcentaje").val();
    var edad = document.getElementById("mostrarCoeficienteEdad");   

    const coeficiente = parseFloat(65/ $("#edad").val()).toFixed(3);
    const valorEdad = $("#edad").val();

    edad.innerHTML = "<strong> 2.- </strong>" + "El coeficiente de edad del actor es de " + coeficiente +
    " (65/" + valorEdad + ").";

    formula_objetc.vibm = $("#vibm").val();
    // formula_objetc.vibm = VIBM.ingresoBase;

    document.getElementById("mostrarIBM").innerHTML = "<strong> 3.- </strong> El valor del I.B.M. asciende a la suma de " + transformar(formula_objetc.vibm) + ".";
    
    



    // INDICAR EN EL TEXTO DE LA SENTENCIA LOS VALORES CONSTANTES DEFINIDOS

}; // fin miFuncion //

function calcularPiso() {
    
    calendario = document.getElementById("fechaAccidente").valueAsNumber;
    
    // var porcInc = document.getElementById("porcentaje");
    

    
    if (calendario >= 1351209600000 && calendario <= 1640746800000) { // 


        if (calendario >= 1351209600000 && calendario <= 1362009600000) { //24/10/2012 al 28/02/2013//

            formula_objetc.res_aplicable = "Resol. 34/2013";
            formula_objetc.piso_minimo = 336630,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }
        if (calendario > 1362009600000 && calendario <= 1377907200000) { //01/03/2013 al 31/08/2013 //

            formula_objetc.res_aplicable = "Resol. 34/2013";
            formula_objetc.piso_minimo = 416943,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            
            
        }
        if (calendario > 1377907200000 && calendario <= 1393545600000) { //01/09/2013 al 28/02/2014//

            formula_objetc.res_aplicable = "Resol. 34/2013";
            formula_objetc.piso_minimo = 476649,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            
        }
        if (calendario > 1393545600000 && calendario <= 1409443200000) { // 01/03/2014 al 31/08/2014 //

            formula_objetc.res_aplicable = "Resol. 3/2014";
            formula_objetc.piso_minimo = 521883,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            
        }

        if (calendario > 1409443200000 && calendario <= 1425081600000) { // 01/09/2014 al 28/02/2015 //

            formula_objetc.res_aplicable = "Resol. 22/2014";
            formula_objetc.piso_minimo = 620414,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }
        if (calendario > 1425081600000 && calendario <= 1440979200000) { // 01/03/2015 al 31/08/2015 //

            formula_objetc.res_aplicable = "Resol. 6/2015";
            formula_objetc.piso_minimo = 713476,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }
        if (calendario > 1440979200000 && calendario <= 1456704000000) { // 01/09/2015 al 29/02/2016 // 

            formula_objetc.res_aplicable = "Resol. 28/2015";
            formula_objetc.piso_minimo = 841856,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }
        if (calendario > 1456704000000 && calendario <= 1472601600000) { // 01/03/2016 al 31/08/2016 //

            formula_objetc.piso_minimo = "Resol. 1/2016";
            formula_objetc.piso_minimo = 943119,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }
        if (calendario > 1472601600000 && calendario <= 1484784000000) { // 01/09/2016 al 19/01/2017 //

            formula_objetc.res_aplicable = "Resol. 387/2016";
            formula_objetc.piso_minimo = 1090945,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }

        if (calendario > 1484784000000 && calendario <= 1487116800000) { // 20/01/2017 al 15/02/2017 //

            formula_objetc.res_aplicable = "Resol. 387/2016";
            formula_objetc.piso_minimo = 1090945,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y DNU 54/2017";
            mostrar(norma, monto);
            

        }

        if (calendario > 1487116800000 && calendario <= 1488240000000) { // 20/01/2017 al 28/02/2017 //

            formula_objetc.res_aplicable = "Resol. 387/2016";
            formula_objetc.piso_minimo = 1090945,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }


        if (calendario > 1488240000000 && calendario <= 1504137600000) { // 01/03/2017 al 31/08/2017 //

            formula_objetc.res_aplicable = "Resol. Nota SCE 5649/2017";
            formula_objetc.piso_minimo = 1234944,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1504137600000 && calendario <= 1519776000000) { // 01/09/2017 al 28/02/2018 //

            formula_objetc.res_aplicable = "Resol. Nota SCE 21161/2017";
            formula_objetc.piso_minimo = 1400864,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1519776000000 && calendario <= 1535673600000) { // 01/03/2018 al 31/08/2018 //

            formula_objetc.res_aplicable = "Resol. Nota SCE 6026/2018";
            formula_objetc.piso_minimo = 1569865,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1535673600000 && calendario <= 1551312000000) { // 01/09/2018 al 28/02/2019 //

            formula_objetc.res_aplicable = "Resol. Nota GCP 18437/2018";
            formula_objetc.piso_minimo = 1766636,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1551312000000 && calendario <= 1567209600000) { // 01/03/2019 al 31/08/2019 //

            formula_objetc.res_aplicable = "Resol. Nota GCP 2727/2019";
            formula_objetc.piso_minimo = 2049647,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1567209600000 && calendario <= 1582934400000) { // 01/09/2019 al 28/02/2020 //

            formula_objetc.res_aplicable = "Resol. Nota SCE 76715123/2019";
            formula_objetc.piso_minimo = 2482061,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1582934400000 && calendario <= 1598832000000) { // 01/03/2020 al 31/08/2020

            formula_objetc.res_aplicable = "Resol. SRT 24/2020";
            formula_objetc.piso_minimo = 2958970,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1598832000000 && calendario <= 1598832000000) { // 01/09/2020 al 28/02/2021 ** CORREGIR SEGUNDA FECHA

            formula_objetc.res_aplicable = "Resol. SRT 70/2020";
            formula_objetc.piso_minimo = 3483482,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }

    } else if (calendario >= 810950400000  && calendario < 977961600000) { // 13/09/1995 al 27/12/2000
    formula_objetc.ley_aplicable = "ley 24.557";
    
    } else if (calendario >=  977961600000 && calendario < 1257292800000) { // 28/12/2000 al 4/11/2009
    formula_objetc.ley_aplicable = "ley 24.557, Decreto 1278/00";
    
    } else if (calendario >=  1257379200000 && calendario < 1351036800000) { // 5/11/2009 al 24/10/12
    formula_objetc.ley_aplicable = "ley 24.557, Decreto 1694/09";
    
    }

    deshabilitar();
    
}



function mostrar(norma, monto) {
    
    monto = formula_objetc.piso_minimo;
    norma = formula_objetc.res_aplicable;

    monto_adecuado = (monto * formula_objetc.porcentaje) * 100;
    document.getElementById("mostrarPisoMinimo").innerHTML = "<strong> 1.- </strong>" + "El piso mínimo para la fecha seleccionada es de " +
    transformar((monto * formula_objetc.porcentaje) / 100) + " conforme " + norma + " (" + transformar(monto) +
    " x " + formula_objetc.porcentaje + " %).";

    document.getElementById("mostrarLeyAplicable").innerHTML = "<strong> Ley aplicable: </strong>" + formula_objetc.ley_aplicable;

}

function deshabilitar() {
    if (calendario >= 810950400000 && calendario <= 1484784000000){ //13/9/95 al 19/1/17
        $("#sinRipte").attr("disabled", false); 
        $("#sinRipte_quincenal").attr("disabled", false); 
        $("#conRipte").attr("disabled", true); 
        $("#conRipte_quincenal").attr("disabled", true); 
    }
    if (calendario > 1484784000000){
        $("#conRipte").attr("disabled", false); 
        $("#conRipte_quincenal").attr("disabled", false); 
        $("#sinRipte").attr("disabled", true); 
        $("#sinRipte_quincenal").attr("disabled", true); 
    }
}


function bloquearText() {
    var text = document.getElementById("edad");
    var fechaNac = document.getElementById("fechaNacimiento");
    /* función que permite habilitar o deshabilitar un input text para escribir, se puede reemplazar
    con jquery por la función toggle (si mal no me acuerdo)*/
    text.value = "";
    text.disabled = true;
    fechaNac.disabled = false;
} // fin función bloqueartext //

function desbloquearText() {
    var text = document.getElementById("edad");
    var fechaNac = document.getElementById("fechaNacimiento");

    text.disabled = false;
    fechaNac.value = "";
    fechaNac.disabled = true;

} // fin función desbloquear //

function calculoFecha() {
    var text = document.getElementById("edad");
    // var fechaNac = document.getElementById("fechaNacimiento");

    var fa = document.getElementById("fechaAccidente").valueAsNumber;
    var fn = document.getElementById("fechaNacimiento").valueAsNumber;
    var dif = ((fa - fn) / 86400000) / 365.242189;
    text.value = parseInt(dif);

    formula_objetc.fecha_inicioRL = document.getElementById("fechaInicioRL").valueAsNumber;
} // fin función calculofecha //

function formula_LRT(coeficiente, incapacidad, ingBase) {

    coeficiente = formula_objetc.coef_edad;
    incapacidad = formula_objetc.porcentaje / 100;
    ingBase = formula_objetc.vibm;
    
    // var str = String(ingBase);
    //     str = str.replace(/[$.\s]/g, "");
    //     str = str.replace(/[,]/g, ".");

    // var num = Number(str);
    // console.log(num);
    
    // ingBase = parseFloat(num);
    // console.log(num);

    formula_objetc.total = (53 * coeficiente * incapacidad * ingBase).toFixed(2);

    document.getElementById("mostrarFormula").innerHTML = "<strong> FORMULA ART. 14 LEY 24.557 : </strong> 53 x " + coeficiente + " x " +
    transformar(formula_objetc.vibm) + " x " + incapacidad + " = " + transformar(formula_objetc.total) +".";

    if(calendario =>  1351209600000){ //24/10/2012
        formula_objetc.articuloTres = (formula_objetc.total * .20).toFixed(2);
        document.getElementById("mostrarArticulotres").innerHTML = "<strong> ART. 3 LEY 26.773 : </strong> " + transformar(formula_objetc.total) + " x 20 % = " +
        transformar(formula_objetc.articuloTres) + ".";
        $("#mostrarArticulotres").fadeIn(1000, "swing");
    } else{
        formula_objetc.articuloTres = 0;
    }

    var total = (parseFloat(formula_objetc.total) + parseFloat(formula_objetc.articuloTres)).toFixed(2);

    document.getElementById("mostrarTotal").innerHTML = "<strong> TOTAL : </strong> " + transformar(total) + ".";
    $("#mostrarTotal").fadeIn(1000, "swing");

    formula_objetc.piso_aplicado = parseFloat((formula_objetc.piso_minimo * formula_objetc.porcentaje)/100).toFixed(2);
    
    
    document.getElementById("mostrarSentencia").innerHTML = 

        "En consecuencia, dado el carácter definitivo de la IPP (incapacidad permanente parcial) igual o inferior al 50 %, el damnificado percibirá una indemnización de pago único, cuya fórmula de pago es: VMIB (valor mensual de ingreso base determinado por el art. 12) x 53 x CE (coeficiente de edad que resulta de dividir 65 por la edad del actor a la fecha de la primera manifestación invalidante) sobre % (porcentaje de incapacidad), habiéndose fijado un piso mínimo que resulta de multiplicar" +
        "<strong> " + transformar(formula_objetc.piso_minimo) + "</strong> por el porcentaje de incapacidad <strong>(" + formula_objetc.porcentaje + "%)</strong>, ello de conformidad con la normativa vigente a la fecha de acaecido el daño " +
        "(" + formula_objetc.ley_aplicable + " y " + formula_objetc.res_aplicable + ").<br>" +
        "A tal fin, el cálculo se efectuará conforme la incapacidad establecida por el perito médico determinada en un " +
        "<strong>" + formula_objetc.porcentaje + "%</strong>, sobre un ingreso base mensual de <strong>" + transformar(formula_objetc.vibm) + "</strong>.<br>" +
        "En consecuencia, y de conformidad con lo resuelto en la primera cuestión, surge que la regla de aplicación vigente al momento de la primera manifestación invalidante es la establecida por el art. 14, inc. 2, ap. “a” de la " + formula_objetc.ley_aplicable + ". " +
        "Por lo expuesto, dada la edad del actor al momento de la primera manifestación invalidante <strong>(" + formula_objetc.edad + " años)</strong>, la fórmula establecida por la normativa de referencia arroja la siguiente suma: " +
        "53 x " + parseFloat(formula_objetc.coef_edad).toFixed(2) + " (65/" + formula_objetc.edad +") x " + transformar(formula_objetc.vibm) + " x " + formula_objetc.porcentaje + "% = <strong>" + transformar(formula_objetc.total) + "</strong>, " +
        "resultado que se encuentra por encima del mínimo legal establecido por la <strong> " + formula_objetc.res_aplicable + " (" + transformar(formula_objetc.piso_minimo) + " x " + formula_objetc.porcentaje + "% = " + transformar(formula_objetc.piso_aplicado) + ")</strong>.<br>" +
        "Asimismo, dicho monto se verá incrementado en un 20 % de conformidad con lo dispuesto por el art. 3 de la ley 26.773," +
        "arrojando el mismo la suma <strong>" + transformar(formula_objetc.articuloTres) + " ( " + transformar(formula_objetc.total) + " x 20%)</strong>.<br>" +
        "En consecuencia, la indemnización derivada de la incapacidad que detenta el accionante, a la cual éste es acreedor y por la cual debe responder la accionada " +
        "asciende a la suma de <strong>" + transformar(total) + "</strong>."
}

function balthazard (){
    var x = $("#incFisica").val();
    var y = 100 - x;
    var j = $("#incPsicol").val();
    $("#porcentaje").val(parseFloat(x) + parseFloat((j * y)/100));
}


$(document).ready(function () {
    // $(".dash-nav-dropdown-toggle").click(function () {
    //     $(this).closest(".dash-nav-dropdown")
    //         .toggleClass("show")
    //         .find(".dash-nav-dropdown")
    //         .removeClass("show");

    //     $(this).parent()
    //         .siblings()
    //         .removeClass("show");
    // });

    // $(".menu-toggle").click(function () {
    //     if (mobileBreakpoint.matches) {
    //         $(".dash-nav").toggleClass("mobile-show");
    //     } else {
    //         $(".dash").toggleClass("dash-compact");
    //     }
    // });

    // $(".searchbox-toggle").click(function () {
    //     $(".searchbox").toggleClass("show");
    // });

    //A PARTIR DE ACA EMPIEZA MI CODIGO--- REVISAR TODO, PRINCIPALMENTE LOS ID

    // variables para fecha
    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = (day) + - + (month) + - + now.getFullYear();

    $("#fechaHasta").val(today);

    $("#fechaAccidente").on("blur", function (){

        calcularPiso();

    });

    $("#jumboton").click(function () {

        miFuncion();
        mostrar();
        $(".mostrarTodo, .mostrarTodo_2").css("display", "flex");
        $("#mostrarLeyAplicable").fadeIn(500, "swing");
        $("#mostrarPisoMinimo").fadeIn(600, "swing");
        $("#mostrarCoeficienteEdad").fadeIn(700, "swing");
        $("#mostrarIBM").fadeIn(800, "swing");
        $("#mostrarFormula").fadeIn(900, "swing");
        $("#mostrarSentencia").fadeIn(1100, "swing");
        $("#copyJumbotron").fadeIn(1100, "swing");
        formula_LRT();
    
    })

    $("#edad, #edadchk").on("click", function () {

        desbloquearText();

    })

    $("#fechachk").on("click", function () {
        bloquearText();
    })



    $("#fechaNacimiento").on("change", function () {

        calculoFecha();

    })

    $("#fechaAccidente").on("blur", function () {

        fa1 = $("#fechaAccidente").val();
        fa2 = fa1.slice(0, 4);
        fa3 = Number(fa2) - 1;
        $("#fechaInicioRL").val(fa1.replace(fa2, String(fa3)));

    });

    $('tbody>tr>td>input.rem, tbody>tr>td>input[class=remun24557]').on('keydown',function(e){ 
        var keyCode = e.keyCode || e.which; 
       
        if(e.keyCode === 13) { 
         e.preventDefault();
         (this).select(); 
         $('input')[$('input').index(this)+1].focus(); 
         } 
        
    });

    $("#incFisica, #incPsicol").blur(balthazard);

    $("#jumboton_acuerdos").click(function(){

        
        $(".mostrarTodo_2").replaceWith($(".mostrarTodo_3"));
        $(".mostrarTodo_3").css("display", "flex");
        
        $("#hastaHoy").text(today);
        

    });

    $("#acuerdoListo").click(function(){
        
        var capital = parseFloat($("#capital").val());
        var acuerdo = parseFloat($("#montoAcuerdo").val());
        var nuevoCapital = parseFloat($("#nuevoCapital").val());
        var totalCapital = parseFloat($("#totalCapital").val());
        
        if(acuerdo < nuevoCapital || acuerdo < capital){

            $(".romualdi, .deCillis, .dosSantos").fadeOut(1);
            $(".deCillisNo, .romualdiNo, .dosSantosNo").fadeIn(1);
            
        }
        if(acuerdo > nuevoCapital && acuerdo < totalCapital){
            $(".romualdi").fadeOut(1);
            $(".romualdiNo").fadeIn(1);
            $(".deCillisNo, .dosSantosNo").fadeOut(1);
            $(".deCillis, .dosSantos").fadeIn(1);
        }
        
        if(acuerdo > totalCapital){
            $(".deCillis, .romualdi, .dosSantos").fadeIn(1);
            $(".romualdiNo, .deCillisNo, .dosSantosNo").fadeOut(1);
        }

    });



    // Dev utilities
    // $("header.dash-toolbar .menu-toggle").click();
    // $(".searchbox-toggle").click();
});