
const textArea = document.querySelector(".area__texto")
const mensaje = document.querySelector(".area__texto2")

function verificarInput(texto){
    var textarea = document.querySelector(texto);
    var text = textarea.value;
    var regex = /^[a-z\s]*$/;
    if (!regex.test(text)) {
        alert("Por favor ingresa solo letras minúsculas y sin acentos o caracteres especiales.");
        return;
    }

}
function btn_encriptar(){
    verificarInput(".area__texto")
    document.getElementById("area__texto2").value = "";
    const texto = encriptar(textArea.value)
    mensaje.value = texto
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("area__texto2").style.display = "block";
    document.getElementById("btn__copiar").style.display = "block";

}
function btn_desEncriptar(){
    verificarInput(".area__texto")
    document.getElementById("area__texto2").value = "";
    const texto = desEncriptar(textArea.value)
    mensaje.value = texto
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("area__texto2").style.display = "block";
    document.getElementById("btn__copiar").style.display = "block";

}

function encriptar(texto){
    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]];
    texto = texto.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i ++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return texto
}
function desEncriptar(texto){
    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]];
    texto = texto.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i ++){
        if(texto.includes(matrizCodigo[i][1])){
            texto = texto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return texto
}

function copiarTexto(){
    document.getElementById("area__texto").value = "";
    var textarea = document.querySelector('.area__texto2');
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

   
    navigator.clipboard.writeText(textarea.value).then(function() {
        alert("Texto copiado");
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
}