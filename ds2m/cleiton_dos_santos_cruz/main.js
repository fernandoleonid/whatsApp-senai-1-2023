'use strict'

import { contatos } from "./contatos.js"

const criarContato = (contato) => {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const img = document.createElement('img')
    img.classList.add('contact__image')
    img.src = `./${contato.image}`

    const containerContact = document.createElement('div')
    containerContact.classList.add('contact__container')

    const name = document.createElement('h3')
    name.classList.add('contact__name')
    name.textContent = contato.name

    const description = document.createElement('div')
    description.classList.add('contact__descripiton')
    description.textContent = contato.description

    containerContact.append(name, description)
    contact.append(img, containerContact)
    return contact
}

const carregarContatos = () => {
    const container = document.getElementById('container')
    const contacts = contatos.map(criarContato)

    container.replaceChildren(...contacts)
}

carregarContatos()