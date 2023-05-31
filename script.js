const popupButtons = document.querySelectorAll('[data-popup-button]')

const loadButton = document.getElementById('load-items')
const hiddenItems = document.querySelectorAll('[data-item-hidden]')


hiddenItems.forEach((item) => {
    item.classList.add('hidden')
})

loadButton.addEventListener('click', () => {
    hiddenItems.forEach((item) => {
        item.classList.remove('hidden')
    })
    loadButton.classList.add('hidden')
})


popupButtons.forEach((item, index) => {

    let popup = `<div class="popup" data-popup=${index + 1} >
                    <div class="popup__wrapper" data-copied-button>
                        <div data-copied class="popup__copied">
                            <div class="popup__copied-icon"></div>
                            <div class="popup__copied-text">Code copied to clipboard.</div>
                        </div>
                        <div class="popup__close" data-popup-close></div>
                       

                        <div class="popup__title">20 Free Spins at 21 Dukes Casino</div>

                        <div class="popup__promo">WELCOME</div>

                        <div class="popup__columns popup__columns--1">

                            <div class="popup__column popup__column--1">
                                Games allowed:
                            </div>
                            <div class="popup__column popup__column--2">
                                Slots, Keno, Scratch, Cards, Bingo
                            </div>
                            
                        </div>

                        <div class="popup__columns popup__columns--2">

                            <div class="popup__column popup__column--1">
                                Max cash out:
                            </div>
                            <div class="popup__column popup__column--2">
                                $100
                            </div>

                        </div>

                        <div class="popup__columns">

                            <div class="popup__column popup__column--1">
                                Min deposit:
                            </div>
                            <div class="popup__column popup__column--2 green">
                                FREE
                            </div>

                        </div>
                    </div>
                </div>`

    item.insertAdjacentHTML('beforeend', popup)
})


let popups = document.querySelectorAll('[data-popup]')

popups.forEach((item, index) => {

    popupButtons.forEach((button, index2) => {
        button.addEventListener('click', (e) => {
            if (index === index2 && !e.target.closest('[data-popup-close]')) {
                if (!e.target.closest('.popup')) {
                    item.classList.toggle('open')
                }

            } else {
                item.classList.remove('open')
                copied.classList.remove('show')
            }

        })
    })

    const popupButtonClose = item.querySelector('[data-popup-close]')
    const copiedButton = item.querySelector('[data-copied-button]')
    const copied = item.querySelector('[data-copied]')


    popupButtonClose.addEventListener('click', () => {
        item.classList.remove('open')
        copied.classList.remove('show')
    })


    copiedButton.addEventListener('click', () => {
        copied.classList.add('show')
    })
})

document.addEventListener('click', (e) => {
    if(!e.target.closest('.popup') && !e.target.closest('.list__item-info')) {
        popups.forEach((item) => {
            item.classList.remove('open')
        })
    }
})