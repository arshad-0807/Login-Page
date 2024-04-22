const form = document.getElementById("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    validateForm();
})

function clearErrors(){
    let error = document.getElementsByClassName("error")
    for (let i = 0; i<error.length; i++){
        error[i].innerHTML="";
    }
};
function showError(input, message) {
    let error = input.parentElement.querySelector(".error");
    error.innerHTML = message;
  }

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


function validateForm(){
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    clearErrors();

    if (username.value === ""){
        showError(username, "Username cannot be empty");
    }

    if (!validateEmail(email.value)){
        showError(email, "email cannot be empty")
    }

    if (password.value=== "") {
        showError(password, "Password cannot be blank")
    }
    
};



