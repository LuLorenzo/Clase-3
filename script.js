if (confirm("Ingrese su contraseña")) {
    let isPasswordOk = false;
    for (let i = 1; i <= 3; i++) {
        let userPass = prompt("Ingrese contraseña - Intento: " + i);

        if (userPass === "123") {
            isPasswordOk = true;
            break;
        }
    }

    if (isPasswordOk) {
        alert("Contraseña correcta");
    } else{
        alert("Has agotado tus intentos");
    }
}