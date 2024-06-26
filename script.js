
/*These here are the buttons that are meant to be used to operate the Calculator*/
const numPad = document.getElementById("numpad");
const operators = document.getElementById("operators");
const deleteNequal = document.getElementById("deleteNequal");
const clear = document.getElementById("CLEAR");
const methods = document.getElementById("methods");
const assignments = document.getElementById("assignments");
const extras = document.getElementById("extras");

/*This here is where you would see numbers, operators, equations, and everything.*/
const screen = document.getElementById("screen");
let total = "";
screen.innerText = "0";

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

// miscButtons(inverting the signs & adding a decimal)
/* Now, I meant to create the other button elements in a way of how I've done them before
-- a block of code where I assign values to elements, and another where I add their functions --
But my teacher taught me about a function method called .forEach
where I can assign each value to an element and make an event-listener function of that element
in one sitting.
*/
let miscValues = ["+/-", "."]

miscValues.forEach(value => {
    const miscButton = document.createElement("button");
    numPad.appendChild(miscButton);
    miscButton.id = "misc";
    miscButton.className = value;
    miscButton.innerText = value;
    miscButton.addEventListener("click", event => {
        event.target.screen;
        if(value === "."){
            total += value;
            screen.innerText = total;
        }
        else if(value === "+/-"){
            if(total.includes("-")){
                total = total.slice(1, total.length);
                screen.innerText = total;
            }
            else if(!total.includes("-")){
                let negative = "-";
                total = negative.concat(total);
                screen.innerText = total;
            }
        }
    })
})

// operators(signs that make up the sum equation)
let num1 = "";
let num2 = "";
let operator = "";

let opValues = ["+", "-", "*", "/", "%"]

/*for (let i = 0; i < opValues.length; i++) {
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
}*/

/* After inputting the number of your choice, you click on an operator button so
that number will saved as the first number value and that you can input another number for later.*/
opValues.forEach(value => {
    const opButton = document.createElement("button");
    operators.appendChild(opButton);
    opButton.id = "operator";
    opButton.className = value;
    opButton.innerText = value;
    //When you click on an addButton, the "operator" variable will get the "+" value and have it saved.
    //This variable will be used later when we equal the sum.
    opButton.addEventListener("click", function () {
        num1 = total;
        total = "";
        operator = value;
        screen.innerText = "0";
    })
})

// methods (Math functions)
let methodValues = ["abs", "pow", "round", "ceil", "floor", "sqrt"];

let power = "";

methodValues.forEach(value => {
    const methodBtn = document.createElement("button");
    methods.appendChild(methodBtn);
    methodBtn.id = "method";
    methodBtn.className = value;
    methodBtn.innerText = value;
    methodBtn.addEventListener("click", event => {
        switch (value) {
            case "abs":
                let absValue0 = parseFloat(total);
                total = Math.abs(absValue0);
                screen.innerText = total;
                break;
            case "pow":
                power = "power";
                num1 = total;
                total = "";
                screen.innerText = '0';
                break;
            case "round":
                let roundValue0 = parseFloat(total);
                total = Math.round(roundValue0);
                screen.innerText = total;
                break;
            case "ceil":
                let ceilValue0 = parseFloat(total);
                total = Math.ceil(ceilValue0);
                screen.innerText = total;
                break;
            case "floor":
                let floorValue0 = parseFloat(total);
                total = Math.floor(floorValue0);
                screen.innerText = total;
                break;
            case "sqrt":
                let sqrtValue0 = parseFloat(total);
                total = Math.sqrt(sqrtValue0);
                screen.innerText = total;
                break;
        }
    })
})

// assignment operators (calculating the sum in an instant manner)
let assignValues = ["+=", "-=", "*=", "/=", "%="];

assignValues.forEach(value => {
    const assignBtn = document.createElement("button");
    assignments.appendChild(assignBtn);
    assignBtn.id = "assignment";
    assignBtn.className = value;
    assignBtn.innerText = value;
    assignBtn.addEventListener("click", (event) => {
        num1 = total;
        total = "";
        screen.innerText = "0";
        //Please take the 5 seconds you have to enter another number value.
        const timer = setInterval(myTotal, 4500);
        function myTotal() {
            let numValue1 = parseFloat(num1);
            let numTotal = parseFloat(total);
            switch(value){
                case "+=":
                    total = numValue1 += numTotal;
                    screen.innerText = total;
                    clearInterval(timer);
                    break;
                case "-=":
                    total = numValue1 -= numTotal;
                    screen.innerText = total;
                    clearInterval(timer);
                    break;
                case "*=":
                    total = numValue1 *= numTotal;
                    screen.innerText = total;
                    clearInterval(timer);
                    break;
                case "/=":
                    total = numValue1 /= numTotal;
                    screen.innerText = total;
                    clearInterval(timer);
                    break;
                case "%=":
                    total = numValue1 %= numTotal;
                    screen.innerText = total;
                    clearInterval(timer);
                    break;
                default:
                    break;
            }
        }
    })
})

let miscValues2 = ["rand", "++", "--"]

miscValues2.forEach(value => {
    const extraBtn = document.createElement("button");
    extras.appendChild(extraBtn);
    extraBtn.id = "extra";
    extraBtn.className = value;
    extraBtn.innerText = value;
    extraBtn.addEventListener("click", (event) => {
        event.target.screen;
        if(value === "rand"){
            let randNum = Math.round(Math.random() * 9);
            total += randNum;
            screen.innerText = total;
        }
        else if(value === "++"){
            total++;
            screen.innerText = total;
        }
        else if(value === "--"){
            total--;
            screen.innerText = total;
        }
    })
})

// equal (calculating the total sum)
let delNenter = ["DELETE", "="];

delNenter.forEach(value => {
    const btnAutre = document.createElement("button");
    deleteNequal.appendChild(btnAutre);
    btnAutre.id = `delNenter`;
    btnAutre.className = value;
    btnAutre.innerText = value;
    btnAutre.addEventListener("click", (event) => {
        event.target.screen;
        /*We have the first number value, now we have the second number value.
        Now we can make the sum!*/

        /*When we check on the operator variable with its assigned value,
        this will correspond to how we want to make the sum.
        Do we add, multiply, subtract, divide? We want to know what!*/
        if (value === "=") {
            num2 = total;
            let numValue1 = parseFloat(num1);
            let numValue2 = parseFloat(num2);
            console.log(num1, num2, total);
            switch (operator) {
                case "+":
                    total = numValue1 + numValue2;
                    break;
                case "-":
                    total = numValue1 - numValue2;
                    break;
                case "*":
                    total = numValue1 * numValue2;
                    break;
                case "/":
                    total = numValue1 / numValue2;
                    break;
                case "%":
                    total = numValue1 % numValue2;
                    break;
            }
            if (power === "power"){
                total = Math.pow(numValue1, numValue2);
            }
            screen.innerText = total;
        }
        else if (value === "DELETE") {
            total = total.slice(0, -1);
            screen.innerText = total;
        }
    })
});

console.log(document.querySelectorAll("#delNenter"));

// clear (erasing the sum)
const clearBtn = document.createElement("button")
clear.appendChild(clearBtn)
clearBtn.className = "clear";
clearBtn.innerText = "A/C";

//This will reset everything back to where it was.
clearBtn.addEventListener("click", (event) => {
    event.target.screen;
    num1 = "";
    num2 = "";
    total = "";
    power = "";
    if (clicked) {
        screen.innerText = "0";
    }
})
