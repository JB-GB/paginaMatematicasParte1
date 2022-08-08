
function adc(){
    var lado = Number(document.getElementById("ladoC").value);
    var display = document.getElementById("adcR");
    var area = lado*lado;
    display.innerHTML = area + " unidades";
}

function adr(){
    var lado1 = Number(document.getElementById("ladoR1").value);
    var lado2 = Number(document.getElementById("ladoR2").value);
    var display = document.getElementById("adrR");
    var area = lado1*lado2;
    display.innerHTML = area + " unidades";
}

function check1(){
    var precio = Number(document.getElementById("price").value);
    var descuento;
    var display = document.getElementById("fPrice");

    if(precio > 1000){
        descuento = (precio * .70);
    }
    else{
        descuento = (precio * .90);
    }
    display.innerHTML = "$" + descuento;
}

/*
function parNpar(){
    if(){

    }
    else{

    }
}*/

function numDes(){
    let numDes = document.getElementById("pes");
    var nums = [];
    for(var des = 100; des >= 1; des--){
        nums[des] = "<br>" + des;
        console.log(des);
    }
    numDes.innerHTML = nums.reverse();
}