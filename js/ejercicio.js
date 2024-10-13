function validarTexto(input, errorSpan, mensajeError) {
    if (input.value.trim() === "") {
        input.classList.add("input-error");
        input.classList.remove("input-correct");
        errorSpan.innerText = mensajeError;
    } else {
        input.classList.add("input-correct");
        input.classList.remove("input-error");
        errorSpan.innerText = "";
    }
}

function validarEmail(input, errorSpan) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(input.value)) {
        input.classList.add("input-error");
        input.classList.remove("input-correct");
        errorSpan.innerText = "Introduce un correo válido.";
    } else {
        input.classList.add("input-correct");
        input.classList.remove("input-error");
        errorSpan.innerText = "";
    }
}

const asuntoInput = document.getElementById("asunto");
const ccInput = document.getElementById("cc");
const mensajeInput = document.getElementById("mensaje");

const asuntoError = document.getElementById("asunto-error");
const ccError = document.getElementById("cc-error");
const mensajeError = document.getElementById("mensaje-error");

asuntoInput.addEventListener("focusout", () => {
    validarTexto(asuntoInput, asuntoError, "El asunto no puede estar vacío.");
});

ccInput.addEventListener("focusout", () => {
    validarEmail(ccInput, ccError);
});

mensajeInput.addEventListener("focusout", () => {
    validarTexto(mensajeInput, mensajeError, "El cuerpo del mensaje no puede estar vacío.");
});
