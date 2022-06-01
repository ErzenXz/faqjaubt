



function toggleLogin(value){
    let login = document.querySelector("#login");
    let register = document.querySelector("#register");

    if (value == true){
        login.classList.add("hidden");
        register.classList.remove("hidden");
    } else {
        login.classList.remove("hidden");
        register.classList.add("hidden");
    }
}




function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == null || email == undefined || password == null || password == undefined){
        return false;
    }

    if (email.toLowerCase().indexOf("@") === -1){
        return false;
    }

    if (email == "" || password == ""){
        return false;
    }

}