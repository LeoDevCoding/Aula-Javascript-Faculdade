"use strict"
let form = document.querySelector("#form")
let resultado = document.querySelector("#resultado")
let botao = document.querySelector("#botao")

botao.addEventListener("click", function(){

    let valorparcelas = parseFloat(document.querySelector("#parcelas").value)

    let valorcompra = parseFloat(document.querySelector("#valor").value)

    if (valorparcelas == 1){
        alert("juros 0")
    
    }else if (valorparcelas == 2){
        let calcular = (valorcompra + (valorcompra * 1.03)/2)
        document.querySelector("#resultado").value = calcular
    
    }else if (valorparcelas == 4){
        let calcular = (valorcompra + (valorcompra * 1.07)/4)
        document.querySelector("#resultado").value = calcular
    }

})



//aula - 5


