//controlar toda aplicação
class App {
    //inicializar as variáveis
    constructor() {
        this.repositories = []; //guardará todos os dados buscado do GitHub
        this.formEl = document.getElementById('repo-form'); //add a ref. para o elemento do form/repo-form
        this.registerHandlers(); //registrará os eventos
    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event); //evento um ao user submitar o form
    }
    addRepository(event) {
        event.preventDefault();
        this.repositories.push({
            name: 'dnsdigitaltech.com.br/',
            description: 'Tire sua ideia do papel e dê vida à sua startup.',
            avatar_url: 'https://avatars3.githubusercontent.com/u/145645',
            html_url: 'https://github.com/dnsdigitaltech/JavaScript-ES',
        });
        console.log(this.repositories);
    };
}
//instaciar a class
new App();