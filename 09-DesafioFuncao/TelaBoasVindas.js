/**
 * 1 - (SR, SP) Um novo aluno chamado “Thiago” chegou em nossa turma, Crie uma função
que escreva na tela as boas vindas ao novo colega;
 */
function boasVindas(){
    
    const resultado = document.getElementById("resultado").innerHTML= "Seja Bem-vindo à turma Fs09/Fs10";
    
}
// const btn = document.querySelector("#send")
// btn.addventListener('click', function(e){
//     e.preventDefault();

//     const percentual = document.querySelector("#perc");
//     const value= perc.value
//     console.log(value)
// })

function calcularIdade(ano, mes){
    let anoAtual = 2023;
    let mesAtual = "Janeiro"
    let soma = 0;
    if(mes == mesAtual){
         soma = anoAtual - ano;
    }else{
         soma = (anoAtual - ano) - 1;
    }
    
    
}
console.log(calcularIdade(1993, "Dezembro"))