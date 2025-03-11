const form = document.querySelector(".form");
const resultado = document.querySelector(".resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const idade = e.target.elements["idade"];
  const altura = e.target.elements["altura"];
  const peso = e.target.elements["peso"];

  if (!idade.value && !altura.value && !peso.value) {
    resultado.innerHTML = "preenchimento dos campos obrigatório";
    resultado.classList.add("error");
    return;
  }

  if (!idade.value) {
    resultado.innerHTML = "preenchimento da idade obrigatório";
    resultado.classList.add("error");
    return;
  }

  if (!altura.value) {
    resultado.innerHTML = "preenchimento da altura obrigatório";
    resultado.classList.add("error");
    return;
  }

  if (!peso.value) {
    resultado.innerHTML = "preenchimento do peso obrigatório";
    resultado.classList.add("error");
    return;
  }

  const imc = calculaIMC(peso.value, altura.value);
  const imcResultado = imprimeIMC(imc);
  resultado.innerHTML = imcResultado;

  idade.value = "";
  altura.value = "";
  peso.value = "";
});

function calculaIMC(peso, altura) {
  peso = Number(peso);
  altura = Number(altura);
  altura = (altura / 100).toFixed(2);

  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function imprimeIMC(imc) {
  resultado.classList.remove("error");

  const classificacao = [
    "Magreza",
    "Normal",
    "Sobrepeso",
    "Obesidade grau I",
    "Obesidade Grau II",
    "Obesidade Grau III",
  ];

  if (imc < 18.5) return `Seu IMC ${imc} (${classificacao[0]})`;
  if (imc < 24.9) return `Seu IMC ${imc} (${classificacao[1]})`;
  if (imc < 29.9) return `Seu IMC ${imc} (${classificacao[2]})`;
  if (imc < 34.9) return `Seu IMC ${imc} (${classificacao[3]})`;
  if (imc < 39.9) return `Seu IMC ${imc} (${classificacao[4]})`;
  return `Seu IMC ${imc} (${classificacao[5]})`;
}
