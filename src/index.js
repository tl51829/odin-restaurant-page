import Home from "./home.js";
import Menu from "./menu.js";
import Contact from "./contact.js";

const header = document.querySelector('header');
const list = document.createElement('ul');

const tabs = ["Home", "Menu", "Contact"];
for (let i = 0; i < 3; i++) {
    const item = document.createElement('li');
    item.textContent = tabs[i];
    list.appendChild(item);

    item.addEventListener("click", () => {
        tabs[i] === "Home" ? Home() :
        tabs[i] === "Menu" ? Menu() :
        Contact();
    });
}

header.appendChild(list);

Home();