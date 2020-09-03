let peso: number = 65, altura: number = 1.70, imc: number = (peso/(altura*altura));

imc < 18.5 ? console.log("peso abaixo do normal") : imc < 24.9 ? console.log("peso ideal") : imc < 29.9 ? console.log("acima do peso") :
imc < 34.9 ? console.log("obesidade grau 1") : imc < 40 ? console.log("obesidade grau 2") : console.log("obesidade grau 3");