 'use strict'


 import { contatos } from "./contatos.js"


 const criarCard = (contatos) =>{
    const card = document.createElement( 'div' )
    card.classList.add( 'card' )

    const img = document.createElement( 'img' )
    img.classList.add( 'card__image' )
    img.src = `./img/${contatos.image}`

    const titulo_texto = document.createElement('div')
    titulo_texto.classList.add('titulo_texto')

    const titulo = document.createElement( 'h5' )
    titulo.classList.add( 'card__titulo' )
    titulo.textContent = contatos.name

    const profissao = document.createElement( 'p' )
    profissao.classList.add( 'card__profissao' )
    profissao.textContent = contatos.description

    titulo_texto.append(titulo,profissao)
    card.append(img, titulo_texto)

    return card

 }

 const carregarApp = () => {

    const container = document.getElementById( 'container' )
    const cards = contatos.map( criarCard )

    container.append(...cards)
 }

 carregarApp()