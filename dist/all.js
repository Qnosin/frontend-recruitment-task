const btn=document.querySelector("button"),wrapper=document.querySelector(".wrapper"),popup=document.querySelector(".popup"),svgElem=document.querySelector("svg"),text=document.querySelector(".text");let clickCounter=0;btn.addEventListener("click",()=>{localStorage.getItem("clicker")&&(clickCounter=localStorage.getItem("clicker")),clickCounter++,localStorage.setItem("clicker",clickCounter),text.textContent=`You have clicked ${localStorage.getItem("clicker")} times to related button.`,popup.appendChild(text),popup.style.display="block",svgElem.addEventListener("click",()=>{popup.style.display="none"})});