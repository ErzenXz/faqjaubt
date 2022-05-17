// Erzen Krasniqi


let menuS = "false";


function openMenu() {

    if (menuS == "false") {
        document.getElementById("menu").classList.remove("hidden");
        document.body.classList.add("dark");
        menuS = "true";
    } else if (menuS == "true") {
        document.getElementById("menu").classList.add("hidden");
        document.body.classList.remove("dark");
        menuS = "false";
    }
}


var centerMode = `
ul {
    padding-left: 35%;
    padding-right: 35%;
}

.list-right {
    float: left;
    cursor: pointer;
}
`;


var normalMode = `
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
}

.list-right {
    float: right;
    cursor: pointer;
}
`;

// Erzen Krasniqi

function savedTheme() {
    if (localStorage.getItem("menu") == "center") {
        centerStyle();
        document.getElementById("center").setAttribute("selected", "selected");
    } else {
        normalStyle();
        document.getElementById("default").setAttribute("selected", "selected");
    }

    if (localStorage.getItem("theme") == "1") {
        lightMode();
        document.getElementById("light").setAttribute("selected", "selected");

    } else if (localStorage.getItem("theme") == "2") {
        darkMode();
        document.getElementById("dark").setAttribute("selected", "selected");
    }

    if (localStorage.getItem("text") == "default") {
        dText();
        document.getElementById("dtext").setAttribute("selected", "selected");

    } else if (localStorage.getItem("text") == "scaled") {
        sText();
        document.getElementById("stext").setAttribute("selected", "selected");
    
    } else if (localStorage.getItem("text") == "big") {
        bigText();
        document.getElementById("btext").setAttribute("selected", "selected");
    } else if (localStorage.getItem("text") == "massive") {
        massiveText();
        document.getElementById("mtext").setAttribute("selected", "selected");
    }


    if (localStorage.getItem("cmode") == "default"){
        dcolors();
        document.getElementById("def").setAttribute("selected", "selected");

    } else if (localStorage.getItem("cmode") == "green"){
        gforest();
        document.getElementById("green").setAttribute("selected", "selected");

    } else if (localStorage.getItem("cmode") == "yellow"){
        ysun();
        document.getElementById("yellow").setAttribute("selected", "selected");

    } else if (localStorage.getItem("cmode") == "apple"){
        rapple();
        document.getElementById("apple").setAttribute("selected", "selected");

    } else if (localStorage.getItem("cmode") == "silver"){
        csilver();
        document.getElementById("silver").setAttribute("selected", "selected");

    } else if (localStorage.getItem("cmode") == "gold"){
        cgold();
        document.getElementById("gold").setAttribute("selected", "selected");

    } else if (localStorage.getItem("cmode") == "pink"){
        cpink();
        document.getElementById("pink").setAttribute("selected", "selected");

    }

}


function centerStyle() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = centerMode;
    document.body.appendChild(styleSheet);
}


function normalStyle() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = normalMode;
    document.body.appendChild(styleSheet);
}

$('select').on('change', function () {
    if (this.value == "1") {
        normalStyle();
        localStorage.setItem("menu", "default");
    } else if (this.value == "2") {
        centerStyle();
        localStorage.setItem("menu", "center");
    } else if (this.value == "dark") {
        darkMode();
        localStorage.setItem("theme", "2");
    }
    else if (this.value == "light") {
        lightMode();
        localStorage.setItem("theme", "1");
    }
    else if (this.value == "default") {
        dText();
        localStorage.setItem("text", "default");
    }
    else if (this.value == "scaled") {
        sText();
        localStorage.setItem("text", "scaled");
    }
    else if (this.value == "big") {
        bigText();
        localStorage.setItem("text", "big");
    }
    else if (this.value == "massive") {
        massiveText();
        localStorage.setItem("text", "massive");
    }
    else if (this.value == "def") {
        dcolors();
        localStorage.setItem("cmode", "default");
    }
    else if (this.value == "green") {
        gforest();
        localStorage.setItem("cmode", "green");
    }
    else if (this.value == "yellow") {
        ysun();
        localStorage.setItem("cmode", "yellow");
    }
    else if (this.value == "apple") {
        rapple();
        localStorage.setItem("cmode", "apple");
    }
    else if (this.value == "silver") {
        csilver();
        localStorage.setItem("cmode", "silver");
    }
    else if (this.value == "gold") {
        cgold();
        localStorage.setItem("cmode", "gold");
    }
    else if (this.value == "pink") {
        cpink();
        localStorage.setItem("cmode", "pink");
    }
});



var lightColor = `
:root {

    --blur-color: rgba(255, 255, 255, 0.75);
    --li-color: rgb(39, 38, 38);
    --background-li: white;

    --li-selected-color: whitesmoke;
    --color: black;
    --select-color: black;

    --background-color: white;
    --menu-background-color: white;
}

`;

var darkColor = `
:root {
    --blur-color: rgba(0, 0, 0, 0.5);
    --li-color: white;
    --background-li: #424242;

    --li-selected-color: whitesmoke;
    --color: white;
    --select-color: black;

    --background-color: #212121;
    --menu-background-color: #212121;
}

`;

var defText = `
:root {
    --h1-font-size: 30px;
    --p-font-size: 16px;
    --h4-font-size: 18px;
}
`;

var scaText = `
:root {
    --h1-font-size: 35px;
    --p-font-size: 18px;
    --h4-font-size: 20px;
}
`;

var bigeText = `
:root {
    --h1-font-size: 42px;
    --p-font-size: 22px;
    --h4-font-size: 26px;
}
`;

var massivText = `
:root {
    --h1-font-size: 50px;
    --p-font-size: 26px;
    --h4-font-size: 30px;
}
`;

function lightMode() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = lightColor;
    document.body.appendChild(styleSheet);
}



function darkMode() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = darkColor;
    document.body.appendChild(styleSheet);
}


function dText() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = defText;
    document.body.appendChild(styleSheet);
}

function sText() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = scaText;
    document.body.appendChild(styleSheet);
}

function bigText() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = bigeText;
    document.body.appendChild(styleSheet);
}

function massiveText() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = massivText;
    document.body.appendChild(styleSheet);
}



var defaultcolors = `
:root {
    --li-activated-color: #297e97;
}
`;

var greenforest = `
:root {
    --li-activated-color: green;
}
`;

var yellowsun = `
:root {
    --li-activated-color: #a88532;
}
`;

var redapple = `
:root {
    --li-activated-color: #a83242;
}
`;

var silver = `
:root {
    --li-activated-color: silver;
}
`;

var gold = `
:root {
    --li-activated-color: #a88532;
}
`;

var pink = `
:root {
    --li-activated-color: #eb7ce0;
}
`;


function dcolors() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = defaultcolors;
    document.body.appendChild(styleSheet);
}

function gforest() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = greenforest;
    document.body.appendChild(styleSheet);
}

function ysun() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = yellowsun;
    document.body.appendChild(styleSheet);
}

function rapple() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = redapple;
    document.body.appendChild(styleSheet);
}

function csilver() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = silver;
    document.body.appendChild(styleSheet);
}

function cgold() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = gold;
    document.body.appendChild(styleSheet);
}

function cpink() {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = pink;
    document.body.appendChild(styleSheet);
}
// Erzen Krasniqi