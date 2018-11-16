//scrivere una serie di numeri da 1 a 100
var numero = 1;
var multiploTre = 0;
while (numero <= 100) {
  console.log(numero);
  multiploTre = numero % 3;
  console.log("multiplo: " + multiploTre);
  if (multiploTre == 0) {
    console.log("friz");
  }
  numero ++;
}

//arrivando ai numeri multipli di 3 stampi fiz al posto
//del numero stesso


//invece arrivando ai numeri multipli di 5 stampi buzz al
//posto del numero stesso


//infine se i numeri comabaciano sia essendo multipli di 3 che di 5
// al posto del numero si stampi frizz buzz
