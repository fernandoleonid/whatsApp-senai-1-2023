'use strict'

import { contatos } from "./contatos.js"

const criarContato = (contato) => {

    const contact = document.createElement('div')
    contact.classList.add("aside__main--contact")

    const pic = document.createElement('div')
    pic.classList.add("aside__main--contact-pic")

    const image = document.createElement('img')
    image.classList.add('image')
    image.src = `./img${contato.image}`

    const content = document.createElement('div')
    content.classList.add("aside__main--contact-content")

    const name = document.createElement('h4')
    name.textContent = contato.name

    const description = document.createElement('p')
    description.textContent = contato.description

    contact.append(pic, content)
    pic.append(image)
    content.append(name, description)

    return contact
}



const carregarContatos = () => {
    const container = document.getElementById('container')
    const contato = contatos.map(criarContato)

    container.replaceChildren(...contato)
}

carregarContatos()