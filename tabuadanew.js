function tabuada(){
    let numero = Number(document.getElementById("input").value);
    let resposta = document.getElementById("resposta");

    let c = 1
    while (c<= 10){
        resposta.innerHTML += `<p>${numero} x ${c} = <strong>${numero*c} </srong></p>`
    c++
    }
}