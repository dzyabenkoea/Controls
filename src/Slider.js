import './slider.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

class Slider {
    constructor() {
    }

    images = []

    left() {

    }

    right() {

    }

    render() {
        const div = document.createElement('div')
        div.classList.add('slider')
        div.innerHTML = `
        <div class="button" id="left-selector">
            <i class="bi bi-arrow-left-circle"></i>
        </div>
        <div class="container">
             <div class="sliding-part">
                <img class="container-element" src="https://images.unsplash.com/photo-1664261421791-c25c5760f577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="">
                <img class="container-element" src="https://images.unsplash.com/photo-1664276353817-c0a46d67be42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
                <img class="container-element" src="https://images.unsplash.com/photo-1664257732531-f9498dd3de01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
                <img class="container-element" src="https://images.unsplash.com/photo-1664261934197-c71d92027f5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="">
            </div>
        </div>
        <div class="button" id="right-selector">
            <i class="bi bi-arrow-right-circle"></i>
        </div>`

        return div
    }
}

export {Slider}

