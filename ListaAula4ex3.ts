let a: number[] = [], soma: number = 0

for(let i = 0; i < 100; i++){
    a[i] = Math.floor(Math.random()*10);
    soma+=a[i];
}

console.log(`A: ${a} \nB: `+(soma/a.length)+`\nC: ${soma} \nD: `+a.sort());
