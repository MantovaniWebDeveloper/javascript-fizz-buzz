//scrivere una serie di numeri da 1 a 100
var numero = 1;
var multiploTre = 0;
var multiploCinque = 0;
/**ARRAY PER INTERFACCIA**/
var arrayTreCinque = [];
var arrayCinque = [];
var arrayTre = [];

while (numero <= 100) {
  console.log(numero);
  //stampo in html i numeri
  document.getElementById('elencoNumeri').innerHTML +=
  `<li>` + numero +`</li>`
  multiploTre = numero % 3;
  console.log(multiploTre);
  multiploCinque = numero % 5;

  console.log("multiplo 3: " + multiploTre);
  console.log("multiplo 5: " + multiploCinque);
  //se i numeri comabaciano sia essendo multipli di 3 che di 5
  // al posto del numero si stampi frizz buzz
  if (multiploCinque == 0 && multiploTre == 0) {
    console.log("FizzBuzz");
    arrayTreCinque.push(numero);
  }
  else if (multiploCinque == 0) {
    //arrivando ai numeri multipli di 5 stampi fiz al posto
    //del numero stesso
    console.log("Buzz");
    arrayCinque.push(numero);
  }
  else  {
    //arrivando ai numeri multipli di 3 stampi fiz al posto
    //del numero stesso
    console.log("Fizz");
    if (multiploTre == 0){
      arrayTre.push(numero);
    }
  }

  numero ++;
}

/*PARTE OPZIONALE*/
console.log(arrayTreCinque);
console.log(arrayCinque);
console.log(arrayTre);

for (var i = 0; i < arrayTre.length; i++) {
  document.getElementById('elencoNumeri3').innerHTML +=
  `<li>` + arrayTre[i] + " </br>Fizz " +`</li>`
}
for (var i = 0; i < arrayCinque.length; i++) {
  document.getElementById('elencoNumeri5').innerHTML +=
  `<li>` + arrayCinque[i] + " </br>Buzz " +`</li>`
}
for (var i = 0; i < arrayTreCinque.length; i++) {
  document.getElementById('elencoNumeriUguali').innerHTML +=
  `<li>` + arrayTreCinque[i] + " </br>Fizz Buzz " +`</li>`
}
