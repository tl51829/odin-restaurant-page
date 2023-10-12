import cheese from './cheese-pizza.jpeg';
import pepperoni from './pizza.jpeg';
import hawaiian from './hawaiian-pizza.jpeg';

export default function() {
    const container = document.querySelector("#content");
    container.innerHTML = "";
    
    class Pizza {
        constructor(name, image, price) {
            this.name = name;
            this.image = image;
            this.price = price;
        }
    }

    const cheesePizza = new Pizza("Cheese", cheese, 10.90);
    const pepperoniPizza =  new Pizza("Pepperoni", pepperoni, 12.60);
    const hawaiianPizza = new Pizza("Hawaiian", hawaiian, 11.80);

    const pizzas = [cheesePizza, pepperoniPizza, hawaiianPizza];

    for (let i = 0; i < 3; i++) {
        const item = document.createElement('div');

        const image = new Image();
        image.src = pizzas[i].image;

        const header = document.createElement('h2');
        header.textContent = pizzas[i].name + " Pizza";

        const price = document.createElement('p');
        price.textContent = "$" + pizzas[i].price;

        item.appendChild(image);
        item.appendChild(header);
        item.appendChild(price);

        container.appendChild(item);
    }
};