const botonEncriptar= document.getElementById("boton-encriptar")

botonEncriptar.addEventListener("click", () => {
    encriptar()
    borrarImg()
    mostrarTxt()
})

const botonDesencriptar= document.getElementById("boton-desencriptar")

botonDesencriptar.addEventListener("click", () => {
    desencriptar()
    borrarImg()
    mostrarTxt()
})

function borrarImg(){
    document.getElementById('desaparecer').style.display='none';
}

function mostrarTxt(){
    document.getElementById('EDResuelto').style.display='block';
}

function encriptar(){
    var frase = document.getElementById("texto").value.toLowerCase();
    
    var texto=frase.replace(/e/img, "enter");
    var texto=texto.replace(/i/img, "imes");
    var texto=texto.replace(/a/img, "ai");
    var texto=texto.replace(/o/img, "ober");
    var texto=texto.replace(/u/img, "ufat");

    console.log(texto)

    document.getElementById("textTransform").innerHTML = texto;
}

function desencriptar(){
    var frase = document.getElementById("texto").value.toLowerCase();
    
    var texto=frase.replace(/enter/img, "e");
    var texto=texto.replace(/imes/img, "i");
    var texto=texto.replace(/ai/img, "a");
    var texto=texto.replace(/ober/img, "o");
    var texto=texto.replace(/ufat/img, "u");

    console.log(texto)

    document.getElementById("textTransform").innerHTML = texto;

}


const botonCopiar= document.getElementById("copiar")

botonCopiar.addEventListener("click", () => {
    var codigoACopiar = document.getElementById('textTransform');
    var selection = document.createRange();
    selection.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(selection);
    var res=document.execCommand('copy');
    window.getSelection().removeAllRanges(selection)
})