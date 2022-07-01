function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector("form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}

setFormMessage(loginForm, "success", "You're logged in!");

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
/*
    loginForm.addEventListener("submit", e => {

    });
*/
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addListenerEvent("blur", e => {
            if (e.target.id == "loginName" && onlyLetters(e.target.id) == false){
                setInputError(inputElement, "Name must contain only Letters");
            }
            else {
                setInputError(inputElement, "this is a test");
            }
        });
    });
});