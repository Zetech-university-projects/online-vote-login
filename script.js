const loginForm = document.querySelector("form");
const passWord = document.querySelector(".password");
const userName = document.querySelector(".username");
const hideError = document.querySelector("input");
const showPass = document.querySelector("#show");
const errorMsg = document.querySelector("#error");
errorMsg.style.color = 'red';



// Login Validation

const user = "kipkoech@gmail.com";
const pass = "123456789";


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (passWord.value === pass && userName.value === user) {
        window.location = "#";      
     }
    else {
           errorMsg.textContent = "Invalid username or password!"
    }
        
});


// Show password

showPass.addEventListener('input', (e) => {
    e.preventDefault();

    if(passWord.type === "password"){
        passWord.type = "text";
        
    }
    else{
        passWord.type = "password";
    }
});


// Hide Error message

hideError.addEventListener('input', (e) =>{
    e.preventDefault();
    errorMsg.textContent ="";
});












