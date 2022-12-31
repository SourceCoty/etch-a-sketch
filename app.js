const container = document.querySelector('#container');

const divOne = document.createElement('div'); 
divOne.setAttribute('id', 'divOne');
divOne.classList.add('box');
divOne.textContent = 'ONE';
container.appendChild(divOne); 

const divTwo = document.createElement('div'); 
divTwo.setAttribute('id', 'divTwo');
divTwo.classList.add('box');
divTwo.textContent = 'TWO';
container.appendChild(divTwo);

const divThree = document.createElement('div'); 
divThree.setAttribute('id', 'divThree');
divThree.classList.add('box');
divThree.textContent = 'THREE';
container.appendChild(divThree); 

const divFour = document.createElement('div'); 
divFour.setAttribute('id', 'divFour');
divFour.classList.add('box');
divFour.textContent = 'FOUR';
container.appendChild(divFour); 

const divFive = document.createElement('div'); 
divFive.setAttribute('id', 'divFive');
divFive.classList.add('box');
divFive.textContent = 'FIVE';
container.appendChild(divFive); 

const divSix = document.createElement('div'); 
divSix.setAttribute('id', 'divSix');
divSix.classList.add('box');
divSix.textContent = 'SIX';
container.appendChild(divSix);

const divSeven = document.createElement('div'); 
divSeven.setAttribute('id', 'divSeven');
divSeven.classList.add('box');
divSeven.textContent = 'SEVEN';
container.appendChild(divSeven); 

const divEight = document.createElement('div'); 
divEight.setAttribute('id', 'divEight');
divEight.classList.add('box');
divEight.textContent = 'EIGHT';
container.appendChild(divEight); 

const divNine = document.createElement('div'); 
divNine.setAttribute('id', 'divNine');
divNine.classList.add('box');
divNine.textContent = 'NINE';
container.appendChild(divNine); 

const divTen = document.createElement('div'); 
divTen.setAttribute('id', 'divTen');
divTen.classList.add('box');
divTen.textContent = 'TEN';
container.appendChild(divTen); 

const divEleven = document.createElement('div'); 
divEleven.setAttribute('id', 'divEleven');
divEleven.classList.add('box');
divEleven.textContent = 'ELEVEN';
container.appendChild(divEleven); 

const divTwelve = document.createElement('div'); 
divTwelve.setAttribute('id', 'divTwelve');
divTwelve.classList.add('box');
divTwelve.textContent = 'TWELVE';
container.appendChild(divTwelve); 

const divThirteen = document.createElement('div'); 
divThirteen.setAttribute('id', 'divThirteen');
divThirteen.classList.add('box');
divThirteen.textContent = 'THIRTEEN';
container.appendChild(divThirteen); 

const divFourteen = document.createElement('div'); 
divFourteen.setAttribute('id', 'divFourteen');
divFourteen.classList.add('box');
divFourteen.textContent = 'FOURTEEN';
container.appendChild(divFourteen); 

const divFifteen = document.createElement('div'); 
divFifteen.setAttribute('id', 'divFifteen');
divFifteen.classList.add('box');
divFifteen.textContent = 'FIFTEEN';
container.appendChild(divFifteen); 

const divSixteen = document.createElement('div'); 
divSixteen.setAttribute('id', 'divSixteen');
divSixteen.classList.add('box');
divSixteen.textContent = 'SIXTEEN';
container.appendChild(divSixteen); 

const boxes = document.querySelectorAll('.box');

boxes.forEach((div) => {
    div.addEventListener('mouseover', function(e) {
        e.target.style.background = 'black';
        e.target.style.color = 'white';
    }) 
})

console.log(boxes)