import "./menu-style.css";
export default function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const container = document.createElement('div');
    container.id = "menu";
    const heading = document.createElement('h1');
    heading.textContent = "Menu";

    container.appendChild(heading);

    // starter
    const starterItems = {
        "Samosa": "Rs. 100",
        "Manchurian": "Rs. 150",
        "Aloo Tikki": "Rs. 200",
    };

    createList(container, "Starter", starterItems);

    // main course
    const mainItems = {
        "Paneer Tikka": "Rs. 300",
        "Veg Biryani": "Rs. 250",
        "Chhole Bhature": "Rs. 100",
        "Dal Makhani": "Rs. 200",
    };

    createList(container, "Main Course", mainItems);

    // dessert
    const dessertItems = {
        "Rasgulla": "Rs. 100",
        "Kheer": "Rs. 150",
        "Gulab Jamun": "Rs. 200",
        "Gajar Ka Halwa": "Rs. 100",
    };

    createList(container, "Dessert", dessertItems);

    content.appendChild(container);
}

function createList(container, title, list) {
    const itemTitle = document.createElement('h3');
    itemTitle.textContent = title;
    const itemList = document.createElement('ul');

    for (let item in list) {
        const itemContainer = document.createElement('li');
        const name = document.createElement('p');
        const span = document.createElement('span');
        const price = document.createElement('p');

        name.textContent = item;
        price.textContent = list[item];

        itemContainer.appendChild(name);
        itemContainer.appendChild(span);
        itemContainer.appendChild(price);
        itemList.appendChild(itemContainer);
    }

    container.appendChild(itemTitle);
    container.appendChild(itemList);
    container.appendChild(document.createElement('hr'));
}