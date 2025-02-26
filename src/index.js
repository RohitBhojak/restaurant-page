import loadHome from "./home";
import "./styles.css";
import "./home-style.css";

document.addEventListener('DOMContentLoaded', loadHome);

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#home');
const aboutButton = document.querySelector('#home');

homeButton.addEventListener('click', loadHome);
