function media() {
    let nome = window.prompt ("Qual o seu nome?")
    let nota1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    let nota2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    med = (nota1 + nota2) / 2


    let res = document.getElementById ("resultado")
        if(med >= 6) {
            res.innerHTML = `<p>Parabéns ${nome}! Você está <strong style='color:green;'>APROVADO(a)!</strong></p>`
        }else if(med <= 6) {
            res.innerHTML = `<p>${nome}, você está em <strong style='color:orange;'>RECUPERAÇÃO!</strong> Estude um pouco mais!</strong></p>`
        }if(med < 3)
             res.innerHTML = `<p>${nome},infelizmente você está <strong style='color:red;'>REPROVADO(a)!</strong> Estude mais!</strong></p>`
    }
    
    
    

