import './index.css'
import {Dropdown} from "./dropdown/dropdown";
import {Slider} from "./slider/slider";

import 'bootstrap-icons/font/bootstrap-icons.css'
import {Menu} from "./menu/menu";

document.querySelector('.menu').append(Object.create(Dropdown).render())
document.querySelector('.menu').append(Object.create(Dropdown).render())


document.querySelector('.menu').after(new Slider().render())
