const menorValor = 1
let maiorValor = 100
let numeroGerado = geradorNumero()
console.log('Número secreto => ', numeroGerado)
const btnFacil = document.querySelector('#btn-facil')
const btnDificil = document.querySelector('#btn-dificil')
const btnJogarNovamente = document.querySelector('#jogar-novamente')

btnFacil.addEventListener('click', () => {
    if (btnFacil.classList.contains('inactive')) {
        maiorValor = 100
        elementoMaiorValor.innerHTML = maiorValor
        btnFacil.classList.remove('inactive')
        btnDificil.classList.add('inactive')
        boxResposta.innerHTML = 
        `
          <div>Diga um número...</div>
        `
        console.log('Dificuldade => Fácil')
        numeroGerado = geradorNumero()
        console.log('Número secreto => ', numeroGerado)
    }
})

btnDificil.addEventListener('click', () => {
    if (btnDificil.classList.contains('inactive')) {
        maiorValor = 1000
        elementoMaiorValor.innerHTML = maiorValor
        btnDificil.classList.remove('inactive')
        btnFacil.classList.add('inactive')
        boxResposta.innerHTML = 
        `
          <div>Diga um número...</div>
        `
        geradorNumero()
        console.log('Dificuldade => Difícil')
        numeroGerado = geradorNumero()
        console.log('Número secreto => ', numeroGerado)
    }
})

function geradorNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor