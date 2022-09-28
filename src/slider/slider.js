import './slider.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

class Slider {

    slider = null
    leftButton = null
    rightButton = null
    sliderStrip = null
    imagePosition = 0

    images = [
        'https://images.unsplash.com/photo-1664261421791-c25c5760f577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1664276353817-c0a46d67be42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1664261934197-c71d92027f5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1664164236926-342c4ef27099?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'

    ]

    constructor() {
        this.slider = document.createElement('div')
        this.slider.classList.add('slider')
        this.slider.innerHTML = `
        <div class="slider-strip">
            ${this.renderImages()}
        </div>
        <div class="button-container">
            <button id="left-button" class="switcher-button">
                <i class="bi bi-caret-left"></i>
            </button>
            <button id="right-button" class="switcher-button">
                <i class="bi bi-caret-right"></i>
            </button>
        </div>`

        this.leftButton = this.slider.querySelector('#left-button')
        this.rightButton = this.slider.querySelector('#right-button')
        this.sliderStrip = this.slider.querySelector('.slider-strip')

        this.leftButton.addEventListener('click', this.moveLeft.bind(this))
        this.rightButton.addEventListener('click', this.moveRight.bind(this))
    }

    moveLeft() {
        if (this.imagePosition === 0) return
        this.imagePosition -= 1
        this.sliderStrip.style.transform = `translateX(calc(-${this.imagePosition} * 100%))`
    }

    moveRight() {
        if (this.imagePosition === this.images.length - 1) return
        this.imagePosition += 1
        this.sliderStrip.style.transform = `translateX(calc(-${this.imagePosition} * 100%))`
    }

    renderImages() {
        let html = ''
        this.images.forEach(image => {
            html += `
            <div class="slide">
                <img src="${image}" alt="">
            </div>\n`
        })
        return html
    }

    render() {
        return this.slider
    }
}

export {Slider}

