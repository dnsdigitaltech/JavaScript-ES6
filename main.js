/////////////////Arrow Functions///////////
//uma das funcionalidades mais usadas do ES6
const arr = [1, 2, 3, 5, 8, 9];

//const newArr = arr.map(function(item) { sem arrow functios
//com arrow functions em functions anônimas
//const newArr = arr.map((item) => {
//quando recebe apenas um paremetro podemos remover os parentes
/*const newArr = arr.map(item => {
    return item * 2; //multiplica todos os item do vetor por 2
});
console.log(newArr);*/
//quando o retorno não é varias linhas basta copiar o conteudo e colocar depois da flaxinha 
const newArr = arr.map(item => item * 2);

console.log(newArr);

//podemos criar unções usando constantes, porem não é recomentado
const teste = () => {
    return 'teste';
}

console.log(teste());

//retornando um array desta função
const teste2 = () => [1, 2, 3];

console.log(teste2());

//retornando um objeto desta função
//não retorna pois a {} e para o corpo da função
const teste3 = () => { name: 'Davi' };
console.log(teste3());
//desta maneira funciona
const teste4 = () => {
    return { name: 'Davi' }
};
console.log(teste4());
//mais se quizer retornar o bjetos depois da flas coloca ()
const teste5 = () => ({ name: 'Davi Bernardo' });
console.log(teste5());