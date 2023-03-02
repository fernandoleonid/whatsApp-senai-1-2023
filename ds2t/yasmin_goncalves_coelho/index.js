'use strict'

import { contatos } from "./contatos.js"

const criarContato = (contact) => {
    const contato = document.createElement('div')
    contato.classList.add('contact')

    const foto = document.createElement('img')
    foto.classList.add('contact__picture')
    foto.src = contact.image

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

    return contato
}

const carregarContatos = () => {
    const container = document.getElementById('contacts__container')
    const contacts = contatos.map(criarContato)

    container.replaceChildren(...contacts)
}

carregarContatos()