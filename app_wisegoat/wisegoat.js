fetch('https://api.adviceslip.com/advice')
    .then(r => r.json())
    .then(json => {
        // console.log(json.slip)
        let conselho = json.slip.advice
        document.querySelector(".conselho").textContent = conselho
    })
    .catch(err => {
        console.error(err)
        alert("Erro ao carregar conselho!")
    })