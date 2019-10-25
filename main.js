/////////////////Valores padrão pro parâmetros das funções///////////
//function soma(a, b) {
function soma(a = 3, b = 6) { //é necessário atribuir dados
    return a + b;
}
//se executar isto vai retorna NaN nos dois, pois não conseguiu identificar qual nº é para somar
console.log(soma(1));
console.log(soma());

//igualmente para arrow function
const soma2 = (a = 10, b = 20) => a + b;
console.log(soma2(1));
console.log(soma2());