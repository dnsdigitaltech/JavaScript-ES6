/////////////////Templates Literals/////////////
//É uma forma de incluir variáveis dentro de strings no java script a partir do ES6
const nome = 'Davi';
const idade = 35;
//essa sintaxe é muito feia
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
//por isto vamos usarm o templantes literals
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);