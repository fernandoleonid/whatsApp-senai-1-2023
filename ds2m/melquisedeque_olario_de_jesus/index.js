'use strict'

import { contatos } from "./contatos.js"

const criarCard = (contato) =>{
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `./img${contato.image}`

    const nome = document.createElement('h5')
    nome.classList.add('card__name')
    nome.textContent = contato.name

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = contato.description

    // const preco = document.createElement('span')
    // preco.classList.add('card__price')
    // preco.textContent = contato.price

    card.append(img, nome, descricao)

    return card

}

const carregarProdutos = () =>{
    const cointainer = document.getElementById('container')
    const cards = contatos.map(criarCard)

    cointainer.replaceChildren(...cards)
}

carregarProdutos()