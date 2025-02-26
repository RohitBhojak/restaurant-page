export default function loadHome() {
    const content = document.querySelector('#content');
    content.classList.remove(...content.classList);
    content.classList.add("home");
    content.innerHTML = "";

    const container = document.createElement('div');
    container.id = "home";
    const title = document.createElement('h1');
    title.textContent = "HALDII";

    const type = document.createElement('h5');
    type.textContent = "Restaurant + Cafe";

    container.appendChild(title);
    container.appendChild(type);
    content.appendChild(container);
}