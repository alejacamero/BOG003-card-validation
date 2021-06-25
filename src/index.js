import validator from './validator.js';

console.log(validator);
console.log("hola"); 
document.getElementById("traerText").addEventListener("click",function ejecutarFunciones() {
    let traerValue = document.getElementById("myText").value;
    let validarNumero = validator.isValid(traerValue);
    console.log(validarNumero);
    if (validarNumero === true){
        document.getElementById("validador2").innerHTML = "Tu número esta oculto por unos gatitos: " + validator.maskify(traerValue);
    } else {
        alert("Su tarjeta no es valida, intente nuevamente con un número valido")
    };  
} );

/* 
Hacer que la funcion isvalid reciba un argumento en string y que lo retorne y que retorne true o false
luego hacer que la funcion maskify() reciba un argumento en tring y si es isValid es igual a true retorne el string
Crear en el index.html un imput que reciba un valor que le escribamos el cual va hacer el argumento de isValid
Hacer un elemento html con un id para mostrar el resultado del maskIfY  
Segunda versin de lo de arriba despues de haber logrado eso vamos a probar el argoritmo de lumm en isValid
y con maskifY vamos a crear los pasos para enmascarar ese string que nos llegue como argumento
*/