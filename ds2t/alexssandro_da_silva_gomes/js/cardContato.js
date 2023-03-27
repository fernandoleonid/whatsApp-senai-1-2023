'use strict'

import { contatos } from "./contatos.js"

const btnReturn = document.querySelector('.section-chat-box__arrow-left')

btnReturn.addEventListener('click', () => {
    let aside = document.querySelector('.aside')
    let telaInicial = document.querySelector('.section-tela-inicial')
    let telaCaixaMensagem = document.querySelector('.section-chat-box')

    if(telaCaixaMensagem.style.display = 'grid') {
        telaCaixaMensagem.style.display = 'none'
        telaInicial.style.display = 'grid'
        aside.style.display = 'grid'
    }
})

const criarContato = (contato, indice) => {

    const card = document.createElement('div')
    card.classList.add("aside__main")

    const contact = document.createElement('div')
    contact.classList.add("aside__main--contact")

    contact.addEventListener('click', () => {
        let container_header = document.getElementById('section-chat-box--user')
        let container_main = document.getElementById('section-chat-box__main')
        let telaInicial = document.querySelector('.section-tela-inicial')
        let telaCaixaMensagem = document.querySelector('.section-chat-box')
  
        container_header.replaceChildren(criarChatHeader(indice))
        container_main.replaceChildren(criarConversa(indice))

        if (telaInicial.style.display = 'grid') {
            telaInicial.style.display = 'none'
            telaCaixaMensagem.style.display = 'grid'
        }

    })

    const pic = document.createElement('div')
    pic.classList.add("aside__main--contact-pic")

    const image = document.createElement('img')
    image.classList.add('image')
    image.src = `./${contato.image}`

    const content = document.createElement('div')
    content.classList.add("aside__main--contact-content")

    const name = document.createElement('h4')
    name.textContent = contato.name

    const description = document.createElement('p')
    description.textContent = contato.description

    card.append(contact)
    contact.append(pic, content)
    pic.append(image)
    content.append(name, description)

    return contact
}

const criarChatHeader = (indice) => {
    const contact_header = document.createElement('div')
    contact_header.classList.add('section-chat-box--user')

    const contact_box_pic = document.createElement('div')
    contact_box_pic.classList.add('section-chat-box--user--pic')

    const image = document.createElement('img')
    image.src = `./${contatos[indice].image}`

    const contact_name = document.createElement('div')
    contact_name.classList.add('section-chat-box--user--name')

    const text = document.createElement('p')
    text.textContent = contatos[indice].name

    contact_header.append(contact_box_pic, contact_name)
    contact_box_pic.append(image)
    contact_name.append(text)

    return contact_header

}

const criarConversa = (indice) => {
    const chat_box = document.createElement('main')
    chat_box.classList.add('section-chat-box__main')

    // const chat_conversa = document.createElement('div')
    // chat_conversa.classList.add('chat-box-conversa')

    contatos[indice].messages.forEach((mensagem) => {
        const meuBalao = document.createElement('div')
        meuBalao.classList.add('balao-conversa-me')

        const seuBalao = document.createElement('div')
        seuBalao.classList.add('balao-conversa-contato')

        const meuBalao_conversa = document.createElement('div')
        meuBalao_conversa.classList.add('balao-conversa__conversa-me')

        const seuBalao_conversa = document.createElement('div')
        seuBalao_conversa.classList.add('balao-conversa__conversa-contato')

        if (mensagem.sender == "me") {
            const minhaMensagem = document.createElement('p')
            minhaMensagem.classList.add('minhaMensagem')
            minhaMensagem.textContent = mensagem.content

            // chat_box.append(chat_conversa)
            chat_box.append(meuBalao)
            meuBalao.append(meuBalao_conversa)
            meuBalao_conversa.append(minhaMensagem)
        } else if (mensagem.sender == contatos[indice].name) {
            const suaMensagem = document.createElement('p')
            suaMensagem.classList.add('suaMensagem')
            suaMensagem.textContent = mensagem.content

            // chat_box.append(chat_conversa)
            chat_box.append(seuBalao)
            seuBalao.append(seuBalao_conversa)
            seuBalao_conversa.append(suaMensagem)
        }
    })

    return chat_box

}

const carregarContatos = () => {
    const container = document.getElementById('aside__main')
    const contato = contatos.map(criarContato)

    container.replaceChildren(...contato)
}

carregarContatos()