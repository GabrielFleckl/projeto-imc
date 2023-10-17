const container = document.querySelector(".container");
const peso = container.querySelector("#peso");
const altura = container.querySelector("#altura");
const btnIMC = container.querySelector(".input__button");
const resultado = container.querySelector(".resultado__imc");

btnIMC.addEventListener("click", (event) => {
  event.preventDefault();
  calcularIMC();
  peso.value = "";
  altura.value = "";
});

function calcularIMC() {
  const alturaEmCM = altura.value / 100;
  const imc = peso.value / alturaEmCM ** 2;

  if (isNaN(imc) || imc > 60) {
    alert("Todos os campos devem ser preenchidos corretamente.");
  } else if (imc < 18.5) {
    resultado.innerHTML = `
    <p class="result__text">Seu resultado é:</p>
    <p class="result">${imc.toFixed(2)}</p>
    <p class="class">Classificação: <br> Abaixo do peso</p>
    `;
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerHTML = `
    <p class="result__text">Seu resultado é:</p>
    <p class="result">${imc.toFixed(2)}</p>
    <p class="class">Classificação: <br> Peso normal</p>
    `;
  } else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = `
    <p class="result__text">Seu resultado é:</p>
    <p class="result">${imc.toFixed(2)}</p>
    <p class="class">Classificação: <br> Sobrepeso</p>
    `;
  } else if (imc >= 30 && imc <= 34.9) {
    resultado.innerHTML = `
    <p class="result__text">Seu resultado é:</p>
    <p class="result">${imc.toFixed(2)}</p>
    <p class="class">Classificação: <br> Obesidade grau I</p>
    `;
  } else if (imc >= 35 && imc <= 39.9) {
    resultado.innerHTML = `
    <p class="result__text">Seu resultado é:</p>
    <p class="result">${imc.toFixed(2)}</p>
    <p class="class">Classificação: <br> Obesidade grau II</p>
    `;
  } else if (imc >= 40) {
    resultado.innerHTML = `
    <p class="result__text">Seu resultado é:</p>
    <p class="result">${imc.toFixed(2)}</p>
    <p class="class">Classificação: <br> Obesidade grau III</p>
    `;
  }
}
