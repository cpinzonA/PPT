numero=prompt('digite por favor cuantas veces quiere jugar')
alert('bienvenido a piedra papel o tijera')
alert('el juego es asi, piedra es 1, tijera es 2 y papel es 3')

for(i=0;i<numero;i++){
    user= prompt('escoja un numero para jugar')
    
    var min = 1;
    var max = 3;
    countU=0
    countM=0
    let maquina='cosa'
    var pc = Math.floor(Math.random()*(max - min)+min);
    if (pc==1){
        maquina='piedra'
    }else if(pc=2){
        maquina='tijera'
    }else{
        maquina='papel'
    }
   
    
   alert(`la maquina escogio, ${pc} ${maquina}`);
   if (pc===user) {
     alert('empate');
    }else if (pc==1 & user==2) {
         alert('usuario gana');countU=countU+1
     }else if (pc==2 & user==1) {
              alert('maquina gana');countM=countM+1
      }else if (pc==1 & user==3) {
              alert('maquina gana');countM=countM+1
       }else if (pc==2 & user==3) {
        alert('usuario gana');countU=countU+1
       }else if (pc==3 & user==1) {
            alert('usuario gana');countU=countU+1
         }else if (pc==3 & user==2) {
            alert('maquina gana');countM=countM+1
         }

}
if (countM>countU){
    alert('otra vez, sera la maquina gana')
}else{
    alert('felicitaciones has ganado a la maquina')
}

