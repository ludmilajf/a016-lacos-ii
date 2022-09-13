// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a tabuada do número, de 1 a 10.

// Utilize o for...in para resolver

let numeroUsuario = Number(prompt("Digite um número de 1 a 10 para vermos a tabuada:"))
let tabuada = ["","","","","","","","","","",""]

for(let i in tabuada){
    tabuada = i * numeroUsuario
    for(let j in tabuada[i]){
    tabuada += j + ", "
}
console.log(`${numeroUsuario} x ${i} = ${tabuada}`);
}