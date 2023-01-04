// Quando o arquivo é lido ele retorna uma function para exibir o conteúdo do arquivo.
// Evento é a leitura do arquivo, async.
const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'db.txt');

console.log(path.join(__dirname, 'db.txt'));

function exibirConeudo(_, conteudo) {
    console.log(conteudo.toString());
}

console.log('Inicio...');
fs.readFile(caminho, {}, exibirConeudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
console.log('Fim...');

console.log('Inicio Sync....');
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('Fim Sync....');
