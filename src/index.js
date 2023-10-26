import './reset.css';
import './style.css';
import homeHTML from './js-modules/home';

// const content = document.querySelector("#content");
// content.innerHTML = homeHTML;

const btnHome = document.querySelector("#home");
btnHome.addEventListener('click',()=>{
    content.innerHTML = homeHTML;
    btnHome.classList.add("selected");
    btnMenu.classList.remove("selected");
    btnAbout.classList.remove("selected");
});

const btnMenu = document.querySelector("#menu");
btnMenu.addEventListener('click',()=>{
    content.innerHTML = homeHTML;
    btnHome.classList.remove("selected");
    btnMenu.classList.add("selected");
    btnAbout.classList.remove("selected");
});

const btnAbout = document.querySelector("#about");
btnAbout.addEventListener('click',()=>{
    content.innerHTML = homeHTML;
    btnHome.classList.remove("selected");
    btnMenu.classList.remove("selected");
    btnAbout.classList.add("selected");
});