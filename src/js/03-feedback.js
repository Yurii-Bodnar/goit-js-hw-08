import throttle from 'lodash.throttle';
const STORAGE_KEY_EMAIL = "feedback-form-state-email";
const STORAGE_KEY_TEXTARIA = "feedback-form-state-textaria";

const EmailinputRef = document.querySelector("input");
const feedbackFormRef = document.querySelector(".feedback-form");
const textareaRef = document.querySelector("textarea")

feedbackFormRef.addEventListener("submit", onFormSubmit);
textareaRef.addEventListener("input", throttle(onInputTextaria, 500));
EmailinputRef.addEventListener("input", throttle(onInputEmail, 500));

populateInput(); 

function onFormSubmit(e) {
    e.preventDefault();
    
    console.log(EmailinputRef.value);
    console.log(textareaRef.value);
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY_EMAIL);
    localStorage.removeItem(STORAGE_KEY_TEXTARIA);

}
function onInputEmail(e) {
    const massage = e.target.value;
    localStorage.setItem(STORAGE_KEY_EMAIL, massage)
}
function onInputTextaria(e) {
    const massage = e.target.value;
    localStorage.setItem(STORAGE_KEY_TEXTARIA, massage)
}
function populateInput(e) {
    const saveMassageEmail = localStorage.getItem(STORAGE_KEY_EMAIL);
        if (saveMassageEmail) { 
        EmailinputRef.value = saveMassageEmail;
    };
    const saveMassageTextaria = localStorage.getItem(STORAGE_KEY_TEXTARIA);
    if (saveMassageTextaria) {
        textareaRef.value = saveMassageTextaria;
        }
}