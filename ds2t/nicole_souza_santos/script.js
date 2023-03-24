'use strict'

// import { contatos } from "./contatos.js"
import { contactWhat, user } from "./api-whatsapp/api.js"

// const contactRespon = document.getElementById('responsive')

let numero = '11966578996'

let contatos = await contactWhat(numero)
let userMe = await user(numero)

const criarContatos = (contatos, indice) => {

    const card = document.createElement('a')

    card.classList.add('card')
    card.setAttribute('id', 'card')
    card.setAttribute('href', '#chatMensagens')
    console.log(indice)
    card.onclick = () => carregarChat(indice)

    const foto = document.createElement('img')
    foto.classList.add('card-icon')
    foto.src = `./images/${contatos.image}`

    const cardIdentificador = document.createElement('div')
    cardIdentificador.classList.add('card-identification')

    const cardTitle = document.createElement('p')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = contatos.name

    const cardMessage = document.createElement('p')
    cardMessage.classList.add('card-message')
    cardMessage.textContent = contatos.description

    cardIdentificador.append(cardTitle, cardMessage)

    let cont = 0
    let timer = contatos.messages
    const time = document.createElement('span')

    while (cont < timer.length) {
        time.classList.add('time')

        time.textContent = contatos.messages[cont]['time']
        cont++
    }

    card.append(foto, cardIdentificador, time)

    return card


}

const carregarCards = () => {
    const container = document.getElementById('contatoPessoas')

    const cards = contatos.map(criarContatos)
    console.log(cards)

    container.replaceChildren(...cards)

}

const criarMensagens = (mensagens) => {

    if (mensagens.sender == 'me') {

        const user = document.createElement('div')
        user.classList.add('me')
        content.style.backgroundColor = userMe.color

        const sender = document.createElement('p')
        sender.classList.add('sender')

        const content = document.createElement('p')
        content.classList.add('content')
        content.textContent = mensagens.content

        const timer = document.createElement('p')
        timer.classList.add('timer-timestamp')
        timer.textContent = mensagens.time


        user.append(sender, content, timer)
        return user

    } else if (mensagens.sender != 'me') {

        const other = document.createElement('div')
        other.classList.add('other-user')

        const content = document.createElement('p')
        content.classList.add('content')
        content.textContent = mensagens.content

        const timer = document.createElement('p')
        timer.classList.add('timer-timestamp')
        timer.textContent = mensagens.time

        other.append(content, timer)
        return other
    }

}

const carregarChat = (indice) => {
    const plane = document.getElementById('welcome')
    const messagesChat = document.getElementById('messages')
    const cardsChat = contatos[indice].messages.map(criarMensagens)

    plane.style.display = 'none'
    messagesChat.style.display = 'flex'

    const header = document.createElement('div')
    header.setAttribute('id', 'headerContact')
    header.classList.add('header-contact')
    header.style.backgroundColor = userMe.color

    const iconHeader = document.createElement('img')
    iconHeader.classList.add('icon-header')
    iconHeader.src = `./images/${contatos[indice].image}`

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('header-description')

    const headerTitle = document.createElement('p')
    headerTitle.classList.add('card-title')
    headerTitle.textContent = contatos[indice].name

    const headerMessage = document.createElement('p')
    headerMessage.classList.add('card-message')
    headerMessage.textContent = contatos[indice].description

    const textInput = document.createElement('div')
    textInput.classList.add('textInput')

    const inputPurple = document.createElement('input')
    inputPurple.classList.add('mensagensTexto')
    textInput.style.backgroundColor = userMe.color

    const enviar = document.createElement('img')
    enviar.classList.add('enviar')
    enviar.src = `./img-pessoal/enviar.png`

    cardHeader.append(headerTitle, headerMessage)
    header.append(iconHeader, cardHeader)
    textInput.append(inputPurple, enviar)

    messagesChat.replaceChildren(header, ...cardsChat, textInput)

}

const getUsuario = () => {
    console.log(userMe)
    const avatar = document.getElementById('avatar')
    const pesquisa = document.getElementById('pesquisa')
    const cabecalho = document.getElementById('cabecalho')
    const now = document.getElementById('now')
    

    const avatarImg = document.createElement('img')
    avatarImg.classList.add('img-avatar')
    avatarImg.src = `./images/${userMe.image}`

    const avatarName = document.createElement('p')
    avatarName.classList.add('name-user')
    avatarName.textContent = userMe.name

    const avatarNumber = document.createElement('p')
    avatarNumber.classList.add('number-user')
    avatarNumber.textContent = userMe.number

    const divUser = document.createElement('div')
    divUser.classList.add('div-user')
    divUser.append(avatarName, avatarNumber)

    avatar.style.backgroundColor = userMe.color
    pesquisa.style.backgroundColor = userMe.color
    cabecalho.style.backgroundColor = userMe.color
    now.style.color = userMe.color
    

    avatar.append(avatarImg, divUser)
    console.log(avatar)
    return avatar

}

getUsuario()
carregarCards()

