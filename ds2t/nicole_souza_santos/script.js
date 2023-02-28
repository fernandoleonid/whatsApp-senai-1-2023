'use strict'

import { contatos } from "./contatos.js"
console.log(contatos)


const criarContatos = (contatos) => {
    const card = document.createElement('a')
    card.classList.add('card')
    card.setAttribute('id', 'card')
    card.setAttribute('href', '#')
    card.addEventListener('click', function () {
        carregarMensagens()
    })

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
    // while (cont < tempo.length) {
    //     time.textContent = contatos.messages[cont]['timestamp']
    //     cont++
    // }

    card.append(foto, cardIdentificador, time)
    return card
}

const carregarCards = () => {
    const container = document.getElementById('contatoPessoas')
    const cards = contatos.map(criarContatos)

    container.replaceChildren(...cards)
}
carregarCards()

const card = document.getElementById('card')
const plane = document.getElementById('welcome')

const carregarMensagens = () => {
    plane.style.display = 'none'

    console.log('click')
}

// card.addEventListener('click', carregarMensagens)





// criar logica para horario
// exibir conversa
// troca de tema
// comece trabalhar na versão mobile seguindo essa mesma lógica
// vc consegue (vc precisa pq não tem saida :))
