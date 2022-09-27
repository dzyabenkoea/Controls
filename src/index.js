import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


const Dropdown = function () {

    function render() {
        const div = document.createElement('div')
        div.classList.add('dropdown')
        div.innerHTML = `
        <div class="dropdown-button">
            DropDown
            <i class="bi bi-caret-down-fill"></i>
        </div>
        <div class="dropdown-list">
            <a class="dropdown-list-item" href="#">Первая ссылка</a>
            <a class="dropdown-list-item" href="#">Вторая ссылка</a>
            <a class="dropdown-list-item" href="#">Первая ссылка</a>
            <a class="dropdown-list-item" href="#">Первая ссылка</a>
        </div>`

        const drop = div.querySelector('.dropdown-button')
        const list = div.querySelector('.dropdown-list')
        const icon = div.querySelector('.dropdown-button i')

        drop.addEventListener('click', (event) => {
            drop.classList.toggle('clicked')

            if (drop.classList.contains('clicked')) {
                icon.classList.add('bi-caret-up-fill')
                icon.classList.remove('bi-caret-down-fill')

            } else {
                icon.classList.remove('bi-caret-up-fill')
                icon.classList.add('bi-caret-down-fill')
            }
        })

        function removeFocusHandler(event) {
            if (event.path.find(el => el !== drop)) {
                drop.classList.remove('clicked')
            }
        }

        document.addEventListener('click', removeFocusHandler)

        return div
    }

    return {render}
}()

const drop = Object.create(Dropdown)

document.querySelector('.menu').append(Object.create(Dropdown).render())
document.querySelector('.menu').append(Object.create(Dropdown).render())
document.querySelector('.menu').append(Object.create(Dropdown).render())