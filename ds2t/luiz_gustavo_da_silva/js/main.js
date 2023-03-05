'use strict'

import { contatos } from "./contatos.js"

const carregarHeader = (indice) => {

    const headerChat = document.createElement('div')
    headerChat.classList.add('header__chat')

    const fotoContatoChat = document.createElement('img')
    fotoContatoChat.classList.add('foto__contato__chat')
    fotoContatoChat.src = `../${contatos[indice].image}`

    const contatoChat = document.createElement('div')
    contatoChat.classList.add('contato__chat')

    const nomeContatoChat = document.createElement('h1')
    nomeContatoChat.classList.add('nome__contato__chat')
    nomeContatoChat.textContent = contatos[indice].name

    const descricaoContatoChat = document.createElement('p')
    descricaoContatoChat.classList.add('descricao__contato__chat')
    descricaoContatoChat.textContent = contatos[indice].description

    headerChat.append(fotoContatoChat, contatoChat)
    contatoChat.append(nomeContatoChat, descricaoContatoChat)

    return headerChat

}

const carregarMain = (indice, indiceMensagem) => {
    const mainChat = document.createElement('div')
    mainChat.classList.add('main__chat')

    const containerContato = document.createElement('div')
    containerContato.classList.add('container__contato')

    const containerMe = document.createElement('div')
    containerMe.classList.add('container__me')

    const mensagensContato = document.createElement('div')
    mensagensContato.classList.add('mensagens__contato')

    const mensagensMe = document.createElement('div')
    mensagensMe.classList.add('mensagens__me')

    const chatMensagensContato = document.createElement('p')
    const horaChatContato = document.createElement('span')

    const chatMensagensMe = document.createElement('p')
    const horaChatMe = document.createElement('span')

    contatos[indice].messages.forEach((mensagem) => {
        let cont = 0
        while (cont < contatos[indice].messages.length) {

            if (mensagem.sender == 'me') {
                chatMensagensContato.classList.add('chat__mensagens__contato')
                chatMensagensContato.textContent = mensagem.content

                horaChatContato.classList.add('hora__chat__contato')
                horaChatContato.textContent = mensagem.time
                console.log(chatMensagensContato + horaChatContato)

            } else if (mensagem.sender == contatos[indice].name) {
                chatMensagensMe.classList.add('chat__mensagens__me')
                chatMensagensMe.textContent = mensagem.content

                horaChatMe.classList.add('hora__chat__me')
                horaChatMe.textContent = mensagem.time
                console.log(chatMensagensMe + horaChatMe)

            } else {
                console.log('ERRO: Mensagem não encontrada')
            }
            cont++
        }
    })

    mensagensMe.append(chatMensagensMe, horaChatMe)
    containerMe.append(mensagensMe)

    mensagensContato.append(chatMensagensContato, horaChatContato)
    containerContato.append(mensagensContato)

    mainChat.append(containerContato, containerMe)

    return arrayContatos

}

const carregarMessageBar = () => {
    const message__bar = document.getElementById('messageBar')
    message__bar.classList.remove('message__bar__none')
    message__bar.classList.add('message__bar')

    // const messageBar = document.createElement('div')
    // messageBar.classList.add('message__bar')

    // const emoji = document.createElement('i')
    // emoji.classList.add('fa-regular fa-face-laugh')

    // const clip = document.createElement('i')
    // clip.classList.add('fa-sharp fa-solid fa-paperclip')

    // const inputMensagem = document.createElement('input')
    // inputMensagem.placeholder = 'Mensagem'

    // const microfone = document.createElement(i)
    // microfone.classList.add('fa-solid fa-microphone')

    // messageBar.append(emoji, clip, inputMensagem, microfone)

    return messageBar

}

const listaDeContatos = (contato, indice) => {
    const chatContato = document.createElement('li')


    chatContato.classList.add('chat')
    chatContato.addEventListener('click', (event) => {
        const containerTeste = document.getElementById('conversa')
        containerTeste.append(carregarHeader(indice), carregarMain(indice), carregarMessageBar())
        console.log(contatos[indice].messages[1].content)
    })


    const fotoContato = document.createElement('img')
    fotoContato.classList.add('foto__contato')
    fotoContato.src = `../${contato.image}`

    const conversaContatos = document.createElement('div')
    conversaContatos.classList.add('conversa__contato')

    const nomeContato = document.createElement('h1')
    nomeContato.classList.add('nome__contato')
    nomeContato.textContent = contato.name

    // const lastMessage = contatos.messages[contatos.messages.length - 1]
    // const lastMessageContent = lastMessage.content
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

carregarContatos()
