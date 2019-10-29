/////////////////Webpack Server/////////////
//é o arquivo principal que carregará todos demais arquivos da nossa API
//importar a função soma para o arquivo necessário
//import { soma, sub } from './funcoes';
//import { soma as somaFunction, sub } from './funcoes';
import * as funcoes from './funcoes';

//import default
//import soma from './soma';

//console.log(somaFunction(1, 2));
//console.log(sub(6, 5));

console.log(funcoes);
console.log(funcoes.soma(1, 2));
console.log(funcoes.sub(6, 5));