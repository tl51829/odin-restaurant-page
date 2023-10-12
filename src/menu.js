export default function() {
    const container = document.querySelector("#content");
    container.innerHTML = "";

    const para = document.createElement("p");
    para.textContent = "Menu!";

    container.appendChild(para);
};