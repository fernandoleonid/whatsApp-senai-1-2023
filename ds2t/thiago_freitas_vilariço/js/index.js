'use strict'

import {contatos} from "./contatos.js"

const criarCard = (contato, indice) => {

    const conversa = document.createElement('div')
    conversa.classList.add('container-conversas')

    conversa.addEventListener('click', (event) => {
        console.log(contatos[indice])
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

const carregarContatos = () => {
    const container = document.getElementById('container-mensagens')
    const contatosMensagens = contatos.map(criarCard)
    container.replaceChildren(...contatosMensagens)
}

const carregarMensagens = () => {
    const mensagem = document.getElementById('mensagem')
    const conversas = contatos.map(criarConversa)
    mensagem.replaceChildren(...conversas)
}

// var div = document.getElementById('container-mensagens') 

// div.addEventListener('click', function() {

//     var container = document.getElementById('container-chat')

//     container.classList.toggle('hide');

// })

carregarContatos()
carregarMensagens()