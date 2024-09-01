function anoBissexto(){
    let ano = window.prompt("Qual é o ano que você quer verificar?");

    let resposta = document.getElementById("resultado");

    if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0){
        resposta.innerHTML = `<p>O ano de ${ano} <mark style='color:green'> É BISSEXTO!</mark></p>`;
    }else{
        resposta.innerHTML = `<p>O ano de ${ano} <mark style='color:red'> NÃO É BISSEXTO!</mark></p>`;
    }
}
 