"use strict";

function BinarioADecimal(num) {
  // tu codigo acalet binario = num.split('').reverse()
  let binario = num.split('').reverse()
  let decimal = 0;
  for(let i=0; i<binario.length; i++){
      decimal += Math.pow(2,i) * binario[i];
  }

  return decimal; 

  // algo
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = [];
    let cociente = num;

    for(let i=0; i<=num; i++){
        if(cociente/2 < 1){
            binario.unshift(cociente);
            break;
        }
        else{

            binario.unshift(cociente%2); 
            cociente = Math.floor(cociente/2)
        }
    }
    return binario.join('');
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
