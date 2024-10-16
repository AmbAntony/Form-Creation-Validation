document.addEventListener('DOMContentLoaded', function(){
//we first select the form and feedback divs
const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', function(event){
    event.preventDefault(); //prevents the form from submitting to the server. This is crucial for client-side validation.

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true; //initializes validation variables
    const messages = []; //creates the constant reference to an empty array 

    //validates username
    if (username.length < 4){
        isValid = false;
        messages.push('username must be atleast 4 words long');
    }

    //validates email
    if (!email.includes('@') || !email.includes('.')){
        isValid = false;
        messages.push('Please enter a valid email address');
    }

    //validates password
    if (password.length < 8){
        isValid = false;
        messages.push('Password must be atleast 8 characters long');
    }

    //display feedback logic if successful
    feedbackDiv.style.display = 'block';
    if (isValid) {
        feedbackDiv.textContent = ('Registration successful');
        feedbackDiv.style.color = ('#28a745');
    }
    else {
            feedbackDiv.innerHTML = messages.join('</br');
            feedbackDiv.style.color = ('#dc3545');
        }
    

    });
});