form.addEventListener('submit', function(){
    event.preventDefault()

    var modelo = document.getElementById('modelo').value
    console.log(modelo)

    var preço = document.getElementById('preço').value
    preço = Number(preço)
    console.log(preço)

    var parcelas = .5*preço / 60
    console.log(parcelas)

    var parcelas_juros = parcelas + 0.7*parcelas
    parcelas_juros = parcelas_juros.toPrecision(6)
    console.log(parcelas_juros)


    document.getElementById('mostrar').innerHTML = `
        <h2>Promoção: ${modelo}</h2>
        <h2>Entrada de ${.5*preço}</h2>
        <h2>+60 de R$: ${parcelas_juros}</h2>
    `
})
