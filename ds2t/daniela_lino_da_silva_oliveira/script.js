'use strict'

import { contatos } from "./contatos.js"
console.log(2)

const criarContato = (contatos) => {
    const contato = document.createElement('div')
    contato.classList.add('contact')

    const foto = document.createElement('img')
    foto.classList.add('contact__image')
    foto.src = `../../recursos/${contatos.image}`

    contato.append(foto);

    return contato;
}
const carregarContatos = () => {
    const containerContatos = document.getElementById('contacts__container')
    const contatos = contatos.map(criarContato);

    containerContatos.replaceChild(...contatos);
}
carregarContatos()
