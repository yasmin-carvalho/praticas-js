/*
5 - A partir de valores digitados pelo usuário, das notas b1 e b2 de um aluno, informar se ele
foi aprovado (media > = 6), reprovado (media < 3), ou se ficou de exame (3<=media<6). Se
ficou de exame, solicitar a nota do exame ex e informar se o aluno foi aprovado ou
reprovado.
*/

b1 = 7
b2 = 3

media = (b1+b2)/2

if(media>=6)
    console.log('APROVADO!')
else if(media<3)
    console.log('REPROVADO!')
else{
    if (3<=media<6)
    console.log('FICOU DE EXAME!')
    exame = 6
    if(exame>=6)
        console.log('APROVADO!')
    else
        console.log('REPROVADO!')
}
