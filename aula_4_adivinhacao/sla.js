var numeroaleatorio = Math.floor(Math.random() * 101);
var tentativas = 0;
var jogoAcabou = false;

function Adivinhar() {
    if (jogoAcabou) return;

    var input    = document.getElementById("numerodigitado");
    var numero   = parseInt(input.value, 10);
    var msg      = document.getElementById("mensagem");
    var body     = document.getElementById("advinhar");
    var contagem = document.getElementById("contagem");

    if (isNaN(numero) || numero < 0 || numero > 100) {
        sacudir(input);
        setMsg(msg, "Digite um número entre 0 e 100.", "wrong");
        return;
    }

    tentativas++;
    contagem.textContent = tentativas;

    body.classList.remove("correct", "wrong");

    if (numero === numeroaleatorio) {
        jogoAcabou = true;
        body.classList.add("correct");
        setMsg(msg, "Acertou! Era " + numeroaleatorio + ". (" + tentativas + " tentativa" + (tentativas > 1 ? "s" : "") + ")", "correct");
        document.getElementById("resetBtn").style.display = "block";
        input.disabled = true;
        document.getElementById("Botao").disabled = true;
    } else {
        var diff    = Math.abs(numero - numeroaleatorio);
        var direcao = numero < numeroaleatorio ? "maior" : "menor";
        var dica;

        if (diff <= 3)       dica = "Muito perto! O numero e " + direcao + ".";
        else if (diff <= 10) dica = "Perto. O numero e " + direcao + ".";
        else if (diff <= 25) dica = "Longe. O numero e " + direcao + ".";
        else                 dica = "Muito longe. O numero e " + direcao + ".";

        body.classList.add("wrong");
        setMsg(msg, dica, "wrong");
        sacudir(input);
    }

    input.value = "";
    input.focus();
}

function setMsg(el, texto, estado) {
    el.textContent  = texto;
    el.className    = "mensagem " + (estado || "");
}

function sacudir(el) {
    el.classList.remove("shake");
    void el.offsetWidth;
    el.classList.add("shake");
    el.addEventListener("animationend", function () {
        el.classList.remove("shake");
    }, { once: true });
}

function Resetar() {
    numeroaleatorio = Math.floor(Math.random() * 101);
    tentativas      = 0;
    jogoAcabou      = false;

    var input = document.getElementById("numerodigitado");
    input.disabled = false;
    input.value    = "";

    document.getElementById("Botao").disabled    = false;
    document.getElementById("mensagem").textContent = "—";
    document.getElementById("mensagem").className   = "mensagem";
    document.getElementById("contagem").textContent = "0";
    document.getElementById("resetBtn").style.display = "none";
    document.getElementById("advinhar").className = "";

    input.focus();
}
