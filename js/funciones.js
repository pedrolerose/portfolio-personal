function ValidarEnviar() {

    var mail = document.getElementById("inputMail").value;
    var nombre = document.getElementById("inputNombre").value;
    var mensaje = document.getElementById("inputMensaje").value;

    if (mail.length == 0 || nombre.length == 0 || mensaje.length == 0) {
        alert("Debe completar todos los campos");
        return;
    }
    if (!validarEmail(mail)) {
        alert("Debe ingresar un email valido");
        return;
    }
    if (!validarSoloLetras(nombre)) {
        alert("El nombre solo debe poseer letras");
        return;
    }

    alert("El mensaje se envio correctamente");
}

function validarEmail(valor) {
    if (/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(valor)) {
        return true;
    } else {
        return false;
    }
}

function validarSoloLetras(valor) {
    if (/^[A-Z]+$/i.test(valor)) {
        return true;
    } else {
        return false;
    }
}