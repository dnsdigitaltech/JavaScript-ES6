"use strict";

/////////////////Operação em Array///////////
var arr = [1, 3, 4, 5, 8, 9]; //map-> função que serve pra percorrer o vetor e retornar o alguma informação

var newArr = arr.map(function (item) {
  return item * 2; //multiplica todos os item do vetor por 2
});
console.log(newArr); //reduce-> função que pode consumir todo nosso vetor e tranformar em uma unica informação

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //filter-> função que pegar uma informação através de filtro

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //find-> função que verifica se existe uma informação e a encontra no array

var find = arr.find(function (item) {
  return item === 78;
});
console.log(find);
