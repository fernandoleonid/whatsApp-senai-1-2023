'use strict'

import {contatos} from "./contatos.js"

const criarCard = (contato, indice) => {

    const conversa = document.createElement('div')
    conversa.classList.add('container-conversas')

    conversa.addEventListener('click', (event) => {
        var container = document.getElementById('container-chat')
        container.appendChild(criarHeader(indice))
    })

    const foto = document.createElement('img')
    foto.classList.add('img-chat')
    foto.src = `../img/${contato.image}`

    const informacao = document.createElement('div')
    informacao.classList.add('container-info')

    const nome = document.createElement('span')
    nome.textContent = contato.name

    const descricao = document.createElement('span')
    descricao.classList.add('info-conversa')
    descricao.textContent = contato.description

    conversa.append(foto, informacao, nome)

    informacao.append(nome, descricao)

    return conversa

}

const criarHeader = (indice) => {
    const header = document.createElement('div')
    header.classList.add('header-direito');

    const containerHeader = document.createElement('div')
    containerHeader.classList.add('container-header');

    const imagemPerfil = document.createElement('img')
    imagemPerfil.classList.add('img-perfil');
    imagemPerfil.src = `../img/${contatos[indice].image}`

    const containerPerfil = document.createElement('div')
    containerPerfil.classList.add('container-perfil')

    const infoNome = document.createElement('span')
    infoNome.classList.add('nome')
    infoNome.textContent = contatos[indice].name

    const infoConversa = document.createElement('span')
    infoConversa.classList.add('info-conversa')
    infoConversa.textContent = 'online'

    // const perfilIcon = document.createElement('ul')
    // perfilIcon.classList.add('nav-perfil-direito')

    // const icon1 = document.createElement('li')
    // icon1.classList.add('fa-solid fa-magnifying-glass')

    // const icon2 = document.createElement('li')
    // icon2.classList.add('fa-solid fa-ellipsis-vertical')

    header.append(containerHeader)

    containerHeader.append(imagemPerfil, containerPerfil)

    containerPerfil.append(infoNome, infoConversa)

    // perfilIcon.append(icon1, icon2)

    return header

}

const carregarContatos = () => {
    const container = document.getElementById('container-mensagens')
    const contatosMensagens = contatos.map(criarCard)
    container.replaceChildren(...contatosMensagens)
}

carregarContatos()
criarHeader()