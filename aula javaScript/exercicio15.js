"use strict"
let form = document.querySelector("#form");
let botao = document.querySelector("#botao");

botao.addEventListener("click", function(){

    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
    var media = (nota1+nota2+nota3)/3

    if (media >= 6){
        alert("aprovado")

    }else if (media >= 3 && media < 6){
        alert("exame")

    }else{
        alert("reprovado")
    }

    document.getElementById("#calcularMedia").value = media;

    document.getElementById("situacao").value = verificarSituacao 

});

//aula - 5