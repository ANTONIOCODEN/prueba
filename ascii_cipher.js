/* Función que reciba un texto o una frase y cifre cada
una de sus letras en su correspondiente valor del código ASCII,
devolviendo un texto con todos estos valores de ASCII separados por
espacios.
Como ejemplo, si yo introduzco la frase “Codenotch and Javascript are
awesome!” */

var  ascii_cipher = (string)  => {
    let str = ""
    for(let i = 0; i < string.length; i++){
        str += string.charCodeAt(i) + '\t';
    }
    return str;
}

ascii_cipher('Codenotch and Javascript are awesome!');