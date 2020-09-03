let nota1: number = 1, nota2: number = 10, media: number = (nota1*0.4 + nota2*0.6);

const validaMedia = (media) => media >= 5 ? "aprovado" : "reprovado";  

console.log(`media final: ${media} \nsituação do aluno: `+validaMedia(media));
