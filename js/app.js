


function log(text, value){
    if(value == true){
        console.log(text);

    } else {
        console.log(`%c${text}`, "font-size: 18px; padding: 10px; background-color: lightgreen; border: 1px solid green; border-radius: 10px;");

    }
}


function changeBirthdayYear(){
    let date = document.getElementById("birthday");

    let d = new Date();

    date.setAttribute("min",`${d.getFullYear() - 100}-01-01`);
    date.setAttribute("max",`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);

}


changeBirthdayYear();
