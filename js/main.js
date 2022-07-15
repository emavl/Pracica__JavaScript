var aNumeros = [1,2,3,4,5,6]

function mayor(numeros){
 	let cajita = 0;
  for( let i=0; i < numeros.length; i++){
    if(numeros[i] > cajita){
      	cajita = numeros[i];
    }
  }
  document.write(cajita);
}

mayor(aNumeros);

