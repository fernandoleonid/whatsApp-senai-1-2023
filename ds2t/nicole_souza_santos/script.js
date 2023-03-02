'use strict'

import { contatos } from "./contatos.js"
console.log(contatos)

const criarContatos = (contatos) => {
    const card = document.createElement('a')
    card.classList.add('card')
    card.setAttribute('id', 'card')
    card.setAttribute('href', '#')

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
    console.log(cardMessage)

    const time = document.createElement('span')
    time.classList.add('time')
    let cont = 0
    let tempo = contatos.messages

    while (cont < tempo.length) {
        time.textContent = contatos.messages[cont]['time']
        cont++
    }

    card.addEventListener('click', function () {
        carregarMensagens()
    })

    card.append(foto, cardIdentificador, time)
    return card
}

const carregarCards = () => {
    const container = document.getElementById('contatoPessoas')
    const cards = contatos.map(criarContatos)

    container.replaceChildren(...cards)
    console.log(cards.length)
}

const criarMensagens = (contatos) => {
    const other = document.createElement('div')
    other.classList.add('other-user')

    const sender = document.createElement('p')
    sender.classList.add('sender')
    const content = document.createElement('p')
    content.classList.add('content')

    // sender.textContent = contatos.messages
    // isto serve para criar as mensagens enviadas

    let conat = 0
    while (conat < tempo.length) {

        content.textContent = contatos.messages[conat].content
        console.log(contatos.messages[conat].content)
        sender.textContent = contatos.messages[conat].sender
        conat++
    }

    other.append(sender, content, sender)
    console.log(messages)

}

const carregarMensagens = (contatos) => {
    const plane = document.getElementById('welcome')
    const messagesChat = document.getElementById('messages')

    plane.style.display = 'none'
    messagesChat.style.display = 'flex'

    console.log('click')

    const mensagens = contatos.map(criarMensagens)
    messagesChat.replaceChildren(...mensagens)

}

carregarCards()




// tarefas:
// saber como comparar chaves e passar array para map
// criar logica para horario
// exibir conversa
