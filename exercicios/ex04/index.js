// Crie um objeto do tipo curso que tenha os seguintes atributos:

//     nome
//     p1
//     p2
//     media

// Usando o setter insira o nome do curso, p1 e p2. Para a média considere a seguinte condição: 
// Se, nota da p1 for 0, retorne a mensagem: "A nota da p1 foi 0, não vai ser possível fazer uma média" 
// Se, nota da p1 maior que 0, faça o seguinte calculo: p1 + p2 / 2

// Crie um get que retorne uma mensagem informando o nome do curso e sua média.

const curso = {
    nome: '',
    p1: 0,
    p2: 0,
    media: 0,
    setCurso(curso) {
        this.nome = curso;
    },
    setP1(valor){
        this.p1 = valor;
    },
    setP2(valor){
        this.p2 = valor;
    },
    calculaMedia(){
        if(this.p1 > 0){
            this.media = (this.p1 + this.p2) / 2;
        }else{
            return "A nota da p1 foi 0, não vai ser possível fazer uma média";
        }
    },
    getInfo(){ 
        return `Curso: ${this.nome}, Média: ${this.media}`;
    }
}

curso.setCurso("POO com Javascript");
curso.setP1(6);
curso.setP2(8);
console.log(curso.calculaMedia());
console.log(curso.getInfo());
console.log(curso);