'use strict'

import { contatos } from "./recursos/contatos.js"

const criarContato = (contato, indice) => {
    const contact = document.createElement('div')
    contact.classList.add('contact-card__container')
    contact.setAttribute('id', 'id-' + indice)

    contact.addEventListener('click', (event) => {
        carregarConversas(indice)
        console.log(contatos[indice])
    })

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
    const contato = contatos.map(criarContato)

    containerContatos.replaceChildren(...contato)
}

const carregarConversas = (indice) => {
    const container = document.getElementById('container-messages')
    const header = document.createElement('div')
    header.classList.add('contact-information__container')

    const imagemDePerfil = document.createElement('img')
    imagemDePerfil.classList.add('contact-information__image')
    imagemDePerfil.src = `./${contatos[indice].image}`

    const juntarImagemComTextos = document.createElement('div')
    juntarImagemComTextos.classList.add('contact-information__image-name-description')

    const juntarTextos = document.createElement('div')
    juntarTextos.classList.add('contact-information__name-description')

    const nomeDoPerfil = document.createElement('p')
    nomeDoPerfil.classList.add('contact-information__name')
    nomeDoPerfil.textContent = contatos[indice].name

    const descricaoDoPerfil = document.createElement('p')
    descricaoDoPerfil.classList.add('contact-information__description')
    descricaoDoPerfil.textContent = contatos[indice].description

    juntarTextos.append(nomeDoPerfil, descricaoDoPerfil)
    juntarImagemComTextos.append(imagemDePerfil, juntarTextos)
    header.append(juntarImagemComTextos)


    container.append(header)
}

carregarContato()
