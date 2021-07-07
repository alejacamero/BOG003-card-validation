const validator = {
  isValid: function(creditCardNumber) {
    if ( typeof creditCardNumber === "string") {
      return true
    } else {
      return false
    }
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
  ,
  metodos: function(){
    return  this.maskify() + " y " + this.isValid();
  }
  ,
};


export default validator;
