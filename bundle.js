"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/////////////////Operadores Rest/Spread/////////////
//este operador e conheciro por usar ...
//REST -> serve pra pegar o resto das propriedades
var usuario = {
  nome: 'Davi',
  idade: 35,
  empresa: 'DNS DIGITAL TECH'
}; //utilizando desestruturação

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]); //pega o nome e armazena os demais dados na variável resto, é pra isto que usamos o REST OPERATOR


console.log(nome);
console.log(resto); //Também usamos em vetor

var arr = [1, 2, 3, 4]; //utilizando desestruturação

var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c); //Usamos em parâmetros de funções

function soma(a, b, c) {
  //se add mais um parâmetro será necessário colocar em todos
  return a + b + c;
}

console.log(soma(1, 3, 5)); //pegar todos os parêmetro utilisando o REST

function soma2() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  //se add mais um parâmetro será necessário colocar em todos
  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma2(1, 3, 5)); //SPREAD -> faz o papel de repassar um objeto de array pra outra estrutura de dados

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6]; //para juntar os arrays de dados

var arr3 = [].concat(arr1, arr2);
console.log(arr3); //outras utilizações

var usuario1 = {
  nome: 'Davi',
  idade: 35,
  empresa: 'DNS DIGITAL TECH'
}; //uma grande utilização é criar um novo objeto com todos essas propriedades, porém queremos torca apenas uma propriedade

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Nathan'
});

console.log(usuario2);
