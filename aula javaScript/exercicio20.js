"use strict"
document.querySelector("#botao").addEventListener("click", function(){
    let num = Number(document.querySelector("#txtnum").value)
    let fat = 1;
    for (let i = 1; 1 <= num; i++){
        fat = fat*i
    }
    document.querySelector("#txtfat").value = fat;    

})