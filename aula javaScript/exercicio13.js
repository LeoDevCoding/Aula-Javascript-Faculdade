"use strict";
let form = document.querySelector("#form")
let botao = document.querySelector("#botao")

botao.addEventListener("click", function(){
    var num1 = parseInt(document.querySelector("#valor1").value)
    var num2 = parseInt(document.querySelector("#valor2").value)

    if (num1 > num2){
        alert("O número 1 é o maior")
   
    }else if (num2 > num1){
        alert("O número 2 é o maior")
    }else{
        alert("Ambos os números são iguais")
    }
})

//aula - 5