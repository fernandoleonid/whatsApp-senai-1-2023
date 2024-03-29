'use strict'

import {contatos} from "./api/contatos.js"
import { searchUser } from "./api/whatsapp.js"




const buildHome = async function(){
    const contactContainer = document.getElementById('contact')
    const user = await searchUser(1)
    console.log(user.contacts)
    const myContacts = user.contacts;
    const contacts = myContacts.map(buildContact)

    const profileHeader = document.getElementById('profile-header')
    profileHeader.style.backgroundColor = user.background
    contactContainer.append(...contacts)
}

const buildContact = (contact) => {
    const contactDiv = document.createElement('li')
    contactDiv.classList.add('contact')

    const info = document.createElement('div')
    info.classList.add('contact__info')

    const name = document.createElement('h2')
    name.classList.add('contact__name')
    name.textContent = contact.name

    const image = document.createElement('img')
    image.classList.add('contact__photo')
    image.src = `./api/${contact.image}`

    const description = document.createElement('p')
    description.classList.add('contact__description')
    description.textContent = contact.description

    const button = document.createElement('button')
    button.classList.add('contact__button')
    // button.addEventListener('click',function(){
    //     buildChat(contact)
    // })
    // button.addEventListener('click',() => buildChat(contact))
    button.onclick = () => buildChat(contact)


    const vetor = document.createElement('img')
    vetor.src = `./img/vetor.png`

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
    const header = buildHeader(contato)
    const chat = buildBox(contato.messages)
    const inputChat = buildInputChat()  

    
    chatContainer.classList.add(
        'd-flex',
        'flex-column',
        'justify-content-around'
        )
    chatContainer.replaceChildren(
        header,
        chat,
        inputChat
    )
}
const buildHeader = (contact) =>{
    const header = document.createElement('header')
     header.classList.add(
         'chat__header')
    //     't-border-and-color', 
    //     'd-flex' ,
    //     'justify-content-between',
    //     'align-items-center'
    //     )
    const contactBasicInfo = document.createElement('div')
    contactBasicInfo.classList.add(
        'contact',
        'info'
        )
    
    const image = document.createElement('img')
    image.classList.add(
        'contact__photo',
        'info'
        )
    image.src = contact.image

    const name = document.createElement('h2')
    name.classList.add('contact__name')
    name.textContent = contact.name

    const info = document.createElement('div')
    info.classList.add('contact__info')

    const description = document.createElement('p')
    description.classList.add('contact__description')
    description.textContent = contact.description

    const nav = document.createElement('button')
    // const nav_img = document.createElement('img')
    // nav_img.src = `./resources/imgs/controller.png`
    
    header.append(
        contactBasicInfo
    )
    contactBasicInfo.append(
        image,
        info
    )
    info.append(
        name,
        description
    )
    // nav.append(
    //     nav_img
    // )
    

    return header
}

const buildBox = (messagesList) =>{
    const boxDiv = document.createElement('div')
    boxDiv.classList.add(
        'box'
        )
    
    const messages = messagesList.map(createSingleMessage)
      
    // messages.forEach( (message) =>{
    //     boxDiv.append(
    //         message
    //     )
    // })  
    boxDiv.append(...messages)
    return boxDiv
}
const buildInputChat = () =>{
    const container = document.createElement('div')
    container.classList.add('input-box')


    const inputButtons = document.createElement('div')
    inputButtons.classList.add('input__buttons')

    const emojis = document.createElement('a')
    const emojiImage = document.createElement('img')
    emojiImage.src = `./img/emojis.png`
    emojis.append(
        emojiImage
    )
    emojis.classList.add('input-button')

    const anexos = document.createElement('a')  
    const anexoImage = document.createElement('img')
    anexoImage.src = `./img/anexos.png`
    anexos.append(
        anexoImage
    )
    anexos.classList.add('input-button')
    inputButtons.append(
        emojis,
        anexos
    )
    const inputText = document.createElement('input')
    inputText.inputMode = 'text';
    inputText.classList.add('input-text')
    inputText.placeholder = 'Type your message here'
    container.append(
        inputButtons,
        inputText
    )

    return container;
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
    // setContactsId()
    buildHome()
}
App()



// contatos.forEach(function(contato){
//     console.log(contato.messages)
// })