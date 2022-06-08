//Dom Elements
const btn = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');
const popup = document.querySelector('.popup');
const svgElem = document.querySelector('svg');
const text = document.querySelector('.text');
const backgroundEffect = document.querySelector('.bg__popup__black');
const body = document.querySelector('body');
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
    backgroundEffect.style.backgroundColor = `#121212`;
    backgroundEffect.style.opacity = `50%`;

    svgElem.addEventListener('click',()=>{
        popup.style.display = `none`;
        backgroundEffect.style.backgroundColor = `#E5E5E5`;
        backgroundEffect.style.opacity = `100%`;
    })
    backgroundEffect.addEventListener('click',(e)=>{
        if(e.target.value !== ''){
            popup.style.display = `none`;
            backgroundEffect.style.backgroundColor = `#E5E5E5`;
            backgroundEffect.style.opacity = `100%`;
        }
    })


    
})