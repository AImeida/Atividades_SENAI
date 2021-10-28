
function Problem1() {
    var x = prompt('Digite um número, vou mostrar o dobro')
    alert(`O dobro de ${x} é ${2 * x}`)
}
function Problem2() {
    var x = Number(prompt('Digite o primeiro número'))
    var y = Number(prompt('Digite o segundo número'))
    alert(`${x} + ${y} = ${x + y}`)
}
function Problem3() {
    var almoço = Number(prompt('Digite o valor total do almoço'))
    var total = almoço + 0.13*almoço
    alert(`Total do garçom: R$${0.13*almoço.toFixed(2)} \n Total a pagar: R$${total.toFixed(2)}`)
}
function Problem4() {
    var dias = Number(prompt('Dias:'))
    var horas = Number(prompt('Horas:'))    
    tempo = 24*dias + horas
    alert(`Duração da viagem: ${tempo}h`)
}
function Problem5() {
    var n = Number(prompt('Digite um número'))
    alert(`Seu posterior é ${n+1}
    Seu anterior é ${n-1}`)
}
