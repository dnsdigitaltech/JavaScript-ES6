/////////////////Operadores Rest/Spread/////////////
//este operador e conheciro por usar ...
//REST -> serve pra pegar o resto das propriedades

const usuario = {
    nome: 'Davi',
    idade: 35,
    empresa: 'DNS DIGITAL TECH'
};

//utilizando desestruturação
const { nome, ...resto } = usuario; //pega o nome e armazena os demais dados na variável resto, é pra isto que usamos o REST OPERATOR
console.log(nome);
console.log(resto);

//Também usamos em vetor
const arr = [1, 2, 3, 4];
//utilizando desestruturação
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

//Usamos em parâmetros de funções
function soma(a, b, c) { //se add mais um parâmetro será necessário colocar em todos
    return a + b + c;
}
console.log(soma(1, 3, 5));

//pegar todos os parêmetro utilisando o REST
function soma2(...params) { //se add mais um parâmetro será necessário colocar em todos
    return params.reduce((total, next) => total + next);
}
console.log(soma2(1, 3, 5));

//SPREAD -> faz o papel de repassar um objeto de array pra outra estrutura de dados

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//para juntar os arrays de dados
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//outras utilizações
const usuario1 = {
    nome: 'Davi',
    idade: 35,
    empresa: 'DNS DIGITAL TECH'
};
//uma grande utilização é criar um novo objeto com todos essas propriedades, porém queremos torca apenas uma propriedade
const usuario2 = {...usuario1, nome: 'Nathan' };
console.log(usuario2);