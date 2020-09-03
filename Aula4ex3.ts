function bubbleSort(lista: number[]): number[] {
    lista = lista.slice();

    for(let i = 0; i < lista.length; i++) {
        for(let j = 0; j < lista.length-1; j++) {
            if(lista[j] > lista[j+1]) {
                let troca = lista[j];
                lista[j] = lista[j+1];
                lista[j+1] = troca;
            }
        }
    }
    return lista;
}

console.log(bubbleSort([1,3,5,6,8,9,2,4,7,0]));
