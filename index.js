// document.getElementById("count").innerText=5

let count = 0 ;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
    count++;
    countEl.textContent = count ;
}

function save()
{    
    let countStr = " " +count+ " - " ;
    saveEl.textContent += countStr;
    // count to zero and select the elem html
    countEl.textContent = count = 0 ;
}
