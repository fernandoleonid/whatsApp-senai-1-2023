'use strict'

import { contatos } from "./contatos.js"

const carregarHeader = (indice) => {

    const headerChat = document.createElement('div')
    headerChat.classList.add('header__chat')

    const fotoContatoChat = document.createElement('img')
    fotoContatoChat.classList.add('foto__contato__chat')
    fotoContatoChat.src = `./${contatos[indice].image}`
    fotoContatoChat.alt = `foto do contato na conversa`

    const contatoChat = document.createElement('div')
    contatoChat.classList.add('contato__chat')

    const nomeContatoChat = document.createElement('h1')
    nomeContatoChat.classList.add('nome__contato__chat')
    nomeContatoChat.textContent = contatos[indice].name

    const descricaoContatoChat = document.createElement('p')
    descricaoContatoChat.classList.add('descricao__contato__chat')
    descricaoContatoChat.textContent = contatos[indice].description

    const arrow = document.getElementById('arrowHtml')

    headerChat.append(fotoContatoChat, contatoChat, arrow)
    contatoChat.append(nomeContatoChat, descricaoContatoChat)

    return headerChat

}

const carregarMain = (indice) => {

    const mainChat = document.createElement('div')
    mainChat.classList.add('main__chat')

    contatos[indice].messages.forEach((mensagem) => {
        const containerContato = document.createElement('div')
        containerContato.classList.add('container__contato')

        const containerMe = document.createElement('div')
        containerMe.classList.add('container__me')

        const chatMensagensContato = document.createElement('p')
        const horaChatContato = document.createElement('span')

        const mensagensContato = document.createElement('div')
        mensagensContato.classList.add('mensagens__contato')

        const mensagensMe = document.createElement('div')
        mensagensMe.classList.add('mensagens__me')


        if (mensagem.sender == 'me') {
            chatMensagensContato.classList.add('chat__mensagens__contato')
            chatMensagensContato.textContent = mensagem.content

            horaChatContato.classList.add('hora__chat__contato')
            horaChatContato.textContent = mensagem.time

            mensagensContato.append(chatMensagensContato, horaChatContato)

            containerContato.append(mensagensContato)

            console.log(mensagensContato);
            console.log(chatMensagensContato + horaChatContato)

        } else {
            const chatMensagensMe = document.createElement('p')
            const horaChatMe = document.createElement('span')

            chatMensagensMe.classList.add('chat__mensagens__me')
            chatMensagensMe.textContent = mensagem.content

            horaChatMe.classList.add('hora__chat__me')
            horaChatMe.textContent = mensagem.time

            mensagensMe.append(chatMensagensMe, horaChatMe)

            containerMe.append(mensagensMe)

            console.log(mensagensMe);
            console.log(chatMensagensMe + horaChatMe)

        }
        mainChat.append(containerContato, containerMe)
    })
    return mainChat
}

const carregarMessageBar = () => {
    const message__bar = document.getElementById('messageBar')
    message__bar.classList.remove('message__bar__none')
    message__bar.classList.add('message__bar')
    return messageBar
}

const listaDeContatos = (contato, indice) => {
    const chatContato = document.createElement('li')

    chatContato.classList.add('chat')
    chatContato.addEventListener('click', (event) => {
        const containerTeste = document.getElementById('conversa')
        containerTeste.replaceChildren(carregarHeader(indice), carregarMain(indice), carregarMessageBar())
        console.log(contatos[indice].messages[1].content)
    })

    const fotoContato = document.createElement('img')
    fotoContato.classList.add('foto__contato')
    fotoContato.src = `./${contato.image}`
    fotoContato.alt = `foto do contato`

    const conversaContatos = document.createElement('div')
    conversaContatos.classList.add('conversa__contato')

    const nomeContato = document.createElement('h1')
    nomeContato.classList.add('nome__contato')
    nomeContato.textContent = contato.name

    const ultimaMesssagem = document.createElement('p')
    ultimaMesssagem.classList.add('ultima__mensagem')
    ultimaMesssagem.textContent = contato.messages[contato.messages.length - 1].content

    chatContato.append(fotoContato, conversaContatos)
    conversaContatos.append(nomeContato, ultimaMesssagem)

    return chatContato
}

const carregarContatos = () => {
    const container = document.getElementById('contatos')
    const listaContt = contatos.map(listaDeContatos)
    container.replaceChildren(...listaContt)
}

const boxLeft = document.getElementById('box__left')
const boxMain = document.getElementById('main2')
const boxRight = document.getElementById('conversa')

const chatMobile = () => {
    boxRight.classList.toggle('conversa__active')
    boxLeft.classList.toggle('contato__container__active')
    boxMain.classList.toggle('main__responsive__active')
}

const listaDeContatosMobile = () => {
    boxRight.classList.replace('conversa__active', 'conversa')
    boxMain.classList.replace('main__responsive__active', 'main__responsive')
    boxLeft.classList.replace('contato__container__active', 'contato__container')
}

const boxContatos = document.getElementById('contatos')
boxContatos.addEventListener('click', (event) => {
    chatMobile()
})

const setas = document.getElementById('arrowHtml')
setas.addEventListener('click', (event) => {
    listaDeContatosMobile()
})


carregarContatos()
