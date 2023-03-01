'use strict'

import {contatos} from "./contatos.js"

const criaContato = (contato) => {
    const active = document.createElement('div')
    active.classList.add('active')

    const foto = document.createElement('img')
    foto.classList.add('profile')
    foto.src = `./recursos/images/${contato.image}`

    const nome = document.createElement('h4')
    nome.classList.add('listHead')
    nome.textContent = contato.name

    contato.append(foto, nome)
}

const carregarContatos = () => {
    const chatList = document.getElementById('chatList')
    const contacts = contatos.map(criaContato)

    chatList.replaceChildren(...contacts)
}

carregarContatos()