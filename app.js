const header = document.getElementById('head'); 

const buttonSet = document.createElement('button');
buttonSet.id = 'btn';
buttonSet.textContent = "Grid Size"
header.appendChild(buttonSet);

const buttonReset = document.createElement('button'); 
buttonReset.id = 'btn'; 
buttonReset.textContent = "Reset"; 
header.appendChild(buttonReset); 


const container = document.querySelector('#container');

buttonSet.addEventListener('click', () => {

    let value = prompt("enter a number between 1 and 100 to set grid size");
    let width = (600 / value) + 'px';
    let height = (600 / value) + 'px';
    let size = value * value; 
    console.log(width);

    if (value > 100) {
        alert("Please choose a number less than 100")
    } else {
    for(let i=1; i <= size; i++){
        let newDiv = document.createElement('div');
        newDiv.id = 'r'+i;
        newDiv.className = 'box';
        newDiv.style.width = width;
        newDiv.style.height = height;
        container.appendChild(newDiv);
     }}

    const boxes = document.querySelectorAll('.box');

    boxes.forEach((div) => {
    div.addEventListener('mouseover', function(e) {
        e.target.style.background = 'black';
        }) 
    })
})

buttonReset.addEventListener('click', () => {
    let element = document.getElementById('container'); 
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
})



