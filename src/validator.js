const validator = {
  isValid: function(creditCardNumber) {
    let valorInput = creditCardNumber ; // Este es el ejemplo de numero que va ir en el input.
    let arrayReversado = valorInput.split('').reverse();
    let multiplicacion = 0;

    //acumuladores
    let sumaTodos = 0;  
    let sumaDosDigitos = 0;
    let sumaTresDigitos = 0;
    for (var i = 1; i <= arrayReversado.length; i++) { //Que si es el numero el que le asignemos arriba q se ejecute tanta veces como numeros haya en el array 
      if (i % 2 === 0){
        multiplicacion = i * 2;
        let arrayMultiplicacion = String(multiplicacion).split("");
        if (arrayMultiplicacion.length >1) {
          for (const i of arrayMultiplicacion) {
            sumaDosDigitos += Number(i);
          } 
          sumaTodos += sumaDosDigitos;
          sumaDosDigitos = 0;
        } else {
          sumaTodos += multiplicacion;
        }
      } else {
        //sumaTodos += i //sumaTodos = sumaTodos + i es igual a el acumulado (acumulador) +  el nuevo valor que traiga la variable i 
        sumaTodos += Number(i)
      };
    }; 
    let resultadoArray = String(sumaTodos).split("");
    for (const i of resultadoArray) {
      sumaTresDigitos += Number(i);
    }

    if (sumaTresDigitos % 10 === 0) {
      return true;
    } else {
      return false;
    };
  }
  ,
  maskify: function(creditCardNumber){
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
};


export default validator;