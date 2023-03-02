'use strict'

import {contatos} from "./contatos.js"

const newChat = (contato) => {

const chatList = document.createElement('ul')
chatList.classList.add('chatlist')

const card = document.createElement('div')
card.classList.add('card')

const imgCard = document.createElement('div')
imgCard.classList.add('img__card')

const image = document.createElement('img')
image.classList.add('img__user')
image.src = `./${contato.image}`

const divCard = document.createElement('div')
divCard.classList.add('div__card')

const name = document.createElement('h4')
name.classList.add('name__card')
name.textContent = contato.name

const description = document.createElement('p')
description.classList.add('description')
description.textContent = contato.description



chatList.append(card)
card.append(imgCard, divCard)
imgCard.append(image)
divCard.append(name, description)

return chatList

}

const carregarChat = () => {
    const container = document.getElementById('card')
    const cards = contatos.map(newChat)

    container.replaceChildren(...cards)
}

carregarChat()