'use strict'

import {contatos} from "./resources/api/contatos.js"


const buildHome = function(){
    const contactContainer = document.getElementById('contact')
    const contacts = contatos.map(buildContact)
    contactContainer.append(...contacts)
}

const buildContact = (contact) => {
    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact')

    const info = document.createElement('div')
    info.classList.add('contact__info')

    const name = document.createElement('h2')
    name.classList.add('contact__name')
    name.textContent = contact.name

    const image = document.createElement('img')
    image.classList.add('contact__photo')
    image.src = `./resources/api/${contact.image}`

    const description = document.createElement('p')
    description.classList.add('contact__description')
    description.textContent = contact.description

    const button = document.createElement('button')
    button.classList.add('contact__button')
    button.addEventListener('click',function(){
        buildChat(contact)
    })

    const vetor = document.createElement('img')
    vetor.src = `./resources/imgs/vetor.png`

    const text = document.createElement('p')
    text.textContent = 'Ver'

    // const messages = document.createElement('p')
    // price.classList.add('card__price')
    // price.textContent = contato.price

    info.append(
        name,
        description
    )
    button.append(
        vetor,
        text
    )
    contactDiv.append(
        image,
        info,
        button
    )

    return contactDiv

}

const setContactsId = () =>{
    let counter = 0;
    contatos.forEach(contato => {
        contato.id = counter;
        counter++ 
    });
}

const buildChat = (contato) => {
    const chatContainer = document.getElementById('chat')
    chatContainer.innerHTML = ""
    const header = buildHeader(contato)
    const chat = buildBox(contato.messages)
    
    chatContainer.append(
        header,
        chat
    )
}
const buildHeader = (contact) =>{
    const chatDiv = document.createElement('div')
    chatDiv.classList.add('chat__header')

    const info = document.createElement('div')
    info.classList.add('contact__info')

    const name = document.createElement('h2')
    name.classList.add('contact__name')
    name.textContent = contact.name

    const image = document.createElement('img')
    image.classList.add('contact__photo')
    image.src = `./resources/api/${contact.image}`

    const description = document.createElement('p')
    description.classList.add('contact__description')
    description.textContent = contact.description

    const nav = document.createElement('button')
    const nav_img = document.createElement('img')
    nav_img.src = `./resources/imgs/controller.png`
    
    nav.append(
        nav_img
    )
    info.append(
        name,
        description
    )
    
    chatDiv.append(
        image,
        info,
        nav
    )

    return chatDiv
}

const buildBox = (messagesList) =>{
    const boxDiv = document.createElement('div')
    boxDiv.classList.add('container-message')

    // const boxMessages = messages.map(createSingleMessage)
    const messages = messagesList.map(createSingleMessage)
    messages.forEach( (message) =>{
        boxDiv.append(
            message
        )
    })  

    return boxDiv
}
const createSingleMessage = (message) => {
    const messageHtml = document.createElement('p')
    messageHtml.classList.add('message')
    
    if(message.sender == "me")
        messageHtml.classList.add('sender')
    else
        messageHtml.classList.add('receiver')

    messageHtml.textContent = message.content 

    return messageHtml
}

const App = () => {
    setContactsId()
    buildHome()
}

App()



// contatos.forEach(function(contato){
//     console.log(contato.messages)
// })