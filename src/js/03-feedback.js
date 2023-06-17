import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const keyLocal = `feedback-form-state`;

form.addEventListener(`input`, throttle(onInputData, 500));
form.addEventListener(`submit`, onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(keyLocal)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(keyLocal, JSON.stringify(dataForm));
}
    
function reloadPage() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
    }
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });

    if (email.value === '' || message.value === '') {
        return alert('Please, fill in all the fields');
    }

    localStorage.removeItem(keyLocal);
    e.currentTarget.reset();
    dataForm = {};
}
