//Math.random() devuelve numero aleatorio entre 0 y 1
var numero = Math.random();

if(numero <= 0.5){
  str = ' MENOR QUE 0,5');
}else {
  str = ' MAYOR QUE 0,5');
}

console.log('\n'+numero+str+'\n');
