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

 var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});


entradaDados.question('Digite o gênero do(a) aluno(a) \n', function(genero1){
   let generoAluno = genero1.toUpperCase();

   entradaDados.question('Qual o nome do(a) aluno(a) ? \n', function(nome1){
        let nomeAluno = nome1;
        
        entradaDados.question('Digite o gênero do(a) professor(a) \n', function(genero2){
            let generoProfessor = genero2.toUpperCase();

            entradaDados.question('Qual o nome do(a) professor(a) ? \n', function(nome2){
                let nomeProfessor = nome2;


                entradaDados.question('Qual o nome do curso? \n', function(curso){
                    let nomeCurso = curso;

                        entradaDados.question('Qual o nome da disciplina? \n', function(disciplina){
                        let nomeDisciplina = disciplina;

                            entradaDados.question('Digite a primeira nota de 0 a 100: \n', function(nota1){
                            let primeiraNota = nota1;

                                entradaDados.question('Digite a segunda nota de 0 a 100: \n', function(nota2){
                                let segundaNota = nota2;

                                    entradaDados.question('Digite a terceira nota de 0 a 100: \n', function(nota3){
                                    let terceiraNota = nota3;

                                        entradaDados.question('Digite a quarta nota de 0 a 100: \n', function(nota4){
                                        let quartaNota = nota4;

                                        // Validação de entradas vazias
                                         if(generoAluno == '' || nomeAluno == '' || generoProfessor == '' || nomeProfessor == '' || nomeCurso == '' || nomeDisciplina == '' || primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '')
                                         {
                                             console.log('ERRO: É necessário preencher todos os campos de dados.')
                                             entradaDados.close;
                                         }if(primeiraNota < 0 || primeiraNota > 100 || segundaNota < 0 || segundaNota > 100 || terceiraNota < 0 || terceiraNota > 100 || quartaNota < 0 || quartaNota > 100) 
                                         {
                                             console.log('ERRO: O sistema aceita somente notas de 0 até 100.')
                                             entradaDados.close;
                                           }

                                        else{
                                            resultado = media.calculo(primeiraNota, segundaNota, terceiraNota, quartaNota);

                                            if(resultado >= 70){
                                                console.log('Status do Aluno: Aprovado :)')
                                                entradaDados.close;

                                            }else if (resultado < 50){
                                                console.log('Status do Aluno: Reprovado :(')
                                            }console.log('Média final: ' + resultado);
                                              entradaDados.close; 
                                         
                                        }

                                        if(resultado >= 50 && resultado < 69){
                                            entradaDados.question('Digite a nota do exame: \n', function(notaExame){
                                            let exame = notaExame;
                                            })
                                         
                                        }else if (resultadoExame >= 60){
                                            console.log('Aprovado no exame :)')

                                        }else(resultado < 50)
                                            console.log('Reprovado no exame :(')
                                        
                                            
                                        
                                           
                                        //console.log('Média final: ' + resultado); 
                                        

                                        // Chama a função para calcular, encaminhando os dados para o cálculo
                                        //resultado = media.calculo(primeiraNota, segundaNota, terceiraNota, quartaNota);
                                        //console.log('Média final: ' + resultado);



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


    


        

    
