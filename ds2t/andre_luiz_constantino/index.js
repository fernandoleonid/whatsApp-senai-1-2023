'use strict'

import { contatos } from "./recursos/contatos.js"


const criarContato = ( contato ) => {
    const contact = document.createElement('div')
    contact.classList.add('contact-card__container')

    const fotoDePerfil = document.createElement('img')
    fotoDePerfil.classList.add('contact-card__image')
    fotoDePerfil.src = `./${contato.image}`


    const nomeComDescricao = document.createElement('div')
    nomeComDescricao.classList.add('contact-card__name-description')

    const nomeDoContato = document.createElement('p')
    nomeDoContato.classList.add('contact-card__name')
    nomeDoContato.textContent = contato.name

    const descricaoDoContato = document.createElement('p')
    descricaoDoContato.classList.add('contact-card__description')
    descricaoDoContato.textContent = contato.description

    nomeComDescricao.append(nomeDoContato, descricaoDoContato)
    contact.append(fotoDePerfil, nomeComDescricao)

    return contact
}

const carregarContato = () => {
    const containerContatos = document.getElementById('contacts-container')
    const contato = contatos.map( criarContato )

    containerContatos.replaceChildren(...contato)
}

carregarContato()