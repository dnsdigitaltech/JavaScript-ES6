/////////////////CONST & LET///////////
//para definir uma variável gerelmante é com var
//porém existe duas novas palavras chaves pra gente usar
//const = constante
//o que difere a const com uma var comum é que ela naão pode ter seu valor reatribuido

/*const a = 1;

a = 3; //o a e readOnly, ou seja só poderá ler e não poderá reatribu-la pois é uma const
*/

/*
//Na const você pode mutar uma variavel
const usuario = { nome: 'Davi' };
usuario.nome = 'Bernardo'; //neste caso ele deixará, sito é mutação
console.log(usuario);*/

//variável de escopo
/*function teste(x) {
    let y = 2; //o let é a palavra chave para as variáveis de escopo
    if (x > 5) {
        let y = 4; //porŕm se quisermos atribuir detro do escopo conteduo da var Y podemos
        console.log(x, y);
    }
}

//OBS ele encontrou o X e também o Y, pois dentro de cada {} ele encontrou o conteúdo as {} são escopos
//console.log(y); //dar erro pois o y não está definido, pois o escopo do console.log não é o mesmo da var y

teste(10);

/*
////////////////CLASSES///////////////
class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data)
        console.log(this.data);
    }
}

//extende a class List
class TodoList extends List {
    constructor() {
        //para chamar a o metodo costrutor da classe pai é bom colocar a propriedade chamada super, é exatamente chamar o método construtor da class pai
        super();
        //depois podemos criar as demais propriedades
        this.usuario = 'Davi';
    }
    mostraUsuario() {
        console.log(this.usuario);
    }
}
//coloquei na classs List
/*class TodoList {
    constructor() {
        this.todos = [

        ]
    }

    addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}*/
/*
var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
    //MinhaLista.addTodo();
}

MinhaLista.mostraUsuario();*/