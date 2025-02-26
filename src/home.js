export function loadHome() {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const container = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "HALDII";

    const type = document.createElement('h5');
    type.textContent = "Restaurant + Cafe";

    const tagLine = document.createElement('h3');
    tagLine.textContent = "A PURE VEG RESTAURANT";

    container.appendChild(title);
    container.appendChild(type);
    container.appendChild(tagLine);
    content.appendChild(container);
}