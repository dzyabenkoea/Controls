import './style.css'
import {Dropdown} from "./Dropdown";
import {Slider} from "./Slider";

document.querySelector('.menu').append(Object.create(Dropdown).render())
document.querySelector('.menu').append(Object.create(Dropdown).render())

document.querySelector('.slider-container').append(new Slider().render())