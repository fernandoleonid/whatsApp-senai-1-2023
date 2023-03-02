'use strict'

import {contatos} from "./contatos.js"

const criaContato = (contato) => {
    const messages_chat = document.createElement('ul')
    messages_chat.classList.add('chat_list')

    const chat = document.createElement('div')
    chat.classList.add('chat_active')

    const photo = document.createElement('img')
    photo.classList.add('img_contact')
    photo.src = `./${contato.image}`

    const details = document.createElement('div')
    details.classList.add('chat_details')

    const name = document.createElement('span')
    name.textContent = contato.name

    const message = document.createElement('span')
    message.classList.add('message_contact')
    message.textContent = contato.description

    messages_chat.append(chat)

    chat.append(photo, details, name)

    details.append(name, message)

    return messages_chat
}

const carregarContatos = () => {
    const chat_messages = document.getElementById('chat_messages')
    const contactsMessages = contatos.map(criaContato)

    chat_messages.replaceChildren(...contactsMessages)
}

const adicionarMensagem = (sender, content, time) => {
    const remetente = remetente.textContent(contato.sender)
    const conteudo = content.textContent(contato.content)
    const hora = content.textContent(contato.time)

}    

const handleClick = () => {
    const sender = prompt ('me')
    const content = prompt ('Hello Leonid')
    const time = prompt ('22:20')

    adicionarMensagem(sender, content, time)
}

addEventListener('click', handleClick)
carregarContatos()