let header = document.getElementById("header");

let small = document.getElementById("Small");

let btn1 = document.getElementById("btn");

let chars = ['~', '!', '@', '#', '$', '%', '^', '&', '(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ', '(ﾉಥДಥ)ﾉ︵┻━┻･/', 'ᕙ(⇀‸↼‶)ᕗ'];

let state = 1;




function init() {
    updatePage();
}
function randomSym() {
    let symbol = chars[Math.ceil(Math.random() * 10)]
    txt = ""
    for (i = 0; i <= 99; i++) {
        if (i % 9) {
            let rightSym = chars[Math.ceil(Math.random() * 10)];
            txt = txt + i + " - " + rightSym + "<br>";

        }
        else {
            txt = txt + i + " - " + symbol + "<br>";
            symSelect = symbol;
        }
    }
    return txt;

}

function updatePage() {
    if (state === 1) {
        header.textContent = "Bet you $1000 I can read your mind";
        small.textContent = "Go ahead, click next";
        btn1.style.display = "initial";
        document.getElementById("btn2").style.display= "none";
    }
    else if (state === 2) {
        header.textContent = "Pick a number from 01 - 99";
        small.textContent = "When you have your number click next!";
        document.getElementById("btn").textContent = "Proceed";
        document.getElementById("btn2").style.display= "initial";
    }
    else if (state === 3) {
        header.textContent = "Add both digits together to get a new number";
        document.getElementById("Small").innerHTML = "Ex: 44 is 4 + 4 = 8 <br> Click next to proceed";
        document.getElementById("btn").textContent = "Carry on";
        document.getElementById("btn2").style.visibility= "Initial";

    }
    else if (state === 4) {
        header.textContent = "Subtract your new number from the original number";
        document.getElementById("Small").innerHTML = "Ex: 44-8 = 36 <br> Click next to proceed";
        document.getElementById("btn").style.textContent = "Go on";
        document.getElementById("btn2").style.display= "Show";
    }
    else if (state === 5) {
        let str = randomSym();
        header.innerHTML = str;
        document.getElementById("Small").innerHTML = "Find your new number <br> Note the symbol beside the number";
        document.getElementById("btn").textContent = "Forward";
        document.getElementById("btn2").style.display= "Show";
    }
    else if (state === 6) {
        header.innerHTML = "PAY UP";
        document.getElementById("Small").innerHTML = "Your symbol is: <br>"
        document.getElementById("btn").textContent = "Pay Me";
        document.getElementById("btn2").style.display= "Show";
    }
    else if (state === 7) {
        header.innerHTML = "Your symbol is: <br>" + symSelect;
        document.getElementById("btn").style.display = "None";
        document.getElementById("btn2").style.display= "Show";
    }

}
function incrementState() {
    state++;
    updatePage();
}
function resetState() {
    state = 1;
    updatePage();
}

updatePage();

 //console.log(updatePage);


