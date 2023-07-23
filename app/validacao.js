function verificarValorFalado(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML = '<div class="box">ERROR! <br><br>Você deve falar um número</div>'
        return
    }

    if (numeroMaior(numero)) {
        elementoChute.innerHTML += `<div class="box">ERROR! <br><br> O número deve ser entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero == numeroSecreto) {
        document.body.innerHTML = `
            <h1 class="success">Você acertou!</h1>
            <h3>O número secreto era: <span class="success">${numeroSecreto}</span></h3>
            <button id="jogar-novamente">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é <span class="span">menor</span>  <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é <span class="span">maior</span>  <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaior(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})