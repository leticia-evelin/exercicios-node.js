/*****************************************************************
 * Objetivo: Calcular médias escolares
 * Data: 10/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 *****************************************************************/

const calculo = function(nome1, genero1, nome2, genero2, curso, disciplina, nota1, nota2, nota3, nota4){

    let nomeAluno = nome1;
    let generoAluno = genero1;
    let nomeProfessor = nome2;
    let generoProfessor = genero2;
    let nomeCurso = curso;
    let nomeDisciplina = disciplina;
    let primeiraNota = nota1;
    let segundaNota = nota2;
    let terceiraNota = nota3;
    let quartaNota = nota4;
    let media = 0;
    let mediaExame = 0;


   media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) /4;
}

module.exports = {
    calculo
}