'use strict'

import { contatos } from './contatos.js'

const criarCard = (contatos, indice) => {
    const card = document.createElement('div')
    card.classList.add('card-contacts')

    const foto = document.createElement('img')
    foto.classList.add('card-image')
    foto.src = `./${contatos.image}`
    foto.alt = "Foto de Perfil"

    const name = document.createElement('p')
    name.classList.add('card-name')
    name.textContent = contatos.name

    const description = document.createElement('p')
    description.classList.add('card-description')
    description.textContent = contatos.description

    card.addEventListener('click', () => {
        let container = document.getElementById('main-rigth')
        container.replaceChildren(criarHeaderMensagens(indice), criarContainerMensagens(indice), criarFooterMensagens())
        barraDeRolagem()
    })

    card.append(foto, name, description)

    return card
}

const criarHeaderMensagens = (indice) => {
    const header = document.createElement('div')
    header.classList.add('barra-mensagens')

    const foto = document.createElement('img')
    foto.classList.add('foto-mensagens')
    foto.src = `./${contatos[indice].image}`
    foto.alt = "Foto de Perfil"

    const nomeContato = document.createElement('h5')
    nomeContato.classList.add('title-mensagens')
    nomeContato.textContent = contatos[indice].name

    header.append(foto, nomeContato)

    return header
}

const criarContainerMensagens = (indice) => {
    const container = document.createElement('div')
    container.classList.add('container-mensagens')

    const containerMensagens = document.createElement('div')
    containerMensagens.classList.add('container-conversa')

    contatos[indice].messages.forEach((mensagens) => {

        const caixaMensagemMinha = document.createElement('div')
        caixaMensagemMinha.classList.add('caixa-mensagem-minha')

        const mensagemMinha = document.createElement('p')
        mensagemMinha.classList.add('mensagem-minha')

        const horaMinha = document.createElement('p')
        horaMinha.classList.add('hora-minha')

        const caixaMensagemSua = document.createElement('div')
        caixaMensagemSua.classList.add('caixa-mensagem-sua')

        const mensagemSua = document.createElement('p')
        mensagemSua.classList.add('mensagem-sua')

        const horaSua = document.createElement('p')
        horaSua.classList.add('hora-sua')

        if (mensagens.sender == "me") {
            mensagemMinha.classList.add('mensagem-minha')
            mensagemMinha.textContent = mensagens.content

            horaMinha.classList.add('hora-minha')
            horaMinha.textContent = mensagens.time

            container.appendChild(containerMensagens)
            containerMensagens.append(caixaMensagemMinha)
            caixaMensagemMinha.append(mensagemMinha, horaMinha)

        } else if (mensagens.sender == contatos[indice].name) {
            mensagemSua.classList.add('mensagem-sua')
            mensagemSua.textContent = mensagens.content

            horaSua.classList.add('hora-sua')
            horaSua.textContent = mensagens.time

            container.appendChild(containerMensagens)
            containerMensagens.append(caixaMensagemSua)
            caixaMensagemSua.append(mensagemSua, horaSua)
        }
    })
    return container
}

const criarFooterMensagens = () => {
    const containerMensagensFooter = document.createElement('div')
    containerMensagensFooter.classList.add('footer-mensagens')

    const icons = document.getElementById('emoji-anexar')
    icons.classList.remove('emoji-anexar')
    icons.classList.add('emoji-anexar-on')

    const iconMicrofone = document.getElementById('iconMicrofone')
    iconMicrofone.classList.remove('microfone-none')
    iconMicrofone.classList.add('microfone')

    const inputMensagem = document.createElement('input')
    inputMensagem.placeholder = 'Mensagem'
    inputMensagem.classList.add('input-mensagem')

    containerMensagensFooter.append(inputMensagem, icons, iconMicrofone)

    return containerMensagensFooter
}

const carregarContatos = () => {
    const container__contacts = document.getElementById('main-left')
    const card = contatos.map(criarCard)

    container__contacts.replaceChildren(...card)
}

const barraDeRolagem = () => window.scroll(0, document.body.scrollHeight)

carregarContatos()