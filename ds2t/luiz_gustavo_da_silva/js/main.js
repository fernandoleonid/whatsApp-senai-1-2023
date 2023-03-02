'use strict'

import { contatos } from "../recursos/contatos.js"

const listaDeContatos = (contatos, indice) => {

    const chatContato = document.createElement('li')
    chatContato.classList.add('chat')

    chatContato.addEventListener('click', (event)=> {
        console.log(contatos[indice])
    })

    const fotoContato = document.createElement('img')
    fotoContato.classList.add('foto__contato')
    fotoContato.src = `../${contatos.image}`

    const conversaContatos = document.createElement('div')
    conversaContatos.classList.add('conversa__contato')

    const nomeContato = document.createElement('h1')
    nomeContato.classList.add('nome__contato')
    nomeContato.textContent = contatos.name

    // const lastMessage = contatos.messages[contatos.messages.length - 1]
    // const lastMessageContent = lastMessage.content
    const ultimaMesssagem = document.createElement('p')
    ultimaMesssagem.classList.add('ultima__mensagem')
    ultimaMesssagem.textContent = contatos.messages[contatos.messages.length - 1].content
    
    chatContato.append(fotoContato, conversaContatos)
    conversaContatos.append(nomeContato, ultimaMesssagem)

    return chatContato
}

const carregarContatos = () => {
    const container = document.getElementById('contatos')
    const listaContt = contatos.map(listaDeContatos)

    container.replaceChildren(...listaContt)
}

const conversa = (contatos) => {

    const headerChat = document.createElement('div')
    headerChat.classList.add('header__chat')

    const fotoContatoChat = document.createElement('img')
    fotoContatoChat.classList.add('foto__contato__chat')
    fotoContatoChat.src = `../${contatos.image}`

    const contatoChat = document.createElement('div')
    contatoChat.classList.add('contato__chat')

    const nomeContatoChat = document.createElement('h1')
    nomeContatoChat.classList.add('nome__contato__chat')
    nomeContatoChat.textContent = contatos.name

    const descricaoContatoChat = document.createElement('p')
    descricaoContatoChat.classList.add('descricao__contato__chat')
    descricaoContatoChat.textContent = contatos.description

    headerChat.append(fotoContatoChat, contatoChat)
    contatoChat.append(nomeContatoChat, descricaoContatoChat)



}

carregarContatos()