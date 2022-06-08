//Dom Elements
const buttons = document.querySelectorAll('button');
const wrapper = document.querySelector('.wrapper');
const popup = document.querySelector('.popup');
const svgElem = document.querySelector('svg');
const text = document.querySelector('.text');
const backgroundEffect = document.querySelector('.bg__popup__black');
const body = document.querySelector('body');
const btnClear = document.createElement('button');
let clickCounter = 0;
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let wrapperId =  btn.parentElement.parentElement.getAttribute('data-id');

        //LocalStorage Adding Clicker
        if(localStorage.getItem(`clicker${wrapperId}`)){
            clickCounter = localStorage.getItem(`clicker${wrapperId}`);
            clickCounter++;
            localStorage.setItem(`clicker${wrapperId}`,clickCounter);
        }else{
            clickCounter++;
            localStorage.setItem(`clicker${wrapperId}`,clickCounter);
        }

        //Text to render on a popup
        text.textContent = `You have clicked ${localStorage.getItem(`clicker${wrapperId}`)} times to related button.`;
        popup.appendChild(text);

        //Reset button
        if(localStorage.getItem(`clicker${wrapperId}`) >= 5){
            btnClear.textContent = 'Clear click';
            btnClear.classList.add('btn-clear')
            popup.appendChild(btnClear);
        }

        //display popup
        popup.style.display = `block`;

        //Blur Effect
        backgroundEffect.style.backgroundColor = `#121212`;
        backgroundEffect.style.opacity = `50%`;

        //Exit popup listener
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

})
