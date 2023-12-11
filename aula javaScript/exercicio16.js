"use strict"
let form = document.querySelector("#form");
let botao = document.querySelector("#botao");

botao.addEventListener("click", function(){

    let valorProduto = Number(document.getElementById("valorProduto").value);
    let condicaoPagamento = Number(document.getElementById("condicaoPagamento").value);
    let valorTotal = 0;

    if (condicaoPagamento == 1){

   valorTotal = valorProduto - (valorProduto * 0.10)
        alert("À vista com 10% de desconto: " + valorTotal)
   
    }else if (condicaoPagamento == 2){
    
    valorTotal = valorProduto - (valorProduto * 0.05)
        alert("Cartão 5% de desconto: " + valorTotal)
    
   
    }else if (condicaoPagamento == 3){
    
    valorTotal = valorProduto + (valorProduto * 0.10)
        alert("Parcelado 10% de aumento: " + valorTotal)
    }
})