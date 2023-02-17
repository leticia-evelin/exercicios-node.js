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

        
    // if (isNaN(multiplicando) || isNaN(multiplicandoF) || isNaN(contadorInicial) || isNaN(contadorFinal)){
    //     console.log('ERRO: O sistema só calcula com números.')
    //     status = false;
    // } 
    while (multiplicando <= multiplicandoF) {
        console.log(`\n************* Tabuada do ${multiplicando} ************** \n`)

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