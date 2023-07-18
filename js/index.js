const container = document.querySelector('.container')
const containerTitle = container.querySelector('.container__title')
const containerInput = container.querySelector('.container__input')
const peso = container.querySelector('.input__peso')
const altura = container.querySelector('.input__altura')
const btnIMC = container.querySelector('.input__button')
const inputTitle = container.querySelectorAll('.input__title')
const resultado = container.querySelector('.resultado')
const colorPicker = document.querySelector('#color')
const body = document.querySelector('body')

btnIMC.addEventListener('click', (event) => {
  event.preventDefault()

  calcularIMC()

  peso.value = ''
  altura.value = ''
})

function calcularIMC() {

  const alturaEmCM = altura.value / 100
  const imc = Math.floor(peso.value / (alturaEmCM * alturaEmCM))

  if (isNaN(imc)) {
    alert('Todos os campos devem ser preechidos.')
  } else {
    const div = document.querySelector('.resultado__imc')
    div.innerHTML = `<p class="result">${imc}</p>`
  }

}

colorPicker.addEventListener('change', function (event) {
  const color = event.target.value;
  body.style.backgroundColor = color
  containerTitle.style.color = color
  btnIMC.style.backgroundColor = color
  inputTitle.forEach((el) => {
    el.style.color = color
  })
})

