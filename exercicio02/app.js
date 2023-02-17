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


console.log('\n*******************TABUADAS*******************\n')

entradaDados.question('Digite o número da inicial da tabuada [ENTRE 2 E 100]: \n', function (multiplicandoInicial) {
    let multiplicando = Number(multiplicandoInicial.replace(',', '.'));

    entradaDados.question('Digite o número final da tabuada [ENTRE 2 E 100]: \n', function (multiplicandoFinal) {
        let multiplicandoF = Number(multiplicandoFinal.replace(',', '.'));

        entradaDados.question('Digite o número inicial do contador: \n', function (contInicial) {
            let contadorInicial = Number(contInicial.replace(',', '.'));

            entradaDados.question('Digite o número final do contador: \n', function (contFinal) {
                let contadorFinal = Number(contFinal.replace(',', '.'));

                if (Number(multiplicando) == '' || Number(multiplicandoF) == '' || Number(contadorInicial) == '' || Number(contadorFinal) == '') {
                    console.log('ERRO: É necessário inserir valores em todas as entradas.');
                    entradaDados.close();

                } else if (multiplicando > multiplicandoF || multiplicandoF < multiplicando) {
                    console.log('ERRO: O número inicial não pode ser maior que o número final');
                    entradaDados.close();

                } else if (multiplicando < 2 || multiplicando > 100 || multiplicandoF < 2 || multiplicandoF > 100) {
                    console.log('ERRO: Digite apenas números de 2 até 100');
                    entradaDados.close();

                } else if (multiplicando == 0 || multiplicandoF == 0) {
                    console.log('ERRO: O sistema não pode calcular com valor 0.');
                    entradaDados.close();
                } else {
                    entradaDados.question('Digite o número do contador inicial da tabuada: \n', function (contInicial) {
                        let contadorInicial = Number(contInicial.replace(',', '.'));

                        entradaDados.question('Digite o número do contador final da tabuada [ENTRE 1 E 50]: \n', function (contFinal) {
                            let contadorFinal = Number(contFinal.replace(',', '.'));

                            if (contadorInicial > contadorFinal || contadorFinal < contadorInicial) {
                                console.log('ERRO: O número inicial não pode ser maior do que o final')
                                entradaDados.close();

                            } else if (contadorInicial < 0 || contadorFinal > 50) {
                                console.log('ERRO: Digite apenas números de 1 até 50')
                                entradaDados.close();

                            } else {
                                matematica.tabuada(multiplicando, multiplicandoF, contadorInicial, contadorFinal)
                                entradaDados.close();
                            }
                        });
                    });

                }

            });
        });
    });
});