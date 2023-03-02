'use strict'

import {contatos} from "./resources/api/contatos.js"


const buildHome = function(){
    const contactContainer = document.getElementById('contact')
    const contacts = contatos.map(buildContact)
    contactContainer.append(...contacts)
}

const buildContact = (contact) => {
    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact')

    const info = document.createElement('div')
    info.classList.add('contact__info')

    const name = document.createElement('h2')
    name.classList.add('contact__name')
    name.textContent = contact.name

    const image = document.createElement('img')
    image.classList.add('contact__photo')
    image.src = `./resources/api/${contact.image}`

    const description = document.createElement('p')
    description.classList.add('contact__description')
    description.textContent = contact.description

    const button = document.createElement('button')
    button.classList.add('contact__button')

    const vetor = document.createElement('img')
    vetor.src = `./resources/imgs/vetor.png`

    const text = document.createElement('p')
    text.textContent = 'Ver'

    // const messages = document.createElement('p')
    // price.classList.add('card__price')
    // price.textContent = contato.price

    info.append(
        name,
        description
    )
    button.append(
        vetor,
        text
    )
    contactDiv.append(
        image,
        info,
        button
    )

    return contactDiv

}
buildHome()