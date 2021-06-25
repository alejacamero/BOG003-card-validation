import validator from './validator.js';

console.log(validator);
console.log("hola"); 
/* Insertar en un span un metodo de validador para probar */
/*function myFunctionUno() {
    let traerValue = document.getElementById("myText").value;
    document.getElementById("validador2").innerHTML = validator.maskify(traerValue);
    document.getElementById("validador3").innerHTML = validator.isValid(traerValue);  
}; */
function myFunction() {
    let traerValue = document.getElementById("myText").value;
     document.getElementById("mostrar").innerHTML = traerValue;
   }
/* 
Hacer que la funcion isvalid reciba un argumento en string y que lo retorne y que retorne true o false
luego hacer que la funcion maskify() reciba un argumento en tring y si es isValid es igual a true retorne el string
Crear en el index.html un imput que reciba un valor que le escribamos el cual va hacer el argumento de isValid
Hacer un elemento html con un id para mostrar el resultado del maskIfY  
Segunda versin de lo de arriba despues de haber logrado eso vamos a probar el argoritmo de lumm en isValid
y con maskifY vamos a crear los pasos para enmascarar ese string que nos llegue como argumento
*/