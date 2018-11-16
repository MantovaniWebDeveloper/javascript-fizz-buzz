//scrivere una serie di numeri da 1 a 100
var numero = 1;
var multiploTre = 0;
var multiploCinque = 0;

while (numero <= 100) {
  console.log(numero);
  //arrivando ai numeri multipli di 3 stampi fiz al posto
  //del numero stesso
  multiploTre = numero % 3;
  multiploCinque = numero % 5;
  console.log("multiplo 3: " + multiploTre);
  console.log("multiplo 5: " + multiploCinque);
  if (multiploTre == 0) {
    console.log("Fizz");
  }
  else if (multiploCinque == 0) {
    console.log("Buzz");
  }
  numero ++;
}







//infine se i numeri comabaciano sia essendo multipli di 3 che di 5
// al posto del numero si stampi frizz buzz
