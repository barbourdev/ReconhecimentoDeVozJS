const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log("Número secreto: " + numeroSecreto);

const elementoMaiorValor = document.getElementById('maior-valor');
const elementoMenorValor = document.getElementById('menor-valor');

elementoMaiorValor.innerHTML = maiorValor;
elementoMenorValor.innerHTML = menorValor;
