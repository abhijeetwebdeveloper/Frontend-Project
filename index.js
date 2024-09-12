const counter = document.getElementById("count-el");
const save = document.getElementById("savenum");

let count = 0;



function increment() {
    count += 1;
    counter.textContent = count;
}

function Save() {
    let container = count + " - ";
    save.textContent += container;
    counter.textContent = 0;
    count = 0;
}