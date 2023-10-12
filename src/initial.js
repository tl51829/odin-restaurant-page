export default function () {
    const headline = document.createElement("h1");
    const description = document.createElement("p");

    const container = document.querySelector("#content");

    headline.textContent = "Welcome to Papa's Pizzeria";
    description.textContent = "Papa's Pizzeria was founded in 1869 by our great grandpapa Paparachi. Back in the days, Paparachi's cheese pizza was a hit and due to continuous innovation of his descendents, Paparachi's cheese pizza continue to amaze locals and foreigners alike. Don't believe us? Come and try Paparachi's homemade pizza!";

    container.appendChild(headline);
    container.appendChild(description);
};