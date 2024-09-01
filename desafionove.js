function reajuste(){

let nome = window.prompt("Qual é o nome do funcionário?");
let salario = Number(window.prompt(`Qual é o salário de ${nome}?`)).toFixed(2);
let porcentagem = Number(window.prompt(`O salário de ${nome} será reajustado em qual porcentagem?`));

let reajuste = ((salario * porcentagem)/100).toFixed(2);
let salReaj = (salario*(1+porcentagem/100)).toFixed(2);

let resposta = document.getElementById("resposta");
resposta.innerHTML += `<p>O salário atual era R$ ${salario}.</p>`;
resposta.innerHTML += `<p>Com um aumento de ${porcentagem}%, o salário irá aumentar R$ ${reajuste} no próximo mês.</p>`
resposta.innerHTML += `<p>E a partir daí, ${nome} passará a ganhar R$ ${salReaj}. </p>`

}
