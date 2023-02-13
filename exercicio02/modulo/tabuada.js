/*****************************************************************
 * Objetivo: Calculo de tabuadas
 * Data: 13/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 *****************************************************************/

const tabuada = function(multiplicandoInicial, multiplicandoFinal, contInicial, contFinal){
    let tabuadaInicial = Number(multiplicandoInicial);
    let tabuadaFinal = Number(multiplicandoFinal);
    let contadorInicial = Number(contInicial);
    let contadorFinal = Number(contFinal);
    let contTabuada = 0;
    let resultado;
    let status = true; 


    if(tabuadaInicial == 0 || tabuadaFinal == 0 || contadorFinal == 0){
        console.log('ERRO: O sistema não pode calcular com valor 0.')
        status = false;
    }
        
    else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(contadorInicial) || isNaN(contadorFinal)){
        console.log('ERRO: O sistema só calcula com números.')
        status = false;
    } 
    else if(tabuadaInicial == '' || tabuadaFinal == '' || contadorInicial == '' || contadorFinal == ''){
        console.log('ERRO: É necessário inserir valores em todas as entradas.')
        status = false;
        
    }
}

module.exports = {
    tabuada
}