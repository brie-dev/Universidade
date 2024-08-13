let numeros = []

for(let i = 0; i <= 10; i++){
    numeros.push(parseInt(prompt(`Digite o ${i+i} número: `)))
}

let par = 0
let impar = 0

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        par++;
    } else {
        impar++;
    }
}
console.log(`Quantidade de números pares ${par}`)
console.log(`Quantidade de números impares ${impar}`)
alert(`Quantidade de números pares: ${par}\n Quantidade de números impares: ${impar}`)