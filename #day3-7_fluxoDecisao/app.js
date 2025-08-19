// #Desafio 3 fluxo de decisão

const resposta = prompt("Qual area você quer serguir? (Front-End ou Back-End)");
const tecnologias = [];

if (resposta === "Front-End") {
  alert("você vai aprender React ou aprender Vue.");
}
else if (resposta === "Back-End") {
  alert("você vai aprender C# ou aprender Java.");
} else {
  alert("Você não digitou nehuma resposta valida");
}

const especializacao = prompt("Você quer se especializar nessa área ou quer se tornar Fullstack?");

if (especializacao === "especializar") {
  alert("Ótimo! Foque em se aprofundar nas tecnologias");
} else if (especializacao === "Fullstack") {
  alert("Excelente! Aprender um pouco de tudo vai abrir muitas portas para você.");
} else {
  alert("Você não digitou nehuma resposta valida");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok") {
  tecnologias.push(prompt("Tem mais alguma tecnologia que você gostaria de aprender?"));
  msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}

for (let i = 0; i < tecnologias.length; i++) {
  alert(`Você escolheu aprender ${tecnologias[i]}`);
}