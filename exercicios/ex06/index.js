
// Refaça o exercício da TV utilizando uma função construtora

function Tv(canal, volume, ligada) {
    this.canal = canal;
    this.volume = volume;
    this.ligada = ligada;

    function liga(){
        this.ligada = true;
    }
    function desliga(){
        this.ligada = false;
    }
    function mudaDeCanal(novoCanal){
        this.canal = novoCanal;
    }
    function aumentaVolume(){
        this.volume += 1;
    }
    function diminuiVolume(){
        this.volume -= 1;
    }
}