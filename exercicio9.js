/* 
9 -Suponha que no ano N a população dos EUA seja maior que a brasileira. Sabendo-se que os
Estados Unidos possuem um crescimento anual de 2% na sua população e que o Brasil tem
crescimento anual de 4%, determine o ano em que as duas populações serão iguais (em
quantidade).
*/

eua = 305
bra = 298
ano = 2020

console.log("O ano é: ",ano)
console.log("A população americana é de: ",eua+" MI")
console.log("A população brasileira é de: ",bra+" MI")

while(eua>bra){
    eua = eua+(eua*0.02)
    bra = bra+(bra*0.04)
    ano++
}

console.log("\nO ano em que a população brasileira se igualará ou passará da população americana será em: ",ano);
console.log(`\nEUA: ${eua} MI \nBRASIL: ${bra} MI \n`);