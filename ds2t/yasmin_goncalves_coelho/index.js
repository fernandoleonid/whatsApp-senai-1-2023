'use strict'

import { contatos } from "./contatos.js"


const criarContato = (contato) => {
    const contato = document.createElement('div')
    contato.classList.add('contact')

    const foto = document.createElement('img')
    foto.classList.add('contact__picture')
    foto.src = `./images/${contato.image}`

    contato.append(foto)

    return contato
}

const carregarContatos = () => {
    const container = document.getElementById('container')
    const contatos = contatos.map(criarContato)

    container.replaceChild(contatos)
}

carregarContatos()