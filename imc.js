function calculo(){
    let nome = document.getElementById("nome");
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    
     
    let calculoImc =  (peso / (altura * altura)).toFixed(1);
    let classificação = ''

    if(calculoImc < 18.5){
        classificação = "você está baixo do peso.Cuide-se!"

    }else if(calculoImc < 25){
        classificação = "você está com peso ideal.";

    }else if(calculoImc < 30){
        classificação = "você está sobrepeso.";

    }else if(calculoImc < 35){
        classificação = "você está com obesidade grau I.";

    }else if(calculoImc < 40){
        classificação = "você está com obesidade grau II.";

    }else{
        classificação = "você está com obesidade grau III. Cuide-se!";

    }

    let resposta = document.getElementById("resultado");
    resposta.innerHTML = `<p>Seu IMC é ${calculoImc} e ${classificação}</p>`
}

