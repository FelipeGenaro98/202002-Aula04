const validaSituacao = (a) => a < 2 ? "aprovado" : a < 4 ? "espera" : "nao foi dessa vez";

function concatenar(lista){
    lista.reduce((x, texto, i) =>{
        console.log("aluno: " +texto+" com a situacao de "+validaSituacao(i)+" na posição geral "+(i+1));
    }, 0);
}

console.log(concatenar(["aline", "aslan", "arthur", "alan", "alice", "ana"]));