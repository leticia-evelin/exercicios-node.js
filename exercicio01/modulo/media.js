/*****************************************************************
 * Objetivo: Calcular médias escolares
 * Data: 10/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 *****************************************************************/

const calculo = function(nota1, nota2, nota3, nota4){

    let primeiraNota = nota1;
    let segundaNota = nota2;
    let terceiraNota = nota3;
    let quartaNota = nota4;
    let media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) /4;
    return media;
}
    

const exame = function(mediaFinal, notaExame){
    let media = mediaFinal;
    let exame = notaExame;
    let resultadoExame = (Number(media) + Number(exame)) / 2
    return resultadoExame;
 
}

const relatorio = function(nome1, genero1, nome2, genero2, curso, disciplina){
    let nomeAluno = nome1;
    let generoAluno = genero1;
    let nomeProfessor = nome2;
    let generoProfessor = genero2;
    let nomeCurso = curso;
    let nomeDisciplina = disciplina;

}


const verificarGeneroAluno = function(genero1){
    let generoAluno = genero1;

    if (generoAluno == "Masculino"){
        generoAluno = "Aluno"
    }else if(generoAluno == "Feminino"){
        generoAluno = "Aluna"
    }else{
        return false;
    }
    return generoAluno;
}

const verificarGeneroProfessor = function(genero2){
    let generoProfessor = genero2;

    if(generoProfessor == "Masculino"){
        generoProfessor = "Professor"
    }else if(generoProfessor == "Feminino"){
        generoProfessor = "Professora"
    }else{
        return false
    }
    return generoProfessor
}

module.exports = {
    calculo,
    exame,
    relatorio
}