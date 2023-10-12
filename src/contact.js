import cheese from './cheese-pizza.jpeg';

export default function() {
    const container = document.querySelector("#content");
    container.innerHTML = "";

    const contactUs = document.createElement('div');

    const picture = new Image();
    picture.src = cheese;

    const header = document.createElement("h1");
    header.textContent = "Contact Us!"

    const para = document.createElement("p");
    para.textContent = "Phone Number: +60182930192";

    const para2 = document.createElement("p");
    para2.textContent = "Email: hehehe@gmail.com";

    const para3 = document.createElement("p");
    para3.textContent = "Shop Address: Charlie's Chocolate Factory";

    contactUs.appendChild(picture);
    contactUs.appendChild(header);
    contactUs.appendChild(para);
    contactUs.appendChild(para2);
    contactUs.appendChild(para3);

    container.appendChild(contactUs);
};