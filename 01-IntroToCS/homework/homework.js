'use strict';

function BinarioADecimal(num) {
   var numReverse = num.toString().split('').reverse().join('')
   var suma = 0
   for (let i = 0; i < numReverse.length; i++) {
      suma = suma + numReverse[i] * 2 ** i
   }
   return suma
}

function DecimalABinario(num) {
   let num1 = num;
   let binary = (num1 % 2).toString();
   for (; num1 > 1; ) {
       num1 = parseInt(num1 / 2);
       binary =  (num1 % 2) + (binary);
   }
   return (binary);
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
