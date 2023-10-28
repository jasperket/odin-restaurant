import './reset.css';
import './style.css';
import homeHTML from './js-modules/home';
import menuHTML from './js-modules/menu';
import contactHTML from './js-modules/contact';

const content = document.querySelector("#content");
content.innerHTML = homeHTML;

const btnHome = document.querySelector("#home");
btnHome.addEventListener('click',()=>{
    content.innerHTML = homeHTML;
    btnHome.classList.add("selected");
    btnMenu.classList.remove("selected");
    btnContact.classList.remove("selected");
});

const btnMenu = document.querySelector("#menu");
btnMenu.addEventListener('click',()=>{
    content.innerHTML = menuHTML;
    btnHome.classList.remove("selected");
    btnMenu.classList.add("selected");
    btnContact.classList.remove("selected");
});

const btnContact = document.querySelector("#contact-us");
btnContact.addEventListener('click',()=>{
    content.innerHTML = contactHTML;
    btnHome.classList.remove("selected");
    btnMenu.classList.remove("selected");
    btnContact.classList.add("selected");
});