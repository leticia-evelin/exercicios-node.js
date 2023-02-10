/*****************************************************************
 * Objetivo: Calcular médias escolares
 * Data: 10/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 *****************************************************************/

 var media = require('./modulo/media');
 var readline = require('readline');

 var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});


entradaDados.question('Digite o gênero do(a) aluno(a) \n', function(genero1){
   
    entradaDados.question('Qual o nome do(a) aluno(a) ? \n', function(nome1){

        entradaDados.question('Digite o gênero do(a) professor(a) \n', function(genero2){

            entradaDados.question('Qual o nome do(a) professor(a) ? \n', function(nome2){
  
                entradaDados.question('Qual o nome do curso? \n', function(curso){

                    entradaDados.question('Qual o nome da disciplina? \n', function(disciplina){

                        entradaDados.question('Digite a nota 1: \n', function(nota1){

                            entradaDados.question('Digite a nota 2: \n', function(nota2){

                                entradaDados.question('Digite a nota 3: \n', function(nota3){

                                    entradaDados.question('Digite a nota 4: \n', function(nota4){


                                           
                                        // Validações 
                                       
                                            if(generoAluno == '' || nomeAluno == '' || generoProfessor == '' || nomeProfessor == '' || nomeCurso == '' || nomeDisciplina == '' || primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '')
                                            {
                                                console.log('ERRO: É necessário preencher todas as entradas.')
                                            }else if(isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)){
                                                console.log('ERRO: É necessários que todas as notas digitadas sejam números.')
                                            }else if(isNaN(generoAluno) != isNaN(nomeAluno) != isNaN(generoProfessor) != isNaN(nomeProfessor) != isNaN(nomeCurso) != isNaN(nomeDisciplina))
                                            {
                                                console.log('ERRO: Apenas digite números nas notas. ')
                                            }
                                            console.log('Média final: ' + media);  





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


    


        

    
