const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
let success = true;

form.addEventListener('submit', (e) => {
    if(!validateInputs()){
        e.preventDefault();
    }
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (usernameVal === '') {
        success=false;
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        success=false;
        setError(email, 'email is required');
    } else if (!validateEmail(emailVal)) {
        success=false;
        setError(email, 'Please enter Validate email');
    } else {
        setSuccess(email);
    }
    
    if (passwordVal === '') {
        success=false;
        setError(password, "Password is required");
    } else if (passwordVal.length < 8) {
        success=false;
        setError(password, 'Atleast 8 characters need to be required');
    } else {
        setSuccess(password);
    }

    if (cpasswordVal === '') {
        success=false;
        setError(cpassword, 'Confirm password is required');
    } else if (cpasswordVal != passwordVal) {
        success=false;
        setError(cpassword, 'Password mismatch.Try again');
    } else {
        setSuccess(cpassword);
    }

}


function setError(element, messsage) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = messsage;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};