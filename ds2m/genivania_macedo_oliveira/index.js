'use strict'

import{contatos} from "./recursos/contatos.js"

const criarCard = (contato) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `./${contato.image}`

    const name = document.createElement('h5')
    name.classList.add('card__name')
    name.textContent = contato.name 



    card.append(img, name)

    return card
}
const carregarContatos = () =>{
    const container = document.getElementById('container')
    const cards = contatos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarContatos( )