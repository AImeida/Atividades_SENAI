
function Problem1() {
    var x = prompt('Digite um número, vou mostrar o dobro')
    alert(`O dobro de ${x} é ${2 * x}`)
}
function Problem2() {
    var x = prompt('Digite o primeiro número')
    var y = prompt('Digite o segundo número')
    x = Number(x); y = Number(y)
    alert(`${x} + ${y} = ${x + y}`)
}
function Problem3() {
    var almoço = prompt('Digite o valor total do almoço')
    almoço = Number(almoço)
    var total = almoço + 13/100*almoço
    alert(`Total a pagar: ${total}`)
}
function Problem4() {
    var dias = prompt('Dias:')
    var horas = prompt('Horas:')
    dias = Number(dias); horas = Number(horas)
    
    tempo = 24*dias + horas
    alert(`Duração da viagem: ${tempo}h`)
}
function Problem5() {
    var n = prompt('Digite um número')
    n = Number(n)
    alert(`Seu posterior é ${n+1}
    Seu anterior é ${n-1}`)

}
