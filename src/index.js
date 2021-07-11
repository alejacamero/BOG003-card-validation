import validator from './validator.js';

console.log(validator);
console.log("hola"); 


document.getElementById("numberOne").addEventListener("click",function pantallaNumberOne() {
   const section1 = document.getElementById("section1").style.display = "none";
   const section2 = document.getElementById("section2").style.display = "block";
   
} );

document.getElementById("premium").addEventListener("click",function pantallaNumberOne() {
    const section1 = document.getElementById("section1").style.display = "none";
    const section2 = document.getElementById("section3").style.display = "block";
    
} );

document.getElementById("irPagar1").addEventListener("click",function pantallaNumberOne() {
    const section1 = document.getElementById("section2").style.display = "none";
    const section2 = document.getElementById("section4").style.display = "block";
    
} );

document.getElementById("irPagar2").addEventListener("click",function pantallaNumberOne() {
    const section1 = document.getElementById("section3").style.display = "none";
    const section2 = document.getElementById("section4").style.display = "block";
    
 } );
/*
console.log("lineaveintitres");

document.getElementById("premium").addEventListener("click",function pantallaPremium() {
    document.getElementById("section").innerHTML = `
        <div class="articulos">
            <article class="article">
                <img src="..//img/baño-2.png" alt="baño2">
            </article>
            <a class="agendatuCita" href="#">Agenda tu cita</a>
            <article class="article">
                <h3>!!Elegiste el baño Premium!!</h3> 
                <img class="imagenConejito" src="../img/conejitopremium.jpg" alt="Conejito">
                <a id="irPagar" href="#">Ir a pagar</a>
            </article>  
        </div>
    `;

} );
*/


/*FUNCION PARA VALIDAR TARJETA Y TRANSFORMAR NUMEROS EN NUMERALES*/
document.getElementById("validarTarjeta").addEventListener("click",function ejecutarFunciones() {
    let traerValue = document.getElementById("inputNumero").value; //aqui traemos el value es decir los numeros que el usuario ingresa en la pagina 4 input numnero tarjeta
    let validarNumero = validator.isValid(traerValue);
    console.log(validarNumero);
    console.log(traerValue);
    if (validarNumero === true){
        document.getElementById("resultadoValiador").innerHTML = "Tu tarjeta número: " + validator.maskify(traerValue) + " " + "   es valida";  //la linea 55 y 59 estan usando las funciones del objeto validator, para sr usadas las veces que queramos
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
/*
/* tarjeta validadora
const tarjeta = document.querySelector('#tarjeta');
formulario = document.querySelector('formularioTarjeta-tarjeta');


/*select del mes dinamico 
for(let i = 1 <= 12; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i
    formulario.selectMes.appendchild(option);
}


/*select del mes dinamico 
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
    option.value = i;
    option.innerText = i
    formulario.selectYear.appendchild('option');

}
*/

