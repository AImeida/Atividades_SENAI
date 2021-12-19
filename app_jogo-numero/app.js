
// gerador de numeros aleatorios (entre 1 e 60)
const VALOR_SORTEADO = parseInt(Math.random()*60 + 1)

// chances
const CHANCES = 7

// Array de erros
var erros = []

// função da aposta
const apostarNumero = () => {
    // atribui o valor digitado na tela para a variavel n
    let n = parseInt(numero.value)

    // verifica se o numero digitado é valido
    if (verificaNumeroInvalido(n)) {return}

    // verifica se o numero digitado é o sorteado
    else if (verificaNumeroSorteado(n)) {return}

    // verifica se o numero digitado é repetido
    else {verificaNumeroRepetido(n)}

    // numero de erros
    let numErros = erros.length
    // numero de chances
    let numChances = CHANCES - numErros
    // exibe o numero de erros no elemento HTML #saidaErro
    saidaErro.innerHTML = `${numErros}` // consertar style
    // exibe o numero de erros no elemento HTML #saidaChances
    saidaChances.innerHTML = `${numChances}` // consertar style
    
    /* CONSTRUIR FUNÇÃO DICAS */

    // PERDEU. FIM DO JOGO
    if(numChances == 0) {
        alert('Você perdeu :(') // substituir pelo Swal
    }

    // se for não for o valor sorteado, vamos lá...
    // if(n !== VALOR_SORTEADO){     
    //     // verifica se o valor já foi digitado antes
    //     if (verificaNumeroRepetido(n)) {return}
    //     let numErros = erros.length
    //     // numChances = # chances inicial menos o tamanho do array erros
    //     let numChances = CHANCES - numErros
    //     // mostrar no elemento HTML #saidaErro o numero de erros
    //     saidaErro.innerHTML = `${numErros}`
    // }

    limparCampo()

}

const limparCampo = () => {
    numero.value = ''
}

const verificaNumeroInvalido = (n) => {
    if (n <= 0 || n > 60 || isNaN(n)) {
        // usando sweetalert2, para substituir o alert()
        Swal.fire({
            title: 'Erro!',
            text: 'Informe um número válido!',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        return true
    }
}

const verificaNumeroSorteado = (n) => {
    if (n == VALOR_SORTEADO) {
        Swal.fire({
            title: 'Parabéns!',
            text: 'Você acertou!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        return true
    }
}

const verificaNumeroRepetido = (n) => {
    // indexOf retorna -1 se o valor não for encontrado no array
    if (erros.indexOf(n) !== -1) {// se o valor já estiver no array...
        alert('Já foi digitado!')
    } else {// se não estiver no array, coloque-o
        erros.push(n)
    }
    alert(erros)
}



/********** INICIO DO SCRIPT ***********/

// adiciona um 'Ouvinte de Eventos' no form
document.querySelector('form').addEventListener('submit', e => {
    // evita que o form seja enviado ao clicar submit
    e.preventDefault()
    // vai pra função ao clicar submit
    apostarNumero()
})
