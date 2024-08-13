let quantHomens = 15
let quantMulheres = 20
let totalAlunos = quantHomens + quantMulheres

let percentualHomens = (quantHomens / totalAlunos) * 100
let percentualMulheres = (quantMulheres / totalAlunos) * 100

let total = (percentualHomens, percentualMulheres)
console.log(`Tem ${quantMulheres} mulheres nesta sala.`)
console.log(`Tem ${quantHomens} homens nesta sala.`)
console.log(`A diferença percentual de homens e mulheres em uma sala é ${total.toFixed(2)}%`)
