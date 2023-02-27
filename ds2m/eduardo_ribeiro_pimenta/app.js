'use strict'

import {contatos} from "./recursos/contatos"

const criarContainer = (contato) => {
    const container = document.createElement('div')
    container.classList.add('contact__container')

    const imageHolder = document.createElement('div')
    imageHolder.classList.add('nav__image_holder')

    const image = document.createElement('img')
    image.classList.add('nav__main_image')
    img.src = `./img/${contato.image}`
}