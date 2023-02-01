const submitBtn = document.querySelector(".submit-btn");
const error = document.querySelector(".error");
const form = document.querySelector(".form");
const input = document.querySelector("#email");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", validate);
submitBtn.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const inputValue = input.value.trim();
    console.log(inputValue);
    if (isEmail(inputValue)) {
        error.style.display = "none";
        errorIcon.style.display = "none";
    } else {
        error.style.display = "block";
        errorIcon.style.display = "block";
    }
}

function isEmail(input) {
    return /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(input);
}