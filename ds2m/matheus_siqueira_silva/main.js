'use strict'

import {contatos} from "./recursos/contatos.js";


const createChat = (contato) => {


    const chat = document.createElement('div')
    chat.classList.add('user__talked')

    const img = document.createElement('img') 
    img.classList.add('user__image')
    img.src = `./recursos/${contato.image}`

    const text__user = document.createElement('div')
    text__user.classList.add('text__user')

    const nome = document.createElement('h5')
    nome.classList.add('user__name')
    nome.textContent = contato.name
    
    const description = document.createElement('span')
    description.classList.add('user__conversation')
    description.textContent = contato.description

    
    text__user.append(nome, description)
    chat.append(img, text__user)

    return chat
}

const loadingContact = () => {
   
    const users = document.getElementById('container__chat')
    const informations = contatos.map(createChat);
    users.replaceChildren(...informations)
}

loadingContact();