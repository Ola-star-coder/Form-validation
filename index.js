const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const passWord = document.getElementById('password');
const passWord2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
    const inputStyle = element.parentElement;
    const errorDisplay = inputStyle.querySelector('.error');

    errorDisplay.innerText = message;
    inputStyle.classList.add('error');
    inputStyle.classList.remove('sucess');
}

const setSuccess = element => {
    const inputStyle = element.parentElement;
    const errorDisplay = inputStyle.querySelector('.error');

    errorDisplay.innerText = '';
    inputStyle.classList.add('success');
    inputStyle.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passWordValue = passWord.value.trim();
    const passWord2Value = passWord2.value.trim();

    if(userNameValue === ''){
        setError(userName, 'Username is required');
    } else{
       setSuccess(userName);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address')
    } else{
        setSuccess(email);
    } 

    if(passWordValue === ''){
        setError(passWord, 'password is required');
    } else if(passWordValue.length < 8){
        setError(passWord, 'password must be at least 8 characters.')
    } else{
        setSuccess(passWord)
    }
    
    if(passWord2Value === ''){
        setError(passWord2, 'Please confirm password');
    } else if(passWord2Value !== passWordValue){
        setError(passWord2, 'passwords does not match');
    } else{
        setSuccess(passWord2);
    }

}
  
