"use strict";

/////////////////Templates Literals/////////////
//É uma forma de incluir variáveis dentro de strings no java script a partir do ES6
var nome = 'Davi';
var idade = 35; //essa sintaxe é muito feia

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos'); //por isto vamos usarm o templantes literals

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos."));
