document.querySelector("#Enviar").addEventListener("click", function() {
    
    // pega a data no form
    fDate = document.forms[0].fDate.value;
    msDate = Date.parse(fDate); // converte em milisegundos

    // Dá um update na função a cada 1000ms
    var x = setInterval(function() {

        // data de hoje
        var agora = new Date().getTime();
        
        // tempo entre a data inserida e a data de hoje
        var tempo = msDate - agora;
        
        // continhas de conversão
        var dias = Math.floor(tempo / (1000 * 60 * 60 * 24));
        var horas = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((tempo % (1000 * 60)) / 1000);
            
        // mostra o countdown no elemento "Timer" do HTML
        document.getElementById("Timer").innerHTML = dias + "d " + horas + "h "
        + minutos + "m " + segundos + "s ";
            
        // quando o tempo acabar...
        if (tempo < 0) {
            clearInterval(x);
            document.getElementById("Timer").innerHTML = "ACABOU";
        }
    }, 1000);

})