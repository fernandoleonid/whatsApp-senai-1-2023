'use strict'

import { contatos } from "./contatos.js"

console.log(contatos)

const criaListaMensagem = (mensagem) => {

    const list = document.createElement('ul')
    list.classList.add('list-unstyled')

    const listElement = document.createElement('li')
    listElement.classList.add('media')

    const foto = document.createElement('img')
    foto.classList.add('profile-photo')
    foto.classList.add('rounded-circle')
    foto.classList.add('mb-2')
    foto.classList.add('mt-3')
    foto.classList.add('ml-2')
    foto.classList.add('mr-3')
    foto.src = `./img/${mensagem.image}`

    const guardaMediaBody = document.createElement('div')
    guardaMediaBody.classList.add('media-body')


    const nomeContato = document.createElement('h6')
    nomeContato.classList.add('text-secondary')
    nomeContato.classList.add('mb-1')
    nomeContato.classList.add('mt-3')
    nomeContato.textContent = mensagem.name




    const lastMessage = mensagem.messages[mensagem.messages.length - 1];
    const lastMessageContent = lastMessage.content;
    
    const lastMensagem = document.createElement('p')
    lastMensagem.classList.add('last-message')
    lastMensagem.classList.add('text-black-50')
    lastMensagem.classList.add('border-bottom')
    lastMensagem.classList.add('pb-3')
    lastMensagem.classList.add('mb-1')
    lastMensagem.textContent = `${lastMessageContent}`;
    

    list.append(listElement, foto, guardaMediaBody, nomeContato, lastMensagem)

    return list

}

const carregarProdutos = () => {
    const contacts = document.getElementById('contacts')
    const cards = contatos.map(criaListaMensagem)
    contacts.replaceChildren(...cards)

}
carregarProdutos()