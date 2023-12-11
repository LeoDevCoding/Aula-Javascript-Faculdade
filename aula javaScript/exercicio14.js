"use strict"
let form = document.querySelector("#form")
let botao = document.querySelector("#botao")
botao.addEventListener("click", function(){

    let base = parseInt(document.querySelector("#base").value)
    let altura = parseInt(document.querySelector("#altura").value)
    let areaCampo = document.querySelector("#area")
    
    let area = (base * altura)/2

    document.querySelector("#areaCampo").value = area
    

})  

//aula - 5



