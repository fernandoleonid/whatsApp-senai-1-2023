'use strict'

import { contatos } from "./recursos/contatos.js";

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
    description.textContent = contato.messages[0].content

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

            const conversation = document.getElementById('chat')
            conversation.classList.add('chat__user')

            const headerChat = document.createElement('div')
            headerChat.classList.add('chat__header')

            const user = document.createElement('div')
            user.classList.add('user')

            const img = document.createElement('img')
            img.classList.add('user__image')
            img.src = `./recursos/${contatos[contact.id].image}`

            const name = document.createElement('h5')
            name.classList.add('user__name__chat')
            name.textContent = contatos[contact.id].name

            const options = document.getElementById('options')
            options.classList.add('options')

            user.append(img, name)
            headerChat.append(user, options)
            conversation.replaceChildren(headerChat)
            
            const chat = document.getElementById('chat')
            
            const messages = document.createElement('div')
            messages.classList.add('messages')
            
            const sender = document.createElement('div')
            sender.classList.add('sender')

            const writting = document.createElement('div')
            writting.classList.add('writting__area')

            const icons__writting = document.createElement('div')
            icons__writting.classList.add('icons__writting__area')

            const spanSmiley = document.createElement('span')
            spanSmiley.innerHTML = '<i class="fas fa-smile"></i>'           

            const spanClip = document.createElement('a')
            spanClip.innerHTML = '<i class="fas fa-paperclip"></i>'

            const inputUser = document.createElement('input')
            inputUser.classList.add('user__writting')
            inputUser.placeholder = 'Digite uma mensagem'
            inputUser.value = ''
            inputUser.type = 'search'

            const spanMic = document.createElement('a')
            spanMic.innerHTML = '<i class="fa-solid fa-microphone"></i'

            const mensagens = contatos[contact.id].messages.map(function (msg) {
                const span = document.createElement('span')
                if(msg.sender == 'me'){
                    span.classList.add('me')
                    span.textContent = msg.content
                }else{
                    span.classList.add('other')
                    span.textContent = msg.content
                }   
                return span
            })

            
            icons__writting.append(spanSmiley, spanClip)
            sender.replaceChildren (...mensagens)
            writting.append(icons__writting, inputUser, spanMic)
            messages.appendChild(sender)
            chat.append(messages, writting)
        }
    })
}
loadingContact();