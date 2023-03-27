'use strict'
// import { contatos } from "../../recursos/contatos.js";


const numeroCelular = 11987876567;

const getContatos = async (numero) => {

    const urlContatos = `http://localhost:8080/v1/whatsapp/usuario/contatos/mensagens/celularUsuario/${numero}`
    const responseContatos = await fetch(urlContatos);
    const dataContatos = await responseContatos.json();

    const urlUser = `http://localhost:8080/v1/whatsapp/usuario/celularUsuario/${numero}`
    const responseUser = await fetch(urlUser);
    const dataUser = await responseUser.json();

    return {
        id: dataUser.id,
        name: dataUser.nameaccount,
        nickname: dataUser.nickname,
        number: dataUser.number,
        background: dataUser.background,
        contatos: dataContatos.contatos
    }
}

const criarContato = (contato, indice) => {

    const cardContact = document.createElement('div')
    cardContact.classList.add('contact')
    cardContact.setAttribute(`id`, `contact_${indice}`)

    const foto = document.createElement('img')
    foto.classList.add('contact__image')
    foto.src = `../../recursos/${contato.image}`
    foto.setAttribute(`alt`, `foto de perfil do contato ${contato.name}`)

    const cardTitle = document.createElement('div')
    cardTitle.classList.add('card__title')

    const nameContact = document.createElement('h5')
    nameContact.classList.add('contact__name')
    nameContact.textContent = contato.name


    const contactDescription = document.createElement('span')
    contactDescription.classList.add('contact__description')

    let cont = 0
    const tamanho = contato.messages.length;
    console.log(tamanho)

    while (cont < tamanho) {
        contactDescription.textContent = contato.messages[cont].content
        cont++
    }

    cardTitle.append(nameContact, contactDescription);

    cardContact.onclick = () => {
        carregarChat(indice)
        const contatoLido = document.getElementById(`contact_${indice}`)
        contatoLido.style.backgroundColor = '#fff'
    }

    cardContact.append(foto, cardTitle);

    return cardContact;

}
const carregarContatos = async () => {
    const dados = await getContatos(numeroCelular)
    const contatos = dados.contatos;

    const containerContatos = document.getElementById('contacts__container')
    const cardsContato = contatos.map(criarContato);

    containerContatos.replaceChildren(...cardsContato);
}
//Cria os elementos que armazenarão as mensagens
const criarChat = function (chat) {


    if (chat.sender === 'me') {

        const rightMessages = document.createElement('div');
        rightMessages.classList.add('right__messages');

        const userMessage = document.createElement('div');
        userMessage.classList.add('user__message');

        const message = document.createElement('p');
        message.classList.add('message');
        message.textContent = chat.content;

        const timer = document.createElement('span')
        timer.classList.add('message-time')
        timer.textContent = chat.time


        console.log()
        userMessage.append(message, timer);
        rightMessages.append(userMessage);

        return rightMessages;

    } else {
        const leftMessages = document.createElement('div');
        leftMessages.classList.add('left__messages');

        const contactMessage = document.createElement('div');
        contactMessage.classList.add('contact__message');

        const message = document.createElement('p');
        message.classList.add('message');
        message.textContent = chat.content;

        const timer = document.createElement('span')
        timer.classList.add('message-time')
        timer.textContent = chat.time

        contactMessage.append(message, timer);
        leftMessages.append(contactMessage);

        return leftMessages;

    }

}

//Carregas as mensagens para a tela com o clique no criar contatos(que chama essa função)
const carregarChat = async (indice) => {
    const dados = await getContatos(numeroCelular);
    const contatos = await dados.contatos;

    const containerChat = document.getElementById('chat_place');
    const cardsChat = await contatos[indice].messages.map(criarChat);


    const cardContact = document.createElement('div')
    cardContact.classList.add('contact__profile')
    cardContact.setAttribute('id', 'contact__profile')

    const foto = document.createElement('img')
    foto.classList.add('chat-contact_image')
    foto.src = `../../recursos/${contatos[indice].image}`
    

    const cardTitle = document.createElement('div')
    cardTitle.classList.add('chat-card__title')

    const nameContact = document.createElement('h5')
    nameContact.classList.add('chat-contact_name')
    nameContact.textContent = contatos[indice].name

    const contactDescription = document.createElement('span')
    contactDescription.classList.add('chat-contact_description')
    contactDescription.textContent = contatos[indice].description

    cardTitle.append(nameContact, contactDescription);
    cardContact.append(foto, cardTitle);


    containerChat.replaceChildren( cardContact, ...cardsChat);

}

carregarContatos();