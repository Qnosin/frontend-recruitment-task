//Dom Elements
const btn = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');
console.log(btn);
let clickCounter = 0;
btn.addEventListener('click',()=>{
    //Creating PoPup
    console.log('hello');       
    const popUp = document.createElement('section');
    const h1 = document.createElement('h1');
    h1.textContent = 'Alert!';
    popUp.classList.add('popup');
    popUp.appendChild(h1);
    wrapper.appendChild(popUp);
})