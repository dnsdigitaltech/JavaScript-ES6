"use strict";

/////////////////Valores padrão pro parâmetros das funções///////////
//function soma(a, b) {
function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  //é necessário atribuir dados
  return a + b;
} //se executar isto vai retorna NaN nos dois, pois não conseguiu identificar qual nº é para somar


console.log(soma(1));
console.log(soma()); //igualmente para arrow function

var soma2 = function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return a + b;
};

console.log(soma2(1));
console.log(soma2());
