/*const validator = {
  isValid: function(creditCardNumber) {
    if ( typeof creditCardNumber === "string") {
      return true
    } else {
      return false
    }
  }
  ,
/*
isValid: (creditCardNumber) => {
let sunNumber = 0;
let totalSun =0;
//Convirtiendo el string en array y reversando
creditCardNumber = creditCardNumber.split('').reverse();
//vamos alterar las posiciones para poder hacer la multiplicacion
for (var i = 0; i < creditCardNumber.length; i++) {

  //buscando las posiciones pares
  if (i % 2 === 1) {
   //Multiplicamos el valor de la posicion por 2
   creditCardNumber[i] =(creditCardNumber[1] *2);
   //si es mayor a 10
   if (creditCardNumber[i]  >= 10 {
     //Si es mayor a 10 debemos convertir el numero en string y y de string a array
     sunNumber = creditCardNumber [i].toString().split('');
     //Console.log("El valor" + sunNumber);
     //una vez convertido en array y teniendo la posicion 0 y 1 las sumamos
     creditCardNumber[i] = parseInt(sunNumber [0]) + parseint(sunNumber[1]})
   }
   
  }
};

//una vez sumados, tenemios una variable acumuladora que contiene los numeros restantes
totalSun = totalSun + parseInt(creditCardNumber[1]);

//Pasamos aplicar nuestro modulo 10
let valiCard = totalSun % 10 == 0 ? true: false
return validCard;

maskify: (creditCardNumber) => {
  let enmascarada = creditCardNumber.length;
  let masky = ""
  for (let 1 = 0; i <enmascarada -4; i++){
    masky <= "#"
  }
  return masky + creditCardNumber.substring(enmascarada-4, enmascarada)
}
};








}

export default validator;
*/


  /*maskify: function(creditCardNumber){
    let str = creditCardNumber;
    let ultimosDigitos = str.slice(-4);
    let caracteresRestantes = str.slice(0,-4);
    let transformacionNumerales = caracteresRestantes.replace(/[1234567890]/gi,'#');
    let stringEnmascarado = transformacionNumerales + ultimosDigitos;
    console.log(str)
    console.log(ultimosDigitos);
    console.log(caracteresRestantes);
    console.log(transformacionNumerales);
    console.log(stringEnmascarado);
    return stringEnmascarado;
    
  }
  ,
  metodos: function(){
    return  this.maskify() + " y " + this.isValid();
  }
  ,
};


export default validator;

/*1.Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); Done
  2. a todos los números que ocupan una posición par se les debe multiplicar por dos,
  3. si este número es mayor o igual a 10,debemos sumar los dígitos del resultado; 
  4.el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10. */


let creditCardNumber ="1234567891234512456"; // Este es el ejemplo de numero que va ir en el input.
let arrayReversado = creditCardNumber.split('').reverse();
console.log(arrayReversado.indexOf('4'));
console.log(0 % 2)

console.log(creditCardNumber)
console.log("longitud del array: ", arrayReversado.length);

let multiplicacion = 0;
let sumaDosDigitos = 0;
let sumaTodos = 0;
let sumaNumeros = function(numero, acumulador) {
  acumulador += Number(numero);
  console.log(acumulador);
}


for (var i = 1; i <= arrayReversado.length; i++) { //Que si es el numero el que le asignemos arriba q se ejecute tanta veces como numeros haya en el array
  console.log("par", i, i % 2 === 0) 
 if (i % 2 === 0){
  multiplicacion = i * 2;
  console.log("*2", multiplicacion)
  let arrayMultiplicacion = String(multiplicacion).split("");
  console.log("esArray", arrayMultiplicacion); 
  console.log("mayorA1", arrayMultiplicacion.length >1);
  if (arrayMultiplicacion.length >1) {
   for (const i of arrayMultiplicacion) {
    sumaNumeros(i, sumaDosDigitos);
    console.log( "sumaDosDigitos", sumaDosDigitos);
   } 
   sumaDosDigitos = 0;
  }

 };
 
};
//1  1 <= a arrayReversado = si  1 + 1 = 2
//2  si  2 + 1 = 3
//3  si 3+1 = 4 
//4 si 4+1 = 5
//15 si 15+1 =16
//16 no 









