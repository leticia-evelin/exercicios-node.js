/*****************************************************************
 * Objetivo: Sistema que gerencie números pares e ímpares
 * Data: 17/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 *****************************************************************/

var calculo = require('./modulo/pares_impares.js');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


console.log('******** NÚMEROS PARES E ÍMPARES ******** \n');

entradaDados.question('Digite o número inicial entre [ 0 e 500 ]: \n', function(numeroInicial){
    let numeroIn = Number(numeroInicial.replace(',' , '.'));
   
    entradaDados.question('Digite o número final entre [ 100 e 1000 ]: \n', function(numeroFinal){
        let numeroFin = Number(numeroFinal.replace(',' , '.'));

        if(numeroIn == '' || numeroFin == ''){
            console.log('ERRO: É necessário preencher todos os campos!')
            entradaDados.close();

        }else if(isNaN(numeroIn) || isNaN(numeroFin)){
            console.log('ERRO: Só é permitido a entrada de números!')
            entradaDados.close();

        }else if(numeroIn >= 0 || numeroIn < 500){
            console.log('ERRO: O número inicial deve estar entre [ 0 e 500 ]')
            entradaDados.close();
            
        }else if(numeroFin > 100 || numeroFin < 100){
            console.log('ERRO: O número final deve estar entre [ 100 e 1000 ]')
            entradaDados.close();

        }else if(numeroIn == numeroFin){
            console.log('ERRO: O sistema não pode executar com números iguais.')
            entradaDados.close();

        }else if(numeroIn > numeroFin){
            console.log('ERRO: O sistema não pode executar quando o número inicial é maior que o final.')
            entradaDados.close();

        } else {
            entradaDados.question('Escolha como calcular: \n' + 
                                  '1 - Números pares \n' + 
                                  '2 - Números ímpares \n' + 
                                  '3 - Ambos \n', function(escolhaUser){
                calculo.numeros(numeroIn, numeroFin, escolhaUser)
                entradaDados.close()
            }); 
        }    
    });
});