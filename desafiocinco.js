function coversor(){
    let m = Number(window.prompt("Digite uma distância em metros (m)"));
    let km = (m/1000).toFixed(3)
    let hm = (m/100).toFixed(3)
    let dam = (m/10).toFixed(3)
    let dm = (m*10)
    let cm = (m*100)
    let mm = (m*1000)  

let resposta = document.getElementById("resultado");
    resposta.innerHTML=`<strong><p style = 'color:green;'>A distância de ${m} metros, corresponde a:</p></strong>`
    resposta.innerHTML+=`<p>${km} quilômetros(Km)</p>`
    resposta.innerHTML+=`<p>${hm} hectômetros(Hm)</p>`
    resposta.innerHTML+=`<p>${dam} decâmetros(Dam)</p>`
    resposta.innerHTML+=`<p>${dm} decímetros(dm)</p>`
    resposta.innerHTML+=`<p>${cm} centímetros(cm)</p>`
    resposta.innerHTML+=`<p>${mm} milímetros(mm)</p>`

}   