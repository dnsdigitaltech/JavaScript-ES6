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

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
    //MinhaLista.addTodo();
}

MinhaLista.mostraUsuario();