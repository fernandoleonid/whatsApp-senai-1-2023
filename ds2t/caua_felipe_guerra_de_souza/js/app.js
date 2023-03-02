'use strict'

import {contatos} from './contatos.js'

const criaContato = (contato) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const photo = document.createElement('img')
    photo.classList.add('card__image')
    photo.src = `./img/${produto.image}`

    const title = document.createElement('h5')
    title.classList.add('card__title')
    title.textContent = produto.name

    const description = document.createElement('p')
    description.classList.add('card__description')
    description.textContent = produto.description
    

    const price = document.createElement('price')
    price.classList.add('card__price')
    price.textContent = produto.price

    card.append(photo, title, description, price)

    return card
    

}
const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criaCard)

    container.replaceChildren(...cards)

    



}

carregarProdutos()
