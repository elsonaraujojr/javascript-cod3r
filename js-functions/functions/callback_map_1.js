// Para o map é passado uma function que será executado mediante ao array.
// Ex: [1,2,3].map(function);
// Essa function é para transforma o array em outro array.
// O map sempre retorna um array com a mesma quantidades de posições.


const num = [1, 2, 3, 4, 5];
const dobro = (n, i, a) => n * 2 + i + a.length;

console.log(num.map(dobro));

const nomes = ['Ana', 'Bia', 'Caio', 'Dan', 'Elo'];
const primeiraLetra = texto => texto[0];

console.log(nomes.map(primeiraLetra));

const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99 },
    { nome: 'Impressora', qtd: 0, preco: 649.50 },
    { nome: 'Caderno', qtd: 4, preco: 27.10 },
    { nome: 'Lapis', qtd: 3, preco: 5.82 },
    { nome: 'Tesoura', qtd: 1, preco: 19.20 },
]

const getNome = item => item.nome;
console.log(carrinho.map(getNome));

const getTotal = item => item.qtd * item.preco;
const totais = carrinho.map(getTotal);
console.log(totais);

Array.prototype.myMap = function(fn) {
    const mapped = [];
    for(let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this)
        mapped.push(`My: ${result}`)
    }
    return mapped;
}

const getMyNome = item => item.nome;
console.log(carrinho.myMap(getMyNome));

const getMyTotal = item => item.qtd * item.preco;
const myTotais = carrinho.myMap(getMyTotal);
console.log(myTotais);