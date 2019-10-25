"use strict";

/////////////////Desestruturação/////////////
var usuario = {
  nome: "Davi",
  idade: 35,
  endereco: {
    cidade: "Rio de Janeiro",
    estado: "RJ"
  }
};
console.log(usuario); //pegar nome e idade, neste caso tem que pegar um a um

/*const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.edereco.cidade;*/
//conceito de desestruturação aplicad  no ES6+ nesta caso é conceito de objeto

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); //usar conceito de desestruturação na function

function mostraNome(usuario) {
  console.log(usuario.nome);
}

mostraNome(usuario); //outra forma é passar direto o objeto/desestruturação de parametros de funções

function mostraNome2(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome2(usuario);
