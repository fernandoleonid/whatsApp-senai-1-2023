'use strict'

import { contatos } from "./contatos.js"

const criarContatos = (contatos) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const foto = document.createElement('img')
    foto.classList.add('card-icon')
    foto.src = `/recursos/images/${contatos.image}`

    const cardIdentificador = document.createElement('div')
    cardIdentificador.classList.add('card-identification')

    const cardTitle = document.createElement('p')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = contatos.name

    const cardMessage = document.createElement('p')
    cardMessage.classList.add('card-message')
    cardMessage.textContent = contatos.description

    cardIdentificador.append(cardTitle, cardMessage)

    // const time = document.createElement('span')
    // time.classList.add('time')
    // time.textContent = contatos.messages.time

    card.append(foto, cardIdentificador)
    return card
}



const carregarCards = () => {
    const container = document.getElementById('contatoPessoas')
    const cards = contatos.map(criarContatos)

    container.replaceChildren(...cards)
}

carregarCards()



// carregue e exiba contatos primeiro
// exibir conversa
// troca de tema
// criar logica para horario
// comece trabalhar na versão mobile seguindo essa mesma lógica
// vc consegue (vc precisa pq não tem saida :))
