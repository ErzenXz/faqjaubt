



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