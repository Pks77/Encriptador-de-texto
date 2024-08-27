const textArea = document.querySelector(".style_textarea");
const mensaje = document.querySelector(".style_mensaje");

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function btnEncriptar(){
    let texto = textArea.value;
    
    if (!validarTexto(texto)) {
        alert("Por favor ingresa solo letras minúsculas, sin acentos ni caracteres especiales.");
        return;
    }

    const textoEncriptado = encriptar(texto);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    let texto = textArea.value;
    
    if (!validarTexto(texto)) {
        alert("Por favor ingresa solo letras minúsculas, sin acentos ni caracteres especiales.");
        return;
    }

    const textoDesencriptado = desencriptar(texto);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


document.getElementById("botonCopiar").addEventListener("click", function(){
    const texto = document.getElementById("miTextarea").value;

    navigator.clipboard.writeText(texto).catch(function(error) {
    });
});
