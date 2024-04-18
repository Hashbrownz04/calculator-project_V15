const divElement = document.createElement('div');

document.body.appendChild(divElement);

document.body.setAttribute("style", "font-size: 50px");

let total = "0";
divElement.innerText = total;

const button = document.createElement('button');

document.body.appendChild(button);
button.innerText = "2";

button.addEventListener("click", (event) => {
    event.target.divElement;
    total+="2";
    divElement.innerText = total;
})