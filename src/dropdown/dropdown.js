import './dropdown.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './dropdown.css'

const Dropdown = function () {

    function render() {
        const dropDownMain = document.createElement('div')
        dropDownMain.classList.add('dropdown')
        dropDownMain.innerHTML = `
        <div class="dropdown-button">
            <div>Drop</div>
            <i class="bi bi-caret-down-fill"></i>
        </div>
        <div class="dropdown-list display-none">
            <a class="dropdown-list-item " href="#">Первая ссылка</a>
            <a class="dropdown-list-item" href="#">Вторая ссылка</a>
            <a class="dropdown-list-item" href="#">Первая ссылка</a>
            <a class="dropdown-list-item" href="#">Первая ссылка</a>
        </div>`

        const button = dropDownMain.querySelector('.dropdown-button')
        const list = dropDownMain.querySelector('.dropdown-list')
        const icon = dropDownMain.querySelector('.dropdown-button i')

        let extended = false

        list.addEventListener('transitionend', () => {
            if (!extended) {
                list.classList.add('display-none')
            }
        })

        function extend() {
            list.classList.remove('display-none')
            setTimeout(() => {
                button.classList.add('clicked')
                icon.classList.replace('bi-caret-down-fill', 'bi-caret-up-fill')
            }, 0)
            extended = true
        }

        function collapse() {
            button.classList.remove('clicked')
            icon.classList.replace('bi-caret-up-fill', 'bi-caret-down-fill')
            extended = false
        }

        button.addEventListener('click', (event) => {
            if (extended) collapse()
            else extend()
        })

        function removeFocusAfterClick(event) {

            if (event.path.find(el => el === dropDownMain) === undefined) {
                collapse()
            }
        }

        document.addEventListener('click', removeFocusAfterClick.bind(this))

        return dropDownMain
    }

    return {render}
}()

export {Dropdown}