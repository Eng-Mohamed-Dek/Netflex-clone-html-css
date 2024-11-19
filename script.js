const button = document.getElementById('button');
const signup = document.getElementById('signup');
const submit = document.getElementById('submit');
const signupClose = document.getElementById('icon');
const loginClose = document.getElementById('icon-login');
const loginButton = document.getElementById('login');
const signupButton = document.getElementById('signup-btn');
const signin = document.getElementById('signin');

// show 
button.addEventListener('click', () => {
    signup.classList.toggle('showHide');
})

// hide with submit 
submit.addEventListener('click', () => {
    signup.classList.toggle('showHide');
})

// hide with close icon - signup
signupClose.addEventListener('click', () => {
    signup.classList.toggle('showHide');
})

// Show Login Page  
loginButton.addEventListener('click', () => {
    signin.classList.toggle('showHide');
    signup.classList.toggle('showHide');
})

// hide with close icon - sigin
loginClose.addEventListener('click', () => {
    signin.classList.toggle('showHide');
})

// Show singup page
signupButton.addEventListener('click', () => {
    signin.classList.toggle('showHide');
    signup.classList.toggle('showHide');
})

