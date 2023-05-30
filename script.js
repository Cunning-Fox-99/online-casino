const popup = document.getElementById('popup')
const popupButton = document.getElementById('popup-button')
const popupButtonClose = document.getElementById('popup-close')

const loadButton = document.getElementById('load-items')
const hiddenItems = document.querySelectorAll('[data-item-hidden]')

const copied = document.getElementById('copied')
const copiedButton = document.getElementById('copied-button')

hiddenItems.forEach((item) => {
    item.classList.add('hidden')
})

loadButton.addEventListener('click', () => {
    hiddenItems.forEach((item) => {
        item.classList.remove('hidden')
    })
    loadButton.classList.add('hidden')
})

popupButton.addEventListener('click', (e) => {
    if(!e.target.closest('#popup')) {
        popup.classList.toggle('open')
        copied.classList.remove('show')
    }
})

popupButtonClose.addEventListener('click', () => {
    popup.classList.remove('open')
})

copiedButton.addEventListener('click', () => {
    copied.classList.add('show')
})
