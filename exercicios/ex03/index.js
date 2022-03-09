// Crie uma função construtora, para criar um "Aluno".
// Deverá conter as seguintes propriedades: nome, idade, email, matricula, curso.
// Instancie o Aluno e printe o resultado.
// Utilizando a estrutura de aluno, adicione uma função que retorne o curso do aluno através do prototype da função.
// Invoque a função e printe o resultado

function Aluno(nome, idade, email, matricula, curso){
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.matricula = matricula;
    this.curso = curso;
}

// Instanciando o Aluno e Printando o resultado
const aluno = new Aluno('Lukaz', 26, 'lukaz@email.com', '1234', 'Web Full-Stack');
console.log(aluno);

// Adicionando função via Prototype
Aluno.prototype.getCurso = function () {
    return this.curso
}

//Criando novo Objeto a título de Exemplo
const aluno1 = new Aluno('Maria', 25, 'maria@email.com', '3245', 'FrontEnd Estático');

// Invocando a funcção para cada Objeto e Mostrando os resultados
console.log(aluno.getCurso()); // Retornando o Curso do objeto aluno
console.log(aluno1.getCurso()); // Retornando o Curso do objeto aluno1
