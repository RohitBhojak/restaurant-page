import "./about-style.css";

export default function loadAbout() {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const container = document.createElement('div');
    container.id = "about";
    const heading = document.createElement('h1');
    heading.textContent = "About";

    const description = document.createElement('p');
    description.textContent =
        "Haldi is a pure vegetarian restaurant, serving a variety of mouth-watering dishes to satisfy your taste buds. " +
        "We take pride in using only the freshest ingredients and traditional recipes to ensure that our food is not only delicious " +
        "but also healthy. Our menu includes a range of options from traditional Indian dishes to modern fusion cuisine. " +
        "We also have a variety of desserts to satisfy your sweet tooth. Whether you are looking for a quick bite or a leisurely meal, " +
        "Haldi is the perfect place to visit.";

    const address = document.createElement('p');
    address.textContent = "Address: 123 Main St, Anytown, India";

    const phone = document.createElement('p');
    phone.textContent = "Phone: (+91) 9999999999";

    const info = document.createElement('div');

    container.appendChild(heading);
    container.appendChild(description);
    info.appendChild(address);
    info.appendChild(phone);
    container.appendChild(info);
    content.appendChild(container);
};