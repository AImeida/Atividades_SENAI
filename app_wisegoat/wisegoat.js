<<<<<<< HEAD
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
=======
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
>>>>>>> 67f75f3a0d524eacd0a048c192fa6670f7b88308
    })