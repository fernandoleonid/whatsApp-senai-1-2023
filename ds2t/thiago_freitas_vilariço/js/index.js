'use strict'

import {contatos} from "./contatos.js"

const container = document.getElementById('container')

const criarCard = (contato, indice) => {

    const mensagem = document.createElement('ul')
    mensagem.classList.add('container-mensagens')

    const conversa = document.createElement('div')
    conversa.classList.add('container-conversas')

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

    mensagem.append(conversa)

    conversa.append(foto, informacao, nome)

    informacao.append(nome, descricao)

    return mensagem

}

const carregarContatos = () => {
    const contatosMensagens = contatos.map(criarCard)
    container.replaceChildren(...contatosMensagens)
}

carregarContatos()