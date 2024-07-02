function validarChute(chute) {
    const numero = +chute
    if (Number.isNaN(numero)) {
        console.log('Valor inválido: deve-se falar um número')
        boxResposta.innerHTML += '<div>Valor Inválido<div>'
        return
    }
    else if (numero > maiorValor || numero < menorValor) {
        console.log('Número fora dos limites')
        boxResposta.innerHTML += '<div>Número fora dos limites<div>'
        return
    } else if (numero > numeroGerado) {
        console.log('O número secreto é menor')
        boxResposta.innerHTML += '<div>O número secreto é menor<i class="fa-solid fa-arrow-down"></i><div>'
    } else if (numero < numeroGerado) {
        console.log('O número secreto é maior')
        boxResposta.innerHTML += '<div>O número secreto é maior<i class="fa-solid fa-arrow-up"></i><div>'
    } else {
        console.log('O número está correto!')
        boxResposta.innerHTML += '<div>🎉Você Acertou!🎉<div>'
        boxResposta.innerHTML += `<div>O número secreto era ${numero}<div>`
        btnJogarNovamente.classList.remove('hidden')
    }
}

btnJogarNovamente.addEventListener('click', () => {
    btnJogarNovamente.classList.add('hidden')
    numeroGerado = geradorNumero()
    boxResposta.innerHTML = 
    `
      <div>Diga um número...</div>
    `
})