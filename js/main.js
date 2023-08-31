const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton => {
    boton.addEventListener("click", () => {

        const botonApretado = boton.textContent;

            if (boton.id ==="c") {
                pantalla.textContent = "0";
                return;
            }

            if (boton.id ==="borrar") {
                    if (pantalla.textContent.length ===1 || pantalla.textContent ==="Error!") {
                        pantalla.textContent = "0";
                    }
                    else {
                        pantalla.textContent = pantalla.textContent.slice(0, -1);
                    }
                
                return;
            }

            if (boton.id ==="igual") {
                try {
                    pantalla.textContent = eval(pantalla.textContent);
                
                }
                catch {
                    pantalla.textContent = "Error!";
                }
                return;
            }

            

    })
})

// Función para agregar dígitos y operadores al campo de visualización
function addToDisplay(value) {
    if (pantalla.textContent === '0' || pantalla.textContent === 'Error!') {
        pantalla.textContent = value;
    } else {
        pantalla.textContent += value;
    }
}


// Agrega un evento de escucha de teclado al documento
document.addEventListener('keydown', function (event) {
    const teclaPresionada = event.key;

    // Verifica qué tecla se presionó y realiza la acción correspondiente
    switch (teclaPresionada) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
            addToDisplay(teclaPresionada);
            break;
        case 'Enter':
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            break;
        case 'Escape':
            pantalla.textContent = '0';
            break;
    }

});
