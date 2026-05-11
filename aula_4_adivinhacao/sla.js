var numeroaleatorio = Math.floor(Math.random() * 101);
console.log(numeroaleatorio);

function Adivinhar(){

    var numerousuario = document.getElementById("numerodigitado").value
    if (numerousuario == numeroaleatorio){
        document.getElementById("advinhar").style.setProperty("background-color", "#065F46");
    }
    else{
        document.getElementById("advinhar").style.setProperty("background-color", "#B91C1C");
    }
}