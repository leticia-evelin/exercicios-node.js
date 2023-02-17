/*****************************************************************
 * Objetivo: Sistema que gerencie números pares e ímpares
 * Data: 17/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 *****************************************************************/

const numeros = function(numeroInicial, numeroFinal, escolha){
let numeroIn = Number(numeroInicial);
let numeroFin = Number(numeroFinal);
let escolhaUser = escolha;
let contador = 0;
let maxImpar = 0;

    if (escolhaUser == 1) {
        console.log('Números Pares:');

        for (i = numeroIn; i <= numeroFin; i++) {
            if (i % 2 == 0) {
                console.log(`${i}`);
                contador++;
            }
        }

        console.log(`Quantidade de números encontrados: ${contador}`);

    } else if (escolhaUser == 2) {
        console.log('Números Ímpares');

        for (i = numeroIn; i <= numeroFin; i++) {
            if (i % 2 != 0) {
                console.log(`${i}`);
                maxImpar++;
            }
        }
        //console.log(`${maxImpar}`)
        console.log(`Quantidade de números encontrados: ${maxImpar}`);

    } else {
        console.log('Números Pares:');

        for (i = numeroIn; i <= numeroFin; i++) {
            if (i % 2 == 0) {
                console.log(`${i}`);
                contador++;
            }
        }
        console.log(`Quantidade de números encontrados: ${contador} \n`);

        console.log('Números Ímpares:');

        for (i = numeroIn; i <= numeroFin; i++) {
            if (i % 2 != 0) {
                console.log(`${i}`);
                maxImpar++;
            }
        }
        //console.log(`${contador}`)
        console.log(`Quantidade de números encontrados: ${maxImpar}`);
    }
}

module.exports = {
    numeros
}