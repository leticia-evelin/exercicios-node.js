/*****************************************************************
 * Objetivo: Calcular médias escolares
 * Data: 10/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 *****************************************************************/

 var media = require('./modulo/media.js')

//  const calculo = require('./modulo/media.js')
const exame = require('./modulo/media.js')
//  const relatorio = require('./modulo/media.js');

 var readline = require('readline');
const { emitWarning } = require('process');

 var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});


entradaDados.question('Digite o gênero do(a) aluno(a): [FEMININO]  [MASCULINO] \n', function(genero1){
   let generoAluno = genero1.toUpperCase();

   if(generoAluno == ''){
        console.log('ERRO: É necessário preencher todos os campos.')
        entradaDados.close();
    }

   entradaDados.question('Qual o nome do(a) aluno(a) ? \n', function(nome1){
        let nomeAluno = nome1;

        if(nomeAluno == ''){
            console.log('ERRO: É necessário preencher todos os campos.')
            entradaDados.close();
        }
        
        entradaDados.question('Digite o gênero do(a) professor(a): [FEMININO]  [MASCULINO] \n', function(genero2){
            let generoProfessor = genero2.toUpperCase();

            if(generoProfessor == ''){
                console.log('ERRO: É necessário preencher todos os campos.')
                entradaDados.close();
            }

            entradaDados.question('Qual o nome do(a) professor(a) ? \n', function(nome2){
                let nomeProfessor = nome2;

                if(nomeProfessor == ''){
                    console.log('ERRO: É necessário preencher todos os campos')
                    entradaDados.close();
                }

                entradaDados.question('Qual o nome do curso? \n', function(curso){
                    let nomeCurso = curso;

                    if(nomeCurso == ''){
                        console.log('ERRO: É necessário preencher todos os campos.')
                        entradaDados.close();
                    }

                        entradaDados.question('Qual o nome da disciplina? \n', function(disciplina){
                        let nomeDisciplina = disciplina;

                            if(nomeDisciplina == ''){
                                console.log('ERRO: É necessário preencher todos os campos.')
                                entradaDados.close();
                            }

                            entradaDados.question('Digite a primeira nota de 0 a 100: \n', function(nota1){
                            let primeiraNota = nota1.replace(',' , '.');

                            if(primeiraNota == ''){
                                console.log('ERRO: É necessário preencher todos os campos.')
                                entradaDados.close();
                            }if(primeiraNota < 0 || primeiraNota > 100){
                                console.log('ERRO: O sistema só aceita notas de 0 até 100.')
                                entradaDados.close();
                            }

                                entradaDados.question('Digite a segunda nota de 0 a 100: \n', function(nota2){
                                let segundaNota = nota2.replace(',' , '.');

                                if(segundaNota == ''){
                                    console.log('ERRO: É necessário preencher todos os campos.')
                                    entradaDados.close();
                                }if(segundaNota < 0 || segundaNota > 100){
                                    console.log('ERRO: O sistema só aceita notas de 0 até 100.')
                                    entradaDados.close();
                                }

                                    entradaDados.question('Digite a terceira nota de 0 a 100: \n', function(nota3){
                                    let terceiraNota = nota3.replace(',' , '.');

                                    if(terceiraNota == ''){
                                        console.log('ERRO: É necessário preencher todos os campos')
                                        entradaDados.close();
                                    }if(terceiraNota < 0 || terceiraNota > 100){
                                        console.log('ERRO: O sistema só aceita notas de 0 até 100.')
                                        entradaDados.close();
                                    }

                                        entradaDados.question('Digite a quarta nota de 0 a 100: \n', function(nota4){
                                        let quartaNota = nota4.replace(',' , '.');

                                        if(quartaNota == ''){
                                            console.log('ERRO: É necessário preencher todos os campos.')
                                            entradaDados.close();
                                        }if(quartaNota < 0 || quartaNota > 100){
                                            console.log('ERRO: O sistema só aceita notas de 0 até 100.')
                                            entradaDados.close();
                                        }

                                        else{
                                             resultado = media.calculo(primeiraNota, segundaNota, terceiraNota, quartaNota);

                                             if(resultado >= 70){
                                                 console.log('Status do Aluno: Aprovado :)')
                                                 console.log('Média final: ' + resultado);
                                                 entradaDados.close();

                                                } if (resultado < 50){
                                                 console.log('Status do Aluno: Reprovado :(')
                                                 console.log('Média final: ' + resultado);
                                                 entradaDados.close(); 

                                                } if (resultado >= 50 && resultado < 69){
                                                    console.log('O aluno está de exame!')
                                                    entradaDados.question('Digite a nota do exame: \n', function(resultadoDoExame){
                                                    let exame = resultadoDoExame;

                                                    if (resultadoDoExame >= 60){
                                                     console.log('Aprovado no exame :)')
                                                     entradaDados.close();
                                                    }else if(resultadoDoExame < 50)
                                                    console.log('Reprovado no exame :(')
                                                    entradaDados.close();

                                                });
                                            } 
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


    


        

    
