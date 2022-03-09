// Crie um objeto de nome aluno e adicione as seguintes propriedades:
// nome, matricula e idade.
// Crie neste mesmo objeto aluno, uma função que receba como parâmetro o curso do aluno,
// o parâmetro deverá ter um default, adicione esse parâmetro recebido em uma propriedade do objeto aluno.
// Retorne o objeto aluno ANTES da chamada da função.
// Retorne o objeto aluno APÓS a chamada da função

const aluno = {
    nome: 'Lukaz',
    matricula: '1234',
    idade: 26,
    curso: 'POO',
    setCurso(vCurso = "POO com Javascript"){
        return this.curso = vCurso;
    }
} 

console.log(aluno); //Aluno criado

aluno.setCurso();
console.log(aluno); // Aluno Com Parâmetro Padrão da Função

aluno.setCurso('POO com Java');
console.log(aluno); // Aluno com parâmetro passado para a função

// PS.: não sei se era assim, professora Jaque... Mas só consegui desse jeito
//  => =D
