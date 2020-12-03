'use strict'

var arryNumeroUno = new Array(5); //Objeto
var arryNumeroDos = new Array(5); //Objeto
var arryNumeroTres = new Array(); //Objeto



for (let index = 0; index < arryNumeroUno.length; index++) 
{
    arryNumeroUno[index] = Number(prompt("#: "+(index + 1)+" Por favor ingrese 10 numeros"))
}
for (let index = 0; index < arryNumeroDos.length; index++) 
{
    arryNumeroDos[index] = Number(prompt("#: "+(index + 6)+" Por favor ingrese 10 numeros"))
}

//Imprimir

arryNumeroTres = arryNumeroUno.concat(arryNumeroDos);

var resul=document.getElementById("resultado");

resul.innerHTML ="Numeros Ingresados"+"<br/>"+"<br/>"; 

for(let index = 0; index < arryNumeroTres.length; index++)
{
    resul.innerHTML +="El número es: " + arryNumeroTres[index] +"<br/>"; 
}

