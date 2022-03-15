// Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, 
// mudaDeCanal e aumentaVolume, diminuiVolume.

const tv = { 
    canal: '',
    volume: 0,
    ligada: false,
    liga(){
        this.ligada = true;
    },
    desliga(){
        this.ligada = false;
    },
    mudaDeCanal(novoCanal){
        this.canal = novoCanal;
    },
    aumentaVolume(){
        this.volume += 1;
    }, 
    diminuiVolume(){
        this.volume -= 1;
    }
}