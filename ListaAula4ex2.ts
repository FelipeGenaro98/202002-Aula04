let pares: number = 0, impares: number = 0;

for(let i = 0; i <= 1000; i++){
    i%2 == 0 ? pares+=i : impares+=i;
}

console.log(`soma dos pares ${pares}, soma dos ímpares ${impares}`);