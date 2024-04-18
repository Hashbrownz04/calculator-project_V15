const divElement = document.createElement('div');

document.body.appendChild(divElement);

document.body.setAttribute("style", "font-size: 50px");

let total = "0";
divElement.innerText = total;

const numButton = document.createElement('button');

document.body.appendChild(numButton);
numButton.innerText = "2";

numButton.addEventListener("click", (event) => {
    event.target.divElement;
    total+="2";
    divElement.innerText = total;
})

let num1 = "";
let num2 = "";

const addButton = document.createElement('button');
document.body.appendChild(addButton);
addButton.className = "add";
addButton.innerText = '+';

let clicked = true;

addButton.addEventListener("click", (event) => {
    event.target.divElement;
    num1 = total;
    if(clicked){
        total = "0";
        divElement.innerText = total;
    }
})

const equalBtn = document.createElement('button');
document.body.appendChild(equalBtn);
equalBtn.className = "equal";
equalBtn.innerText = "="

equalBtn.addEventListener("click", (event) => {
    event.target.divElement;
    num2 = total;
    if(clicked){
        num2 = total;
        let numValue1 = parseInt(num1);
        let numValue2 = parseInt(num2);
        total = numValue1 + numValue2;
        divElement.innerText = total;
    }
})