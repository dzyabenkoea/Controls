import './menu.css'

const Menu = (function () {

    let menu = document.createElement('div')
    menu.classList.add('menubar')
    menu.innerHTML = `
        <div class="menu-items-container">
            <div class="logo"><h2>Логотип</h2></div>
            <div class="menu-items">
                <div class="div menu-item">Пункт 1</div>
                <div class="div menu-item">Пункт 2</div>
                <div class="div menu-item">Пункт 3</div>
            </div>
            <div class="menu-burger menu-item" style="color: white">
                menu
            </div>
        </div>`

    const itemsContainer = menu.querySelector('.menu-items-container')
    const menuItems = menu.querySelector('.menu-items')
    const menuBurger = menu.querySelector('.menu-burger')

    function showMenu(event) {
        menuItems.classList.toggle('expand')
        if (menuItems.classList.contains('expand'))
            menuItems.focus()
        else
            menuBurger.focus()
    }

    function menuFocusLost(event){
        menuItems.classList.remove('expand')
        menuBurger.focus()
    }

    function menuitemClicked(event) {
        menuItems.classList.remove('expand')
    }

    menuBurger.addEventListener('click', showMenu.bind(this))
    menuItems.addEventListener('click', menuitemClicked.bind(this))
    menuItems.addEventListener('focusout', menuFocusLost.bind(this))

    function render() {
        return menu
    }

    return {render}
})()

export {Menu}