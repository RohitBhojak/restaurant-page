import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";
import "./styles.css";

document.addEventListener('DOMContentLoaded', loadHome);

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutButton = document.querySelector('#about-button');

homeButton.addEventListener('click', loadHome);
menuButton.addEventListener('click', loadMenu);
aboutButton.addEventListener('click', loadAbout);
