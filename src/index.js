import './index.css'
import {Dropdown} from "./dropdown/dropdown";
import {Slider} from "./slider/slider";
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Menu} from "./menu/menu";

document.querySelector('#app').append(new Slider().render())
document.querySelector('#app').before(Object.create(Menu).render())

document.querySelector('.menu-items').append(Object.create(Dropdown).render())
document.querySelector('.menu-items').append(Object.create(Dropdown).render())
document.querySelector('.menu-items').append(Object.create(Dropdown).render())
document.querySelector('.menu-items').append(Object.create(Dropdown).render())


