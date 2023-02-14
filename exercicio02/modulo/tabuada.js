/*****************************************************************
 * Objetivo: Calculo de tabuadas
 * Data: 13/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 *****************************************************************/

const tabuada = function(multiplicandoInicial, multiplicandoFinal, contInicial, contFinal){
    let multiplicando = Number(multiplicandoInicial);
    let multiplicandoF = Number(multiplicandoFinal);
    let contadorInicial = Number(contInicial);
    let contadorFinal = Number(contFinal);
    let resultado;


    // if(multiplicando == 0 || multiplicandoF == 0 || contadorFinal == 0){
    //     console.log('ERRO: O sistema não pode calcular com valor 0.')
    //     status = false;
    // }
        
    // else if (isNaN(multiplicando) || isNaN(multiplicandoF) || isNaN(contadorInicial) || isNaN(contadorFinal)){
    //     console.log('ERRO: O sistema só calcula com números.')
    //     status = false;
    // } 
    // // else if(multiplicando == '' || multiplicandoF == '' || contadorInicial == '' || contadorFinal == ''){
    //     console.log('ERRO: É necessário inserir valores em todas as entradas.')
    //     status = false;
        
    // }

    while (multiplicando <= multiplicandoF) {
        console.log(`\n************* Tabuada do ${multiplicando} ************* \n`)

        contadorInicial = contInicial
        while (contadorInicial <= contadorFinal) {
            resultado = multiplicando * contadorInicial

            console.log(`${multiplicando} x ${contadorInicial} = ${resultado}`)
            contadorInicial++
        }
        multiplicando++
    }
}

module.exports = {
    tabuada
}