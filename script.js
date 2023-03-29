function carregar() { 

var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var horas = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML= `Agora são ${horas}: ${minuto} horas.`


if  ( horas >= 0 && horas < 12) {
    //bom dia
    img.src = "manha.jpg"
    document.body.style.background = '#e2cd9f'
} else if ( horas >= 12 && horas < 18 ) {
    //boa tarde
    img.src = "tarde.jpg"
    document.body.style.background = '#b9846f'
} else {
    //boa noite
    img.src = "noite.jpg"
    document.body.style.background = '#b9846f'
}


}

