const nameDisplay = document.getElementById('nameDisplay');
const input = document.getElementById('input');
const button = document.getElementById('button');
const nameTag = document.getElementById('nameTag');

button.addEventListener('click', ()=>{
    console.log('I am clicking the button');
nameDisplay.textContent = input.value;


});

// grab DOM elements

// set event listeners
