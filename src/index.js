import validator from './validator.js';

console.log(validator);
console.log("hola"); 


document.getElementById("numberOne").addEventListener("click",function pantallaNumberOne() {
    document.getElementById("section").innerHTML = `
        <div class="articulos">
            <article class="article">
            <img src="../img/baño-1.png" alt="baño1">
            </article>
            <a class= "agendatuCita" href="#">Agenda tu cita</a>
            <article class="article">
            <h3>!!Elegiste el baño Number One!!</h3> 
            <img src="../img/perrito numberone.jpg" alt="perrito pocion uno">
            <a href="#">Ir a pagar</a>
            </article>  
        </div>
    `;

} );


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



/* document.getElementById("traerText").addEventListener("click",function ejecutarFunciones() {
    let traerValue = document.getElementById("myText").value;
    let validarNumero = validator.isValid(traerValue);
    console.log(validarNumero);
    if (validarNumero === true){
        document.getElementById("validador2").innerHTML = "Tu número esta oculto por unos gatitos: " + validator.maskify(traerValue);
    } else {
        alert("Su tarjeta no es valida, intente nuevamente con un número valido")
    };  
} ); */



   

/* 
Hacer que la funcion isvalid reciba un argumento en string y que lo retorne y que retorne true o false
luego hacer que la funcion maskify() reciba un argumento en tring y si es isValid es igual a true retorne el string
Crear en el index.html un imput que reciba un valor que le escribamos el cual va hacer el argumento de isValid
Hacer un elemento html con un id para mostrar el resultado del maskIfY  
Segunda versin de lo de arriba despues de haber logrado eso vamos a probar el argoritmo de lumm en isValid
y con maskifY vamos a crear los pasos para enmascarar ese string que nos llegue como argumento
*/