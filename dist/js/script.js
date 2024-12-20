window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeElement = document.querySelector('.menu__close'),
          closeOverlay = document.querySelector('.menu__overlay')
    
    function menuToggle(selector, overlay, closeBtn) {
        selector.addEventListener('click', () => {
            menu.classList.toggle('active')
        })
    
        overlay.addEventListener('click', () => {
            menu.classList.remove('active')
        })
    
        closeBtn.addEventListener('click', () => {
            menu.classList.toggle('active')
        })
    
    }
    
    menuToggle(hamburger, closeOverlay, closeElement)


    const persents = document.querySelectorAll('.persent'),
          scales = document.querySelectorAll('.scale')
    
    persents.forEach((elem, i) => {
        scales[i].style.width = elem.innerHTML
    })
})


