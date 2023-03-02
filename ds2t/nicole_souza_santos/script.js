'use strict'

import { contatos } from "./contatos.js"
// console.log(contatos[1].messages)

const criarContatos = (contatos, indice) => {
    
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

    let cont = 0
    let timer = contatos.messages
    const time = document.createElement('span')
    

    while (cont < timer.length) {
        time.classList.add('time')
        
        time.textContent = contatos.messages[cont]['time']
        console.log(time)
        cont++
    }

    console.log(indice)
    card.onclick = () => (carregarMensagens(indice))
    card.append(foto, cardIdentificador, time)
    return card

}

const carregarCards = () => {
    const container = document.getElementById('contatoPessoas')
    const cards = contatos.map(criarContatos)

    container.replaceChildren(...cards)
    
}

const criarMensagens = (json) => {
    const senderMessage = json.messages
    

    for (let conat = 0; conat < senderMessage.length; conat++) {
        if (senderMessage[conat].sender == 'me') {


            const user = document.createElement('div')
            user.classList.add('me')
            

            const sender = document.createElement('p')
            sender.classList.add('sender')

            const content = document.createElement('p')
            content.classList.add('content')
            content.textContent = senderMessage[conat].content

            const timer = document.createElement('p')
            timer.classList.add('timer-timestamp')
            timer.textContent = senderMessage[conat].time
            
            user.append(sender, content)
            

            return user
        

        } else if (senderMessage[conat].sender != 'me') {

            const other = document.createElement('div')
            other.classList.add('other-user')
            
            const content = document.createElement('p')
            content.classList.add('content')
            content.textContent = senderMessage[conat].content

            other.append(content)
            
            return other
        }
    }
    
}

const mensagens = () =>{
    let conat = 0
    while (conat < contatos.length) {
        console.log(contatos[conat].messages)
        conat++
    }

}

const carregarMensagens = (indice) => {
    const plane = document.getElementById('welcome')
    const messagesChat = document.getElementById('messages')
    
    plane.style.display = 'none'

    console.log(contatos[indice].messages)

    const mensagens = contatos.map(criarMensagens)
    messagesChat.replaceChildren(...mensagens)

}

carregarCards()






// tarefas:
// imprimir todas as mensagens de acordo com a conversa
