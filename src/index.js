import './style.css'
import './index.css'
import {Dropdown} from "./Dropdown";
import {Slider} from "./Slider";

import 'bootstrap-icons/font/bootstrap-icons.css'

document.querySelector('.menu').append(Object.create(Dropdown).render())
document.querySelector('.menu').append(Object.create(Dropdown).render())


document.querySelector('.menu').after(new Slider().render())
