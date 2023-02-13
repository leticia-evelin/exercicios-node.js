/*****************************************************************
 * Objetivo: Calculo de tabuadas
 * Data: 13/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 *****************************************************************/

var matematica = require('./modulo/tabuada.js');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o número da tabuada inicial: \n', function(multiplicandoInicial){
    let tabuadaInicial = multiplicandoInicial.replace(',' , '.')

    //  if(tabuadaInicial == ''){
    //      console.log('ERRO: É necessário inserir em todas as entradas.')
    //      entradaDados.close();
     if (tabuadaInicial < 2 || tabuadaInicial > 100){
         console.log('ERRO: O sistema só aceita valores iniciais a partir de 2 até 100.')
         entradaDados.close();
     }

    entradaDados.question('Digite o número da tabuada final: \n', function(multiplicandoFinal){
        let tabuadaFinal = multiplicandoFinal.replace(',' , '.')

        if(tabuadaFinal == ''){
            console.log('ERRO: É necessário inserir em todas as entradas.')
        } else if (tabuadaFinal < 2 || tabuadaFinal > 100){
            console.log('ERRO: O sistema só aceita valores finais a partir de 2 até 100.')
        }

        entradaDados.question('Digite o número inicial do contador: \n', function(contInicial){
            let contadorInicial = contInicial.replace(',' , '.')

            if(contInicial == ''){
                console.log('ERRO: É necessário inserir em todas as entradas.')
            } else if (contInicial  < 1 || contInicial > 50){
                console.log('ERRO: O sistema só aceita valores de 1 até 50 para o cálculo.')
            } 

            entradaDados.question('Digite o número final do contador: \n', function(contFinal){
                let contadorFinal = contFinal.replace(',' , '.')

                if(contFinal == ''){
                    console.log('ERRO: É necessário inserir em todas as entradas.')
                } else if (contFinal < 1 || contFinal > 50){
                    console.log('ERRO: O sistema só aceita valores de 1 até 50 para o cálculo')
                }
            })
        });
    });
});