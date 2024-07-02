const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let boxResposta = document.querySelector('#chute')

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    boxResposta.innerHTML = 
    `
    <div>Você disse:</div>
    <span class='box'>${chute.replace(/\./g, "")}</span>
    `
    console.log(chute)
    validarChute(chute)
}

recognition.addEventListener('end', () => recognition.start())
