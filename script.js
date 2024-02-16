const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const resultadoDiv = document.getElementById("resultado");

const calcularIMC = () => {
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  if (!peso || !altura || isNaN(peso) || isNaN(altura)) {
    return "Erro: valores inválidos";
  }

  const imc = peso / (altura * altura);

  resultadoDiv.innerHTML = `
    Seu IMC é: ${imc.toFixed(1)}
    <br>
    ${classificarIMC(imc)}
  `;
};

const classificarIMC = (imc) => {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso ideal";
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc < 40) {
    return "Obesidade";
  } else {
    return "Obesidade mórbida";
  }
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  calcularIMC();
});

calcularIMC();
