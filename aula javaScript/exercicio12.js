"use strict"

let form = document.querySelector("#form")
let botao = document.querySelector("#botao")

botao.addEventListener("click", function(){
    let num = parseFloat(document.querySelector("#valor").value);

    if( (num % 2) == 0 ){
        alert("par")
    }else{
        alert("impar")
    }

})

//aula - 5