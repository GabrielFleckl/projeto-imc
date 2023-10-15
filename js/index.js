const container = document.querySelector('.container')
const peso = container.querySelector('#peso')
const altura = container.querySelector('#altura')
const btnIMC = container.querySelector('.input__button')
const resultado = container.querySelector('.resultado__imc')

btnIMC.addEventListener('click', (event) => {
  event.preventDefault()
  calcularIMC()
  peso.value = ''
  altura.value = ''
})

function calcularIMC() {
  const alturaEmCM = altura.value / 100
  const imc = peso.value / alturaEmCM ** 2
  if (isNaN(imc) || imc > 60) {
    alert('Todos os campos devem ser preenchidos corretamente.')
  } else {
    resultado.innerHTML = `
    <p class="result__text">Seu resultado:</p>
    <p class="result">${imc.toFixed(0)}</p>
    `
  }
}



