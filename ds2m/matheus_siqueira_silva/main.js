'use strict'

import {contatos} from "./recursos/contatos.js";

let i = 0;

const createChat = (contato) => {
    const chat = document.createElement('div')
    chat.classList.add('user__talked')

    const img = document.createElement('img') 
    img.classList.add('user__image')
    img.src = `./recursos/${contato.image}`

    const text__user = document.createElement('div')
    text__user.classList.add('text__user')

    const name = document.createElement('h5')
    name.classList.add('user__name')
    name.textContent = contato.name
    
    const description = document.createElement('span')
    description.classList.add('user__conversation')
    description.textContent = contato.description
    
    text__user.append(name, description)
    chat.append(img, text__user)

    chat.id = i++;
    return chat
}

const loadingContact = () => {
    const users = document.getElementById('container__chat')
    const cards = contatos.map(createChat);
    users.replaceChildren(...cards)

    cards.forEach(contact => {
        contact.onclick = () => {

            console.log(contatos[contact.id].name)

            const conversation =  document.getElementById('chat')
            conversation.classList.add('chat__user')

            const headerChat = document.createElement('div')
            headerChat.classList.add('chat__header')

            const user = document.createElement('div')
            user.classList.add('user')

            const img = document.createElement('img') 
            img.classList.add('user__image')
            img.src = `./recursos/${contatos[contact.id].image}`
            
            const name = document.createElement('h5')
            name.classList.add('user__name')
            name.textContent = contatos[contact.id].name
    
            const options = document.getElementById('options')
            options.classList.add('options')

            user.append(img, name)
            headerChat.append(user, options)

            conversation.replaceChildren(headerChat)

        }
    })

}
loadingContact();