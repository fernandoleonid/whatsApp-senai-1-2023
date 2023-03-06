'use strict'

import { contatos } from "./contatos.js"

const criarCards = (contato, indice) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.onclick = () => carregarConversas(indice)

    const contact = document.createElement('div')
    contact.classList.add('contact')
    contact.id = 'contact'

    const img = document.createElement('img')
    img.classList.add('img__contact')
    img.src = `./img/${contato.image}`

    const name = document.createElement('h5')
    name.classList.add('name__contact')
    name.textContent = contato.name

    const description = document.createElement('p')
    description.classList.add('description__contact')
    description.textContent = contato.description

    card.append(img, contact)
    contact.append(name, description)

    return card

}

const carregarContatos = () => {
    const container = document.getElementById('container__card')
    const cards = contatos.map(criarCards)

    // ['a', 'b', 'c']
    // 1 - elemento
    // 2 - indice
    // 3 - array

    container.replaceChildren(...cards)
}

carregarContatos()

const getConversas = (mensagem) => {

    const DivMessageSent = document.createElement('div')

    let messageSent = document.createElement('span')

    if (mensagem.sender == "me") {
        DivMessageSent.classList.add('message__sent')
        messageSent.classList.add('message__sent_span')
        messageSent.textContent = mensagem.content
    } else {
        DivMessageSent.classList.add('message__received')
        messageSent.classList.add('message__received_span')
        messageSent.textContent = mensagem.content
    }

    DivMessageSent.append(messageSent)

    return DivMessageSent
    // })

}

const carregarConversas = (indice) => {

    const messageContact = document.getElementById('message__contact')

    const message = contatos[indice].messages.map(getConversas)

    messageContact.replaceChildren(...message)
}







// const img = document.createElement('img')
//     img.classList.add('img__contact')
//     img.src = `./img/${indice.image}`




