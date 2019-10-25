/////////////////Desestruturação/////////////
const usuario = {
    nome: "Davi",
    idade: 35,
    endereco: {
        cidade: "Rio de Janeiro",
        estado: "RJ",
    },
}
console.log(usuario);

//pegar nome e idade, neste caso tem que pegar um a um
/*const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.edereco.cidade;*/

//conceito de desestruturação aplicad  no ES6+ nesta caso é conceito de objeto
const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

//usar conceito de desestruturação na function
function mostraNome(usuario) {
    console.log(usuario.nome);
}
mostraNome(usuario);

//outra forma é passar direto o objeto/desestruturação de parametros de funções
function mostraNome2({ nome, idade }) {
    console.log(nome, idade);
}
mostraNome2(usuario);