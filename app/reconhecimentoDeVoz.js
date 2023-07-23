window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const elementoChute = document.getElementById('chute');
let gravando = false;

const recognition = new SpeechRecognition();
const buttonOn = document.getElementById('button-on');

buttonOn.addEventListener('click', () => {
    gravarVoz();

    if (gravando) {
      buttonOn.textContent = 'Gravando...';
    } else {
      buttonOn.textContent = 'Gravar Voz';
    }
  });

recognition.lang = 'pt-Br';
recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => {
    gravando = false;
    buttonOn.textContent = 'Gravar Voz';
  });

function gravarVoz() {
    recognition.start();
    gravando = true;
}

function onSpeak(e) {
    chute = e.results[0][0].transcript;

    exibirNumeroNaTela(chute);
    verificarValorFalado(chute);
}

function exibirNumeroNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}