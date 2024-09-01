
    let contador = 0
    let campoResposta = document.querySelector("div#campoResposta");

    function iniciar(){
    contador ++
    campoResposta.innerHTML += `<p>O contador está com ${contador} cliques.</p>`
    }

    function zerar() {
    contador = 0
    campoResposta.innerHTML = null
}
