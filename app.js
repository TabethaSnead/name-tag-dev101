const nameDisplay = document.getElementById('nameDisplay');
const input = document.getElementById('input');
const button = document.getElementById('button');


const howdy = document.getElementById('howdy');
const helloChange = document.getElementById('helloChange');
const helloInput = document.getElementById('helloInput');


const pronounInput = document.getElementById('pronounInput');
const pronounButton = document.getElementById('pronounButton');
const pronounAnswer = document.getElementById('pronounsAnswer');

button.addEventListener('click', ()=>{
   // console.log('I am clicking the button');
    nameDisplay.textContent = input.value;


});

helloChange.addEventListener('click', ()=>{
    howdy.textContent = helloInput.value;
});

pronounButton.addEventListener('click', ()=>{
    pronounAnswer.textContent = pronounInput.value;
});

// grab DOM elements

// set event listeners
