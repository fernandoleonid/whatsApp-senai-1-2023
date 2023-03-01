'use strict'

import {contatos} from "./contatos.js"

const criarCard = (contato) => {
    const mensagem = document.createElement('ul')
    mensagem.classList.add('container-mensagens')

    const conversa = document.createElement('div')
    conversa.classList.add('container-conversas')

    const foto = document.createElement('img')
    foto.classList.add('img-chat')
    foto.src = `../img/${contato.image}`

    const informacao = document.createElement('div')
    informacao.classList.add('container-info')

    const perfil = document.createElement('div')
    perfil.classList.add('container-perfil')

    const nome = document.createElement('span')
    nome.textContent = contato.name

    const descricao = document.createElement('span')
    descricao.classList.add('info-conversa')
    descricao.textContent = contato.description

    const hora = document.createElement('div')
    hora.classList.add('hora')
    hora.textContent = contato.hora

    mensagem.append(conversa)

    conversa.append(foto, informacao, nome, hora)

    informacao.append(perfil)

    perfil.append(nome, descricao)

    return mensagem

}

const carregarContatos = () => {
    const container = document.getElementById('container')
    const contatosMensagens = contatos.map(criarCard)

    container.replaceChildren(...contatosMensagens)
}

carregarContatos()