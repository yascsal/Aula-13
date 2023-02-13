//var myUserName = document.getElementById("username");
//console.log(myUserName[0]);

//let myUserName = document.getElementsByClassName("username");
//console.log(myUserName[0]);

let myUserName = document.getElementsByName("username");


let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if(username.value == "" || password.value == ""){
        alert("Digite seu login e senha.");
    }else{
        alert("Formulário enviado com sucesso!");
        console.log(`O nome do usuario é:  ${username.value} e a senha é:  ${password.value}`);

        username.value = "";
        password.value = "";
    
    }
});