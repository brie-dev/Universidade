let nome = 'Gabrielle'
let altura = 2.0
console.log(nome, altura)

let a = 5;
let b = 10;
console.log(`O resultado da operação é ${a+b}`)

// let pecaPreco = 10;
// let pecas = prompt('Qual a quantidade de peças encomendadas: ')

// if (pecas>0){
//     let total = pecaPreco*pecas;
//     console.log(total);
// }

let nomeSenha = 'Gabrielle'
if (nomeSenha == 'Gabrielle' || nomeSenha == 'José'){
    console.log('liberado')
}
else {
    console.log('negado')
}

for(let i=1;i<=10;i++){
    console.log(i)
}

let num = 0;
while(num <= 90){
    console.log(num)
    num+=10;
}

let numero = 0;
do{
    console.log(num)
    num+=10;
}
while(num <= 90);