'use strict'

import { contatos } from "./contatos.js"

const criarContato = (contact) => {
    const contato = document.createElement('div')
    contato.classList.add('contact')

    const foto = document.createElement('img')
    foto.classList.add('contact__picture')
    foto.src = "./" + contact.image

    const textos = document.createElement('span')
    textos.classList.add('contact__text')

    const nome = document.createElement('h3')
    nome.classList.add('contact__name')
    nome.textContent = contact.name

    const descricao = document.createElement('p')
    descricao.classList.add('contact__description')
    descricao.textContent = contact.description

    textos.append(nome, descricao)

    contato.append(foto, textos)

    contato.addEventListener('click', () => {
        const chat = document.getElementById('chats')
        chat.replaceChild(carregarHeader(getIndex(contact, contatos)))
        console.log(contact)
    })

    return contato
}

const criarHeaderContato = (contact) => {
    const container = document.createElement('div')
    container.classList.add('chats__info')

    const info__contact = document.createElement('span')
    info__contact.classList.add('info__contact')

    const foto = document.createElement('img')
    foto.src = "./" +  contact.image

    const info__texts = document.createElement('span')
    info__texts.classList.add('info__texts')

    const nome = document.createElement('h3')
    nome.textContent = contact.name

    const descricao = document.createElement('p')
    descricao.textContent = contact.description


    container.append(info__contact)
    info__texts.append(nome, descricao)
    info__contact.append(foto, info__texts)


    return container

}

const carregarContatos = () => {
    const containerContatos = document.getElementById('contacts__container')
    const contacts = contatos.map(criarContato)

    
    containerContatos.replaceChildren(...contacts)
}

const carregarHeader = (indice) => {
    const containerChats = document.getElementById('chats')

    containerChats.replaceChildren(criarHeaderContato(contatos[indice]))
}

const getIndex = (contact, lista) => {
    return lista.indexOf(contact)
}

carregarContatos()

