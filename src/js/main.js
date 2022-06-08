//Dom Elements
const btn = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');
const popup = document.querySelector('.popup');
const svgElem = document.querySelector('svg');
const text = document.querySelector('.text');
let clickCounter = 0;
btn.addEventListener('click',()=>{
    //Creating text
    if(localStorage.getItem('clicker')){
        clickCounter = localStorage.getItem('clicker');
        clickCounter++;
        localStorage.setItem('clicker',clickCounter);
    }else{
        clickCounter++;
        localStorage.setItem('clicker',clickCounter);
    }
    text.textContent = `You have clicked ${localStorage.getItem('clicker')} times to related button.`;
    popup.appendChild(text);
    popup.style.display = `block`;

    svgElem.addEventListener('click',()=>{
        popup.style.display = `none`;
    })


    
})