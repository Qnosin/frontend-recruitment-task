//Dom Elements
const buttons = document.querySelectorAll('button');
const wrapper = document.querySelector('.wrapper');
const popup = document.querySelector('.popup');
const svgElem = document.querySelector('svg');
const text = document.querySelector('.text');
const backgroundEffect = document.querySelector('.bg__popup__black');
const body = document.querySelector('body');
const btnClear = document.querySelector('.btn-clear');

let clickCounter = 0;
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        //saveWrapperId
        let wrapperId =  btn.parentElement.parentElement.getAttribute('data-id');
        buttons.forEach((btn) => btn.setAttribute('disabled',true));
        

       //LocalStorage Adding Clicker
        if(wrapperId !== null){
            if(localStorage.getItem(`clicker${wrapperId}`)){
                clickCounter = localStorage.getItem(`clicker${wrapperId}`);
                clickCounter++;
                localStorage.setItem(`clicker${wrapperId}`,clickCounter);
            }else{
                clickCounter++;
                localStorage.setItem(`clicker${wrapperId}`,clickCounter);
            }
        }
        //Text to render on a popup
        text.textContent = `You have clicked ${localStorage.getItem(`clicker${wrapperId}`)} times to related button.`;
        popup.appendChild(text);

        //Reset button
        if( localStorage.getItem(`clicker${wrapperId}`) >= 5){
            btnClear.style.display = 'block';
            btnClear.removeAttribute('disabled');
            btnClear.setAttribute('clicker',wrapperId);
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
            buttons.forEach((btn) => btn.removeAttribute('disabled'));
        })
        backgroundEffect.addEventListener('click',(e)=>{
            if(e.target.value !== ''){
                popup.style.display = `none`;
                backgroundEffect.style.backgroundColor = `#E5E5E5`;
                backgroundEffect.style.opacity = `100%`;
                buttons.forEach((btn) => btn.removeAttribute('disabled'));
            }
        })
      
    })

})

//Clicker Restart
btnClear.addEventListener('click',(e)=>{
    handleRestart();
})

const handleRestart = () => {
    btnClear.style.display = 'none';
    popup.style.display = `none`;
    backgroundEffect.style.backgroundColor = `#E5E5E5`;
    backgroundEffect.style.opacity = `100%`;
    buttons.forEach((btn) => btn.removeAttribute('disabled'));
    localStorage.setItem(`clicker${btnClear.getAttribute('clicker')}`, 0)
    text.textContent = `You have clicked ${localStorage.getItem(`clicker${btnClear.getAttribute('clicker')}`)} times to related button.`
}
