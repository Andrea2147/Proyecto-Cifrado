const mensajeEncriptado = "^[()~^*/?[()^+-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()¬^~()[{=()?+^[]=?()^\\{()*¡[$[{( )¡[()?=[]\\\\¬]()¿()[{;+[$__~()~]=\\]+~";

const caracteres = {
    "?": "a",
    "[": "e",
    "\\": "i",
    "~": "o",
    "+": "u",
    "¬": "ó",
    "(": " ",
    ")": " ",
    "$": "r",
    "^": "m",
    "`": "c",
    "#": "v",
    "%": "b",
    "¡": "d",
    "}": "q",
    "=": "t",
    "{": "s",
    "]": "n",
    "*": "p",
    "/": "l",
    "-": "h",
    "¿": "y",
    "!": "j",
    ";": "f",
    "__": "z"
};

// Función para desencriptar el mensaje
const desencriptarMensaje = (mensaje) => {
    let mensajeDesencriptado = "";
    for (const simbolo of mensaje) {
        // Reemplaza el símbolo por su correspondiente en caracteres
        mensajeDesencriptado += caracteres[simbolo] || simbolo; // Usa el símbolo original si no hay sustitución
    }
    return mensajeDesencriptado;
};

// Llamar a la función y mostrar el mensaje desencriptado
const mensajeDesencriptado = desencriptarMensaje(mensajeEncriptado);
console.log("Mensaje desencriptado:"); // Imprime un encabezado
console.log(mensajeDesencriptado); // Imprime el mensaje desencriptado