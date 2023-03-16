'use strict'

import{contatos} from "./contatos.js"

const criarHeader = (indice) => {
    const header = document.createElement('div')
    header.classList.add('header_mensagens')

    const containerHeader = document.createElement('div')
    containerHeader.classList.add('container_header')

    const imagemPerfil = document.createElement('img')
    imagemPerfil.classList.add('img_perfil')
    imagemPerfil.src = `./img/${contatos[indice].image}`


    const containerPerfil = document.createElement('div')
    containerPerfil.classList.add('container_perfil')

    const infoNome = document.createElement('span')
    infoNome.classList.add('info_nome')
    infoNome.textContent = contatos[indice].name

    const infoConversa = document.createElement('span')
    infoConversa.classList.add('info_conversa')
    infoConversa.textContent = 'online'

    header.append(containerHeader)

    containerHeader.append(imagemPerfil, containerPerfil)

    containerPerfil.append(infoNome, infoConversa)

    return header
}

const criarMensagem = (indice) => {
    const containerMensagensDireita = document.getElementById('id_container')
    containerMensagensDireita.classList.remove('container_direito_none')
    containerMensagensDireita.classList.add('container_mensagens_direita')

    const chatBox = document.createElement('div')
    chatBox.classList.add('chat_box')

    contatos[indice].messages.forEach((mensagem) => {

        const caixaMinhaMensagem = document.createElement('div')
        caixaMinhaMensagem.classList.add('caixa_minha_mensagem')

        const caixaSuaMensagem = document.createElement('div')
        caixaSuaMensagem.classList.add('caixa_sua_mensagem')

        const msgMinha = document.createElement('p')
        msgMinha.classList.add('msg_minha')

        const msgSua = document.createElement('p')
        msgSua.classList.add('msg_sua')

        const horaMinha = document.createElement('span')
        horaMinha.classList.add('hora_minha')

        const horaSua = document.createElement('span')
        horaSua.classList.add('hora_sua')

        if(mensagem.sender == 'me') {
            msgMinha.classList.add('msg_minha')
            msgMinha.textContent = mensagem.content

            horaMinha.classList.add('hora_minha')
            horaMinha.textContent = mensagem.time

            containerMensagensDireita.appendChild(chatBox)

            chatBox.append(caixaMinhaMensagem, caixaSuaMensagem)

            caixaMinhaMensagem.append(msgMinha, horaMinha)

        } else if (mensagem.sender == contatos[indice].name) {
            msgSua.classList.add('msg_sua')
            msgSua.textContent = mensagem.content

            horaSua.classList.add('hora_sua')
            horaSua.textContent = mensagem.time

            containerMensagensDireita.appendChild(chatBox)

            chatBox.append(caixaMinhaMensagem, caixaSuaMensagem)

            caixaSuaMensagem.append(msgSua, horaSua)
        }
    })

    return containerMensagensDireita
}

const criarContato = (contato, indice) => {
    const cardContato = document.createElement('div')
    cardContato.classList.add('chat_list')

    cardContato.addEventListener('click', () => {
        var container = document.getElementById('container_chat')
        container.replaceChildren(criarHeader(indice), criarMensagem(indice), carregarBarraDeMensagem())
    })

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

const carregarBarraDeMensagem = () => {
    const barraMensagem = document.getElementById('footer')
    barraMensagem.classList.remove('footer_direito_none')
    barraMensagem.classList.add('footer_direito')
    return footer
}

carregarContatos()