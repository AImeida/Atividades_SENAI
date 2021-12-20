
// esconde o BoxAtendimento
document.querySelector("#BoxAtendimento").style = "display:none"

// evento de clique do botão Adicionar. O parâmetro representa o caso
btnAdd.addEventListener("click", () => Fila(Add));
// evento de clique do botão Urgência.
btnUrg.addEventListener("click", () => Fila(Urg));
// evento de clique do botão Atender
btnAtender.addEventListener("click", () => Fila(Atender))

// evento de clique do botão Clean
btnClean.addEventListener("click", () => Fila(Clean))

// atribui valores aos botões para uso no switch
let Add = 0
let Urg = 1
let Atender = 2
let Clean = 3


// array da fila
const filaEspera = []


// função que adiciona pessoas à fila
function Fila(option){
    // atribui o que foi digitado à var "paciente"
    let paciente = document.querySelector('#paciente').value

	// se não for digitado nome, exibe erro
	if (paciente == '' & (option == 0 || option == 1)) {
		alert("Erro!")
		return 'break;' // retorna o break para sair da function Fila()
	} 

    switch (option) {
        case 0: // Add
            filaEspera.push(paciente)
            break;
		case 1: // Urg
			// adiciona o paciente em 1º na fila
			filaEspera.unshift(paciente)
			break;
		case 2:	// Atender
			// remove o 1º nome da lista e o guarda na var 'pacienteEmAtendimetno'
			pacienteEmAtendimento = filaEspera.shift()
			// mostra o BoxAtendimento e exibe o paciente em atendimento
			document.querySelector("#BoxAtendimento").style = "display:block"
			document.querySelector("#nomePessoaAtendimento").innerHTML = pacienteEmAtendimento
			break;
		case 3: // Clean
			// limpa a fila
			filaEspera.splice(0, filaEspera.length)
			break;
    }

    
    // variavel que armazena a lista de itens para a tela
    let listaTela = ""

    // pra cada elemento de filaEspera, executa a function(item, indice)
    filaEspera.forEach(function(pessoa, i){// The forEach() method calls a function for each element in an array.
        // adiciona item paciente na lista
		listaTela += `<li class="list-group-item">${i+1} - ${pessoa}</li>`
    })

	// exibe a lista de espera no elemento HTML #listaEspera
    document.querySelector("#listaEspera").innerHTML = listaTela



    // limpa o campo digitado
    document.querySelector("#paciente").value = ''
}