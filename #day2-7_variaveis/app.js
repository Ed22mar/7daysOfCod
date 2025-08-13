// # Desafio-2 Variaveis


const nome = prompt("Qual é o seu nome ?");

const idade = prompt("Quantos anos você tem ?");

const linguagemProgramacao = prompt("Qual linguagem de programação você está estudando");


const msg = (`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemProgramacao}!`);

alert(msg);

const resposta = prompt(`Você gosta de estudar ${linguagemProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (resposta == 1) {
  alert("Muito bom!Continue estudando e você terá muito sucesso.");
}

if (resposta == 2) {
  alert("Ahh que pena...Já tentou aprender outras linguagens ?");
}