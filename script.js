
/*These here are the buttons that are meant to be used to operate the Calculator*/
const numPad = document.getElementById("numpad");
const operators = document.getElementById("operators");
const deleteNequal = document.getElementById("delete/equal");
const clear = document.getElementById("CLEAR");
const methods = document.getElementById("methods");
const assignments = document.getElementById("assignments");

/*This here is where you would see numbers, operators, equations, and everything.*/
const screen = document.getElementById("screen");
let total = "";
screen.innerText = total;

/*I've added every numPad button, each with its own IDname and number value.
From how I did it, I created a function where for each cycle an individualised button element will be created
and appended into a divElement nicknamed numPad.
It's a simple way to create all those elements without having to write the code for every button I create and add- that is one by one.*/
let clicked = true;

let buttonValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

for (let i = 0; i < buttonValues.length; i++) {
    const button = document.createElement("button");
    numPad.appendChild(button);
    button.id = "numbers";
    button.className = `${buttonValues[i]}`;
    button.innerText = `${buttonValues[i]}`;
}

let numButtons = document.querySelectorAll("button");

/*Have a screen variable recieve a user event everytime a button is pressed,
therefore adding a number to the "total" text.*/

console.log(numButtons);

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", (event) => {
        event.target.screen;
        total += buttonValues[i];
        screen.innerText = total;
    })
}

// miscValues(switching the signs & adding a decimal)
let miscValues = ["+/-", "."]

for (let i = 0; i < miscValues.length; i++) {
    const miscButton = document.createElement("button");
    numPad.appendChild(miscButton);
    miscButton.id = "misc";
    miscButton.className = `${miscValues[i]}`;
    miscButton.innerText = `${miscValues[i]}`;
}

// operators
let num1 = "";
let num2 = "";
let operator = "";

let opValues = ["+", "-", "*", "/", "%"]

for (let i = 0; i < opValues.length; i++) {
    const opButton = document.createElement("button");
    operators.appendChild(opButton);
    opButton.id = "operators";
    opButton.className = `${opValues[i]}`;
    opButton.innerText = `${opValues[i]}`;
}

let opButtons = document.querySelectorAll('#operators')

console.log(opButtons);

for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener("click", (event) => {
        event.target.screen;
        console.log(num1, total);
        num1 = total;
        total = "0";
        screen.innerText = total;
        console.log(num1, total);
        if(opButtons[i] === opButtons[0]){
            operator = opValues[0];
        }
        else if(opButtons[i] === opButtons[1]){
            operator = opValues[1];
        }
        else if(opButtons[i] === opButtons[2]){
            operator = opValues[2];
        }
        else if(opButtons[i] === opButtons[3]){
            operator = opValues[3];
        }
        else if(opButtons[i] === opButtons[4]){
            operator = opValues[4];
        }
    })
}

// equal (calculating the total sum)
let delNenter = ["DELETE", "="];

for (let i = 0; i < delNenter.length; i++) {
    const btnAutre = document.createElement("button");
    deleteNequal.appendChild(btnAutre);
    btnAutre.id = `delNenter`;
    btnAutre.className = `${delNenter[i]}`;
    btnAutre.innerText = `${delNenter[i]}`;
}

console.log(document.querySelectorAll("#delNenter"));

let btnAutres = document.querySelectorAll("#delNenter");

for(let i = 0; i < btnAutres.length; i++){
    btnAutres[i].addEventListener("click", (event) =>{
        event.target.screen;
        if(clicked && btnAutres[1]){
            num2 = total;
            let numValue1 = parseInt(num1);
            let numValue2 = parseInt(num2);
            console.log(num1, num2, total);
            if(operator == opValues[0]){
                total = numValue1 + numValue2;
                screen.innerText = total;
            }
            else if(operator == opValues[1]){
                total = numValue1 - numValue2;
                screen.innerText = total;
            }
            else if(operator == opValues[2]){
                total = numValue1 * numValue2;
                screen.innerText = total;
            }
            else if(operator == opValues[3]){
                total = numValue1 / numValue2;
                screen.innerText = total;
            }
            else if(operator == opValues[4]){
                total = numValue1 % numValue2;
                screen.innerText = total;
            }
        }
        if(clicked && btnAutres[0]){
            const delValue = total.split("");
            delValue.pop();
            total = delValue.join("");
            screen.innerText = total;
        }
    })
}
console.log(num1)

// clear (erasing the sum)
const clearBtn = document.createElement("button")
clear.appendChild(clearBtn)
clearBtn.className = "clear";
clearBtn.innerText = "A/C";

// methods (Math functions)
let methodValues = ["abs", "pow", "round", "ceil", "floor", "sqrt"];

for (let i = 0; i < methodValues.length; i++) {
    const methodBtn = document.createElement("button");
    methods.appendChild(methodBtn);
    methodBtn.id = "methods";
    methodBtn.className = `${methodValues[i]}`;
    methodBtn.innerText = `${methodValues[i]}`;
}

// assignment operators (calculating the sum in an instant manner)

let assignValues = ["+=", "-=", "*=", "/=", "%="];

for (let i = 0; i < assignValues.length; i++) {
    const assignBtn = document.createElement("button");
    assignments.appendChild(assignBtn);
    assignBtn.id = "assignments";
    assignBtn.className = `${assignValues[i]}`;
    assignBtn.innerText = `${assignValues[i]}`;
}