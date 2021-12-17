// lista as noticias em um array
let todasNoticias = []

// oculta o elemento "tituloNoticias"
document.querySelector("#tituloNoticias").style = "display: none"

const cadastrarNoticia = function(){
    // atribui o texto digitado no campo à variável notícia
    let noticia = document.querySelector("#noticia").value
    // se enviar string vazia, pede pra digitar a noticia
    if (noticia == "") {
        alert("Digite uma noticia!");
        return
    }

    // adiciona o conteudo da noticia ao array ultimasNoticias
    ultimasNoticias.push(noticia)   
    // joga o numero de noticias (que é o tamanho do array ultimasNoticias) no elemento HTML qtdNoticias
    qtdNoticias.innerHTML = ultimasNoticias.length
    // limpa o valor de noticia
    document.querySelector("#noticia").value = ""
    // dá foco ao elemento HTML noticia
    document.querySelector("#noticia").focus()
    // bloqueia a visualização do elemento tituloNoticias
    document.querySelector("#tituloNoticias").style = "display: block"
}

const mostrarNoticias = function(){
    // atribui a area de mostrar noticias à variável "mostrar"
    let mostrar = document.querySelector("#mostrarNoticias")
    // uma string vazia, por enquanto
    let htmlTela = ""
    // se não tiver noticias pra mostrar, exibe mensagem
    if (ultimasNoticias.length === 0) {
        alert("Você não possui noticias cadastradas");
        return
    }
    // a mágica
    ultimasNoticias.forEach((n, i) => htmlTela = htmlTela + `
        <article class="message is-dark is-medium">
            <div class="message-header">
                <h1> Notícia ${i+1} </h1> 
            </div> 
            <div class="message-body">
                ${n}
            </div>
        </article>
    `)
    // mostra as noticias na tela
     mostrar.innerHTML = htmlTela
     document.querySelector("#noticia").value = ""
     document.querySelector("#noticia").focus()
}

// o deletador de noticias
const deletarNoticias = function(){
    ultimasNoticias = []
    qtdNoticias.innerHTML = ""
    document.querySelector("#mostrarNoticias").innerHTML = ""
    document.querySelector("#tituloNoticias").style = "display: none"
}

// os eventos de clique
btnCadastrarNoticia.addEventListener("click", cadastrarNoticia)
btnMostrar.addEventListener("click", mostrarNoticias)
btnDeletar.addEventListener("click", deletarNoticias)
