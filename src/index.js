import validator from './validator.js';

 
document.getElementById("numberOne").addEventListener("click",function pantallaNumberOne() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
   
} );


document.getElementById("premium").addEventListener("click",function pantallaNumberOne() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section3").style.display = "block";
    
} );

document.getElementById("irPagar1").addEventListener("click",function pantallaNumberOne() {
    document.getElementById("section2").style.display = "none";
    document.getElementById("section4").style.display = "block";
    
} );

document.getElementById("irPagar2").addEventListener("click",function pantallaNumberOne() {
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "block";
    
 } );



/*FUNCION PARA VALIDAR TARJETA Y TRANSFORMAR NUMEROS EN NUMERALES*/
document.getElementById("validarTarjeta").addEventListener("click",function ejecutarFunciones() {
    let traerValue = document.getElementById("inputNumero").value; //aqui traemos el value es decir los numeros que el usuario ingresa en la pagina 4 input numnero tarjeta
    let validarNumero = validator.isValid(traerValue);
    if (validarNumero === true){
        document.getElementById("resultadoValiador").innerHTML = "Tu tarjeta número: " + validator.maskify(traerValue) + " " + "   es valida";  //la linea 55 y 59 estan usando las funciones del objeto validator, para sr usadas las veces que queramos
    } else {
        alert("Su tarjeta no es valida, intente nuevamente con un número valido")
    }  
} );
