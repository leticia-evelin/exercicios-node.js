/*****************************************************************
 * Objetivo: Calcular médias escolares
 * Data: 10/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 *****************************************************************/

var media = require('./modulo/media.js')
const exame = require('./modulo/media.js')


var readline = require('readline');
const { emitWarning } = require('process');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDados.question('Digite o gênero do(a) aluno(a): [FEMININO] ou [MASCULINO] \n', function (genero1) {
    let generoAluno = genero1.toUpperCase();

    entradaDados.question('Qual o nome do(a) aluno(a) ? \n', function (nome1) {
        let nomeAluno = nome1;

        entradaDados.question('Digite o gênero do(a) professor(a): [FEMININO] ou [MASCULINO] \n', function (genero2) {
            let generoProfessor = genero2.toUpperCase();

            entradaDados.question('Qual o nome do(a) professor(a) ? \n', function (nome2) {
                let nomeProfessor = nome2;

                entradaDados.question('Qual o nome do curso? \n', function (curso) {
                    let nomeCurso = curso;

                    entradaDados.question('Qual o nome da disciplina? \n', function (disciplina) {
                        let nomeDisciplina = disciplina;

                        entradaDados.question('Digite a primeira nota de 0 a 100: \n', function (nota1) {
                            let primeiraNota = nota1.replace(',', '.');

                            entradaDados.question('Digite a segunda nota de 0 a 100: \n', function (nota2) {
                                let segundaNota = nota2.replace(',', '.');

                                entradaDados.question('Digite a terceira nota de 0 a 100: \n', function (nota3) {
                                    let terceiraNota = nota3.replace(',', '.');

                                    entradaDados.question('Digite a quarta nota de 0 a 100: \n', function (nota4) {
                                        let quartaNota = nota4.replace(',', '.');

                                        if (primeiraNota < 0 || primeiraNota > 100 || isNaN(primeiraNota) || segundaNota < 0 || segundaNota > 100 || isNaN(segundaNota) ||
                                            terceiraNota < 0 || terceiraNota > 100 || isNaN(terceiraNota) || quartaNota < 0 || quartaNota > 100 || isNaN(quartaNota)) {
                                            console.log('ERRO: Digite apenas [números] entre 0 e 100.');
                                            entradaDados.close();
                                        } if (generoAluno == '' || nomeAluno == '' || generoProfessor == '' || nomeProfessor == '' ||
                                            nomeCurso == '' || nomeDisciplina == '' || primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
                                            console.log('ERRO: É necessário preencher todas as entradas.');
                                            entradaDados.close();

                                        }//else if(generoAluno != 'FEMININO' || generoAluno != 'MASCULINO' || generoProfessor != 'FEMININO' || generoProfessor != 'MASCULINO'){
                                        // console.log('ERRO: Por favor, digite gêneros válidos, [FEMININO] ou [MASCULINO]');
                                        //entradaDados.close();

                                        else {
                                            resultado = media.calculo(primeiraNota, segundaNota, terceiraNota, quartaNota);

                                            if (resultado >= 70) {
                                                console.log('**********Relatório do Aluno**********')
                                                console.log('\n')
                                                if (generoAluno == 'MASCULINO')
                                                    console.log(`O aluno ${nomeAluno} foi Aprovado :) na disciplina ${nomeDisciplina}!`);
                                                else
                                                    console.log(`A aluna ${nomeAluno} foi Aprovada :) na disciplina ${nomeDisciplina}!`);

                                                console.log(`Curso: ${nomeCurso} `);

                                                if (generoProfessor == 'MASCULINO')
                                                    console.log(`Professor: ${nomeProfessor}`);
                                                else
                                                    console.log(`Professora: ${nomeProfessor}`);

                                                console.log(`Notas do aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}`);
                                                console.log(`Média Final: ${resultado}`);
                                                entradaDados.close();

                                            } if (resultado < 50) {
                                                console.log('**********Relatório do Aluno**********');
                                                console.log('\n');

                                                if (generoAluno == 'MASCULINO')
                                                    console.log(`O aluno ${nomeAluno} foi Reprovado :( na disciplina ${nomeDisciplina}.`);
                                                else
                                                    console.log(`A aluna ${nomeAluno} foi Reprovada :( na disciplina ${nomeDisciplina}.`);

                                                console.log(`Curso: ${nomeCurso} `);

                                                if (generoProfessor == 'MASCULINO')
                                                    console.log(`Professor: ${nomeProfessor}`);
                                                else
                                                    console.log(`Professora: ${nomeProfessor}`);

                                                console.log(`Notas do aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}`);
                                                console.log(`Média Final: ${resultado}`);
                                                entradaDados.close();
                                            }
                                        }
                                        if (resultado >= 50 && resultado < 69) {
                                            console.log('O aluno está de exame!')
                                            entradaDados.question('Digite a nota do exame: \n', function (notaExame) {
                                                let exame = notaExame;
                                                let resultadoExame = media.calculo(resultado + exame) / 2

                                                if (exame < 60) {
                                                    console.log('**********Relatório do Aluno**********');
                                                    console.log('\n');
                                                } else if (generoAluno == 'FEMININO')
                                                    console.log(`A aluna ${nomeAluno} foi Reprovada :( pelo exame na disciplina ${nomeDisciplina}.`);
                                                else {
                                                    console.log(`O aluno ${nomeAluno} foi Reprovado :( pelo exame na disciplina ${nomeDisciplina}.`);
                                                    console.log(`Curso: ${nomeCurso}`);
                                                }

                                                if (generoProfessor == 'FEMININO')
                                                    console.log(`Professora: ${nomeProfessor}\n`);
                                                else
                                                    console.log(`Professor: ${nomeProfessor}\n`);

                                                console.log(`Notas do aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}, ${notaExame}\n`);
                                                console.log(`Média Final: ${resultado}`);
                                                console.log(`Média final Exame: ${exame}`);
                                                entradaDados.close();

                                                if (exame > 60) {
                                                    console.log('**********Relatório do Aluno**********');
                                                    console.log('\n');

                                                    if (generoAluno == 'FEMININO')
                                                        console.log(`A aluna ${nomeAluno} foi Aprovada :) pelo exame na disciplina ${nomeDisciplina}!`);
                                                    else
                                                        console.log(`O aluno ${nomeAluno} foi Aprovado :) pelo exame na disciplina ${nomeDisciplina}!`);
                                                    console.log(`Curso: ${nomeCurso}\n`);

                                                    if (generoProfessor == 'FEMININO')
                                                        console.log(`Professora: ${nomeProfessor}\n`);
                                                    else
                                                        console.log(`Professor: ${nomeProfessor}\n`);
                                                    console.log(`Notas do aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}, ${notaExame}\n`);
                                                    console.log(`Média Final: ${resultado}`);
                                                    console.log(`Média final Exame: ${exame}`);
                                                    entradaDados.close();

                                                }
                                            });
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});








