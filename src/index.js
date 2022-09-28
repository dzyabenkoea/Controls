import './index.css'
import {Dropdown} from "./dropdown/Dropdown";
import {Slider} from "./slider/Slider";

import 'bootstrap-icons/font/bootstrap-icons.css'

document.querySelector('.menu').append(Object.create(Dropdown).render())
document.querySelector('.menu').append(Object.create(Dropdown).render())


document.querySelector('.menu').after(new Slider().render())
