// Refaça o exercício da TV utilizando a sintaxe de classe (class).

class Tv {
    constructor(canal, volume, ligada) {
        this.canal = canal;
        this.volume = volume;
        this.ligada = ligada;
    }
    liga() {
        this.ligada = true;
    }
    desliga() {
        this.ligada = false;
    }
    mudaDeCanal(novoCanal) {
        this.canal = novoCanal;
    }
    aumentaVolume() {
        this.volume += 1;
    }
    diminuiVolume() {
        this.volume -= 1;
    }
}
