// Define DOM Variables

let firstName = document.querySelector('#firstname');
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let signUp = document.querySelector("#signup");


// Attach Event Listener to Sign-Up Button using addEventListener()

signUp.addEventListener("click", (event) => {
    event.preventDefault();

    // Validate First Name
    if (firstName.value === "") {
        let formField = firstName.parentElement;
        let errMsgElement = formField.querySelector('small');
        formField.classList.add('error');
        errMsgElement.textContent = "Please provide a valid First Name!";
        return;
        
    }

    // Validate Last Name
    if (lastName.value === "") {
        let formField = lastName.parentElement;
        let errMsgElement = formField.querySelector('small');
        formField.classList.add('error');
        errMsgElement.textContent = "Please provide a valid Last Name!";
        return;
    }

    // Validate Email
    if (email.value === "") {
        let formField = email.parentElement;
        let errMsgElement = formField.querySelector('small');
        formField.classList.add('error');
        errMsgElement.textContent = "Please provide a valid Email!";
        return;
    
    }

    let regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

     // Validate Password
     if (password.value === "") { 
        let formField = password.parentElement;
        let errMsgElement = formField.querySelector('small');
        formField.classList.add('error');
        errMsgElement.textContent = "Please use atleast 8 character with Uppercase";
        return;
    
    }
     // Validate confirmPassword
     if (confirmPassword.value === "") {
        let formField = confirmPassword.parentElement;
        let errMsgElement = formField.querySelector('small');
        formField.classList.add('error');
        errMsgElement.textContent = "Please match your Password Here";
        return;
    
    }


      
            window.location.href = "signup.html";
      
});


// Function to Remove Error

function removeError(inputField) {
    let formField = inputField.parentElement;
    formField.classList.remove('error');
    let errMsgElement = formField.querySelector('small');
    errMsgElement.textContent = "";
    
}



