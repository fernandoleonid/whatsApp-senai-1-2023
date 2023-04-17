'use strict'

import { contatos } from "./contato.js"

const criarCard = (contato, indice) => {

    const conversa = document.createElement('div')
    conversa.classList.add('container-conversas')

    conversa.addEventListener('click', (event) => {
        var container = document.getElementById('container-mensagens')
        container.replaceChildren(criarMensagem(indice), criarHeader(indice), carregarMessageBar())
        barraDeRolagem()
    })

    const fotoPessoa = document.createElement('img')
    fotoPessoa.classList.add('img-chat')
    fotoPessoa.src = `./${contato.image}`

    const informacao = document.createElement('div')
    informacao.classList.add('container-info')

    const perfil = document.createElement('div')
    perfil.classList.add('container-perfil')

    const descricao = document.createElement('span')
    descricao.classList.add('info-conversa')
    descricao.textContent = contato.description

    const nome = document.createElement('span')
    nome.textContent = contato.name

    const mensagemMe = document.createElement('span')
    mensagemMe.classList.add

    const hora = document.createElement('div')
    hora.classList.add('hora')
    hora.textContent = contato.hora

    conversa.append(fotoPessoa, informacao, nome)

    informacao.append(perfil)

    perfil.append(nome, descricao)

    return conversa

}

const criarHeader = (indice) => {
    const header = document.createElement('div')
    header.classList.add('container-header-direito')

    const containerHeader = document.createElement('div')
    containerHeader.classList.add('container-header')

    const imgPerfil = document.createElement('img')
    imgPerfil.classList.add('img-perfil')
    imgPerfil.src = `./${contatos[indice].image}`

    const containerPerfil = document.createElement('div')
    containerPerfil.classList.add('container-perfil')

    const nome = document.createElement('span')
    nome.classList.add('nome')
    nome.textContent = contatos[indice].name

    const conversa = document.createElement('span')
    conversa.classList.add('conversa')
    conversa.textContent = 'online'

    containerPerfil.append(nome, conversa)

    containerHeader.append(imgPerfil, containerPerfil)

    header.append(containerHeader)

    return header
}
const carregarMessageBar = () => {
    const messageBar = document.createElement('div')
    messageBar.classList.add('caixaDeMensagem')
    messageBar.id = 'message__Bar'

    const lupaIcon = document.createElement('i')
    lupaIcon.classList.add('fa-sharp', 'fa-solid', 'fa-paperclip')

    const smileIcon = document.createElement('i')
    smileIcon.classList.add('fa-regular', 'fa-face-smile')

    const mensagem = document.createElement('input')
    mensagem.type = 'text'
    mensagem.placeholder = 'Mensagem'

    const microfone = document.createElement('i')
    microfone.classList.add('fa-solid', 'fa-microphone')

    messageBar.append(lupaIcon, smileIcon, mensagem, microfone)

    return messageBar
}
const criarMensagem = (indice) => {
    const containerMensagensDireita = document.createElement('div')
    containerMensagensDireita.classList.add('container-mensagens-direita');

    contatos[indice].messages.forEach((mensagem) => {

        const caixaMensagensMinha = document.createElement('div')
        caixaMensagensMinha.classList.add('caixa-mensagens-minha')

        const caixaMensagensSua = document.createElement('div')
        caixaMensagensSua.classList.add('caixa-mensagens-sua')

        const msgMinha = document.createElement('p')
        msgMinha.classList.add('msg-minha')

        const horaMinha = document.createElement('span')
        horaMinha.classList.add('hora-minha')

        const msgSua = document.createElement('p')
        msgSua.classList.add('msg-sua')

        const horaSua = document.createElement('span')
        horaSua.classList.add('hora-sua')

        if (mensagem.sender == 'me') {

            msgMinha.classList.add('msg-minha')
            msgMinha.textContent = mensagem.content

            horaMinha.classList.add('hora-minha')
            horaMinha.textContent = mensagem.time
            caixaMensagensMinha.append(msgMinha, horaMinha)


        } else {

            msgSua.classList.add('msg-sua')
            msgSua.textContent = mensagem.content

            horaSua.classList.add('hora-sua')
            horaSua.textContent = mensagem.time

            caixaMensagensSua.append(msgSua, horaSua)



        }
        containerMensagensDireita.append(caixaMensagensMinha, caixaMensagensSua)
    })

    return containerMensagensDireita
}

const carregarContatos = () => {
    const container = document.getElementById('container')
    const contatosMensagens = contatos.map(criarCard)

    container.replaceChildren(...contatosMensagens)
}
const barraDeRolagem = () =>  window.scroll (0, document.body.scrollHeight)

carregarContatos()
