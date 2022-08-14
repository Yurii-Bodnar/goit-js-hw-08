import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state";


const EmailinputRef = document.querySelector("[name='email']");
const feedbackFormRef = document.querySelector(".feedback-form");
const textareaRef = document.querySelector("[name='message']")

feedbackFormRef.addEventListener("submit", onFormSubmit);
feedbackFormRef.addEventListener("input", throttle(onInput, 500));

let formData = {
    
}




function onFormSubmit(e) {
    e.preventDefault();
    
    if(EmailinputRef.value.trim() !== '' && textareaRef.value.trim() !== '')
    
    feedbackFormRef.reset();
    localStorage.removeItem(STORAGE_KEY);

}


function onInput(e) {
     formData = {
    email: EmailinputRef.value,
    message: textareaRef.value,
  };

    localStorage.setItem(STORAGE_KEY,JSON.stringify(formData))
}

function getFormValue(e) {
    let saveFitback = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(saveFitback);
    if (saveFitback) {
        EmailinputRef.value = saveFitback.email
        textareaRef.value = saveFitback.message
    }
    formData = saveFitback
}
getFormValue()