'use strict'

import {contatos} from '../recursos/contatos.js'


const criaCard = (contato) => {

    const container = document.createElement('div')
    container.classList.add('container__card')

    const image = document.createElement('div')
    image.classList.add('card__image')

    const text = document.createElement('div')
    text.classList.add('card__text')

    const card = document.createElement('div')
    card.classList.add('card')

    const foto = document.createElement('img')
    foto.classList.add('card__image')
    foto.classList.add('img__owner')
    foto.src = `./recursos/${contato.image}`

    const nome = document.createElement('h4')
    nome.textContent = contato.name

    const desc = document.createElement('p')
    desc.textContent = contato.description

    container.append(card)
    card.append(image,text)
    image.append(foto)
    text.append(nome,desc)

    return container
}

const carregarProdutos = () => {
    const container = document.getElementById('container__card')

    const cards = contatos.map (criaCard)

    container.replaceChildren(...cards)
}


carregarProdutos()
