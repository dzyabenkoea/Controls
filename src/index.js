import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Dropdown} from "./Dropdown";
import {Slider} from "./Slider";

document.querySelector('.menu').append(Object.create(Dropdown).render())
document.querySelector('.menu').append(Object.create(Dropdown).render())

document.querySelector('.menu').after(new Slider().render())