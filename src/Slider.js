
import './slider.css'

class Slider{
    constructor() {
    }

    images = []

    left(){

    }

    right(){

    }

    render(){
        const div = document.createElement('div')
        div.classList.add('slider')

        div.innerHTML = `
        <div class="container">
            <img src="./images/ahmed-f0S62Iduanw-unsplash.jpg" alt="">
            <img src="./images/julia-verea-eoi4sNjjAXU-unsplash.jpg" alt="">
            <img src="./images/martin-bennie-uTEjRNAkGUE-unsplash.jpg" alt="">
            <img src="./images/taisiia-shestopal-wvfvQ4Uxvu0-unsplash.jpg" alt="">
        </div>`

        div.textContent = 'Я родился'
        return div
    }
}

export {Slider}

