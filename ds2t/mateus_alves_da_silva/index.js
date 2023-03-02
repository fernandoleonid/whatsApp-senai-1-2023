'use strict'

import{contatos} from "./contatos.js"

const criarContato = (contato) => {
    const cardContato = document.createElement('div')
    cardContato.classList.add('chat_list')

    const list = document.createElement('div')
    list.classList.add('contato_list')

    const foto = document.createElement('img')
    foto.classList.add('imagem_contato')
    foto.src = `./${contato.image}`

    const details = document.createElement('div')
    details.classList.add('chat_detail')

    const profile = document.createElement('div')
    profile.classList.add('chat_profile')

    const nome = document.createElement('span')
    nome.textContent = contato.name

    const descricao = document.createElement('span')
    descricao.classList.add('descricao_contato')
    descricao.textContent = contato.description

    cardContato.append(list)

    list.append(foto, details, nome)

    details.append(profile)

    profile.append(nome, descricao)

    return cardContato

}

const carregarContatos = () => {
    const contatoCard = document.getElementById('contatoCard')
    const mensagensContatos = contatos.map(criarContato)

    contatoCard.replaceChildren(...mensagensContatos)
}

carregarContatos()