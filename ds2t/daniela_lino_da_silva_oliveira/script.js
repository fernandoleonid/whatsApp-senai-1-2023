'use strict'
import { contatos } from "../../recursos/contatos.js";

const criarContato = (contato) => {


    const cardContact = document.createElement('div')
    cardContact.classList.add('contact')
    cardContact.setAttribute('id', 'contact')

    const foto = document.createElement('img')
    foto.classList.add('contact__image')
    foto.src = `../../recursos/${contato.image}`

    const cardTitle = document.createElement('div')
    cardTitle.classList.add('card__title')

    const nameContact = document.createElement('h5')
    nameContact.classList.add('contact__name')
    nameContact.textContent = contato.name

    const contactDescription = document.createElement('span')
    contactDescription.classList.add('contact__description')
    contactDescription.textContent = contato.description

    cardTitle.append(nameContact, contactDescription);
    cardContact.append(foto, cardTitle);

    return cardContact;
}
const carregarContatos = () => {
    const containerContatos = document.getElementById('contacts__container')
    const cardsContato = contatos.map(criarContato);

    containerContatos.replaceChildren(...cardsContato);
}
const criarChat = (json) => {
    const nomeContato = json.name
    const senderMessage = json.messages
    // const nomeContato = json.name
    // const senderMessage = json.messages.sender
    console.log(senderMessage.lenght)



    for (let cont = 0; cont < senderMessage.length; cont++) {
        const cardChat = document.createElement('div');
        cardChat.classList.add('chat_place');
        console.log(3)
        console.log(senderMessage[1].sender)
        if (senderMessage[cont].sender != nomeContato) {
            console.log('ok')
            const messageRight = document.createElement('div')
            messageRight.classList.add('right__messages')

            const userMessage = document.createElement('div')
            userMessage.classList.add('user__message')

            const messageContentRight = document.createElement('p')
            messageContentRight.classList.add('message')
            messageContentRight.textContent = senderMessage[cont].content

            messageRight.append(userMessage, messageContentRight);
            cardChat.append(messageRight);
            return cardChat;
        } else {
            const messageLeft = document.createElement('div')
            messageLeft.classList.add('left__messages')

            const contactMessage = document.createElement('div')
            contactMessage.classList.add('contact__message')

            const messageContentLeft = document.createElement('p')
            messageContentLeft.classList.add('message')
            messageContentLeft.textContent = senderMessage[cont].content

            messageLeft.append(contactMessage, messageContentLeft);

            cardChat.append(messageLeft);
            return cardChat;
        }
    }


}




const carregarChat = () => {
    const containerChat = document.getElementById('messages_place')
    const cardsChat = contatos.map(criarChat);

    containerChat.replaceChildren(...cardsChat);
}
const contactClick = () => {
    const contatoExistente = document.getElementById('contact');
    contatoExistente.addEventListener('click', carregarChat)
}
carregarContatos()
contactClick()
