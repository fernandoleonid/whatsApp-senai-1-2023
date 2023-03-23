'use strict'

import { contatos } from "./contatos.js"

const criarContato = (contact) => {
    const contato = document.createElement('a')
    contato.classList.add('contact')
    contato.href = "#chats"

    const foto = document.createElement('img')
    foto.classList.add('contact__picture')
    foto.src = "./" + contact.image

    const textos = document.createElement('span')
    textos.classList.add('contact__text')

    const nome = document.createElement('h3')
    nome.classList.add('contact__name')
    nome.textContent = contact.name

    const descricao = document.createElement('p')
    descricao.classList.add('contact__description')
    descricao.textContent = contact.messages[contact.messages.length - 1].content
    
    const back = document.getElementById('back')
    back.style.display = 'none'

    textos.append(nome, descricao)

    contato.append(foto, textos)

    contato.addEventListener('click', () => {
        const chat = document.getElementById('chats')
        chat.replaceChild(carregarConversa(getIndex(contact, contatos)))

        
    })
    

    return contato
}

const criarHeaderContato = (contact) => {
    const container = document.createElement('div')
    container.classList.add('chats__info')

    const info__contact = document.createElement('span')
    info__contact.classList.add('info__contact')

    const foto = document.createElement('img')
    foto.src = "./" +  contact.image

    const info__texts = document.createElement('span')
    info__texts.classList.add('info__texts')

    const nome = document.createElement('h3')
    nome.textContent = contact.name

    const descricao = document.createElement('p')
    descricao.textContent = contact.description

    if(window.innerWidth <= 960){
        const back = document.getElementById('back')
        back.style.display = 'grid'
    }
    

    container.append(info__contact)
    info__texts.append(nome, descricao)
    info__contact.append(foto, info__texts)


    return container

}

const criarMainContato = (contact) => {
    const container = document.createElement('nav')
    container.classList.add('chats__messages')

    const chats = document.getElementById('chats')
    chats.style.backgroundColor = '#f1ece6'
    chats.style.display = 'block'


    contact.messages.forEach(function(message){

        if(message.sender == 'me'){
            const messages__me = document.createElement('div')
            messages__me.classList.add('messages__me')

            const message__text = document.createElement('p')
            message__text.classList.add('messages__text')
            message__text.textContent = message.content

            const message__time = document.createElement('p')
            message__time.classList.add('messages__time')
            message__time.textContent = message.time

            messages__me.append(message__text,message__time)
            container.append(messages__me)


        } else{
            const messages_contact = document.createElement('div')
            messages_contact.classList.add('messages__contact')

            const message__text = document.createElement('p')
            message__text.classList.add('messages__text')
            message__text.textContent = message.content

            const message__time = document.createElement('p')
            message__time.classList.add('messages__time')
            message__time.textContent = message.time

            messages_contact.append(message__text, message__time)
            container.append(messages_contact)

        }

    })

    return container
}   

const criarFooterContatos = () => {
    const footer = document.getElementById('chats__footer')
    footer.classList.remove('chats__footer_none')
    footer.classList.add('chats__footer')

    return footer
}

const carregarContatos = () => {
    const containerContatos = document.getElementById('contacts__container')
    const contacts = contatos.map(criarContato)
    

    
    containerContatos.replaceChildren(...contacts)
}

const carregarConversa = (indice) => {
    const containerChats = document.getElementById('chats')

    containerChats.replaceChildren(criarHeaderContato(contatos[indice]), criarMainContato(contatos[indice]), criarFooterContatos())
    
}


const getIndex = (contact, lista) => {
    return lista.indexOf(contact)
}

carregarContatos()

