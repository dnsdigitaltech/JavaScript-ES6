/////////////////Operação em Array///////////
const arr = [1, 3, 4, 5, 8, 9];

//map-> função que serve pra percorrer o vetor e retornar o alguma informação
const newArr = arr.map(function(item) {
    return item * 2; //multiplica todos os item do vetor por 2
});

console.log(newArr);

//reduce-> função que pode consumir todo nosso vetor e tranformar em uma unica informação
const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

//filter-> função que pegar uma informação através de filtro
const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

//find-> função que verifica se existe uma informação e a encontra no array
const find = arr.find(function(item) {
    return item === 78;
});
console.log(find);