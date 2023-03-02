 'use strict'


 import { contatos } from "./contatos.js"


 const criarCard = (contato) =>{
    const card = document.createElement( 'div' )
    card.classList.add( 'card' )

    const img = document.createElement( 'img' )
    img.classList.add( 'card__image' )
    img.src = `./img/${contato.image}`

    const titulo = document.createElement( 'h5' )
    titulo.classList.add( 'card__titulo' )
    titulo.textContent = contato.name

    const texto = document.createElement('div')
    texto.classList.add('titulo_texto')

    const profissao = document.createElement( 'p' )
    profissao.classList.add( 'card__profissao' )
    profissao.textContent = contato.description

   //  titulo_texto.append(titulo,profissao)
    card.append(img, titulo, profissao, texto)

    return card

 }

//  const addNomeContato = (nome) => {
//    const titulo = document.createElement('h3')
//    titulo.classList.add('titulo__nome')
//    titulo.textContent = nome.name
//  }

 const carregarApp = () => {

    const container = document.getElementById( 'container' )
    const cards = contatos.map( criarCard )
   //  const mensagens = document.getElementById( 'mensagens' )

   //const 
    container.append(...cards)
 }

 carregarApp()