let username = document.querySelector("#username")
let password = document.querySelector("#password")
let successLayOut = document.querySelector("#success")
let errorLayoutOut = document.querySelector("#error")
let submitButton = document.querySelector("#submit-button")
 
submitButton.onclick = function (event) {
    event.preventDefault();
    let usernameEntered = username.value
    let passwordEntered = password.value

    if(usernameEntered == "Baby Yoda" && passwordEntered == "Squirtle"){
    document.getElementById("success").style.display = "block"
    document.getElementById("error").style.display = "none"
    document.body.style.backgroundColor = "lightblue"
       }
    else{
    document.getElementById("error").style.display = "block"
    document.getElementById("success").style.display = "none"
    document.body.style.backgroundColor = "rgb(50, 50, 50)"    
    }

    username.value = "";
    password.value = "";
 }



