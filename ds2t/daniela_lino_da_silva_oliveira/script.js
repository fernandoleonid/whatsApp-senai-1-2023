'use strict'
import { contatos } from "../../recursos/contatos.js";
console.log(contatos)

const criarContato = (contato) => {
    const cardContact = document.createElement('div')
    cardContact.classList.add('contact')

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

    cardTitle.append(nameContact, contactDescription)
    cardContact.append(foto, cardTitle);

    return cardContact;
}
const carregarContatos = () => {
    const containerContatos = document.getElementById('contacts__container')
    const cardsContato = contatos.map(criarContato);

    containerContatos.replaceChildren(...cardsContato);
    console.log('ok')
}
carregarContatos()
