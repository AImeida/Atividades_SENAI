// API https://viacep.com.br

// declara os botões
let btnAdd = document.querySelector("#btnAdd")
// let btnMostrar = document.querySelector("#btnMostrar")

// array de produtos aka lista de compras
let lista = []


// no clique do botão adicionar...
btnAdd.addEventListener("click", () => {
	// pega o produto digitado
	let produto = document.querySelector("#produto").value

	// adiciona produto à lista de compras
	lista.push(produto)
	// converte a lista em string para armazenar no localStorage, separando por vírgul
	localStorage.setItem("lista", lista.join(","))

    // mostra a lista
    mostrarLista()
})

const mostrarLista = function(){

    let itens = ''
    // pega os itens da lista do localStorage
    lista = localStorage.getItem("lista").split(",")
    // atribui os itens da lista à variável itens
    lista.forEach((n, i) => itens += 
        `<li>${n}</li>`
    )
    // mostra os itens na tela
    document.querySelector("#mostrar").innerHTML = itens
	// limpa o campo de digitar
	document.querySelector("#produto").value = ''
}

const deletarLista = function(){
    lista = []
    if (localStorage.getItem("lista")) {
        localStorage.removeItem("lista")
        document.querySelector("#mostrar").innerHTML = ""
        // document.querySelector("#mostrar").style = "display: none"
    }
}

// ao clicar no botão de Mostrar lista
// btnMostrar.addEventListener("click", mostrarLista)
// ao clicar no botão Limpar lista
btnClean.addEventListener("click", deletarLista)

