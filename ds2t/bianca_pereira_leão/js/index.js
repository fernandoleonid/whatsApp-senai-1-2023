'use strict'

import { contatos } from "./contatos.js"

// Função para criar a lista

const criaListaMensagem = (mensagem) => {
  const list = document.createElement('ul');
  list.classList.add('list-unstyled');
  list.style.overflowY = 'auto'; // adiciona o estilo de overflow-y

  const listElement = document.createElement('li');
  listElement.classList.add('media');


  const imagemElement = document.createElement('div');
  imagemElement.classList.add('col-3');

  const foto = document.createElement('img');
  foto.classList.add('profile-photo');
  foto.classList.add('rounded-circle');
  foto.classList.add('mb-2');
  foto.classList.add('mt-3');
  foto.classList.add('ml-2');
  foto.classList.add('mr-3');
  foto.src = `./img/${mensagem.image}`;

  const guardaMediaBody = document.createElement('div');
  guardaMediaBody.classList.add('media-body');
  guardaMediaBody.classList.add('d-flex');
  guardaMediaBody.classList.add('flex-column');

  const nomeContato = document.createElement('h6')
  nomeContato.classList.add('text-secondary')
  nomeContato.classList.add('mb-1')
  nomeContato.classList.add('mt-3')
  nomeContato.textContent = mensagem.name

  const lastMessage = mensagem.messages[mensagem.messages.length - 1]
  const lastMessageContent = lastMessage.content

  const lastMessageTimestamp = new Date(lastMessage.timestamp)

  const now = new Date()

  const spanHora = document.createElement('span')
  spanHora.classList.add('last-message-time')

  if (now - lastMessageTimestamp < 1000 * 60 * 60 * 24) {
    // menos de 24 horas atrás
    spanHora.textContent = lastMessageTimestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  } else if (now - lastMessageTimestamp < 1000 * 60 * 60 * 48) {
    // menos de 48 horas atrás
    spanHora.textContent = 'Ontem'
  } else {
    // mais de 48 horas atrás
    spanHora.textContent = lastMessageTimestamp.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: '2-digit' })
  }


  const lastMensagem = document.createElement('p')
  lastMensagem.classList.add('last-message')
  lastMensagem.classList.add('text-black-50')
  lastMensagem.classList.add('pb-3')
  lastMensagem.classList.add('mb-1')
  lastMensagem.textContent = lastMessageContent

  guardaMediaBody.append(nomeContato, lastMensagem)
  nomeContato.append(spanHora)

  list.append(listElement, foto, guardaMediaBody);


  list.addEventListener('click', (event) => {
    carregarChatItens(mensagem.id);
  });


  return list;
};


// Função que ordena os contatos de acordo com a data e hora da ultima mensagem

const ordenaContatosPorUltimaMensagem = (contatos) => {
  return contatos.sort((a, b) => {
    const ultimaMensagemA = a.messages[a.messages.length - 1];
    const ultimaMensagemB = b.messages[b.messages.length - 1];
    const dataUltimaMensagemA = new Date(ultimaMensagemA.timestamp);
    const dataUltimaMensagemB = new Date(ultimaMensagemB.timestamp);
    return dataUltimaMensagemB.getTime() - dataUltimaMensagemA.getTime();
  });
};

// Função para que a lista apareça

const carregarLista = () => {
  const contacts = document.getElementById('contacts');
  const contatosOrdenados = ordenaContatosPorUltimaMensagem(contatos);
  const cards = contatosOrdenados.map(criaListaMensagem);
  contacts.replaceChildren(...cards);
};


carregarLista()


// Função para criar chat

const criarChatItens = (chat) => {
  const header = document.createElement('header');
  header.classList.add('d-flex', 'w-100');


  const headerStatus = document.createElement('div');
  headerStatus.classList.add('status-friend');
  headerStatus.classList.add('ml-auto');


  const imgHeader = document.createElement('div');
  imgHeader.classList.add('profile-photo')
  imgHeader.classList.add('rounded-circle')
  imgHeader.classList.add('my-auto')
  imgHeader.classList.add('mx-2')

  const img = document.createElement('img');
  img.src = `./img/${chat.image}`;

  const divPaiNomeDescricao = document.createElement('div');
  divPaiNomeDescricao.classList.add('mr-auto')

  const nomeContato = document.createElement('p')
  nomeContato.classList.add('mt-2')
  nomeContato.classList.add('mb-0')
  nomeContato.classList.add('text-secondary')
  nomeContato.classList.add('font-weight-bold')
  nomeContato.textContent = chat.name

  const divGuardaDescricao = document.createElement('div')
  divGuardaDescricao.classList.add('last-message')


  const spanDescricao = document.createElement('span')
  spanDescricao.classList.add('text-secondary')
  spanDescricao.textContent = chat.lastSeem

  const nav = document.createElement('nav')
  nav.classList.add('groupIconMessage')

  const aDaNav = document.createElement('a')
  aDaNav.classList.add('icon-message')

  const icone1 = document.createElement('i')
  icone1.classList.add('fas')
  icone1.classList.add('fa-search')
  icone1.classList.add('text-secondary')

  const divDropDown = document.createElement('div')
  divDropDown.classList.add('dropdown','d-flex')

  const btn = document.createElement('button')
  btn.classList.add('btn','dropdown-toggle')
  btn.id = 'menuDropdown'

  const icone2 = document.createElement('i')
  icone2.classList.add('fas')
  icone2.classList.add('fa-ellipsis-v')
  icone2.classList.add('text-secondary')
  icone2.id = 'dropIcon'

  header.append(headerStatus,nav)
  headerStatus.append(imgHeader,divPaiNomeDescricao)
  imgHeader.append(img)

  divPaiNomeDescricao.append(nomeContato,divGuardaDescricao)
  divGuardaDescricao.append(spanDescricao)

  nav.append(aDaNav,divDropDown)
  aDaNav.append(icone1)
  divDropDown.append(btn)
  btn.append(icone2)

  return header
}


const carregarChatItens = (contatoId) => {
  const chatContainer = document.getElementById('headerChat');
  const contato = contatos.find(c => c.id === contatoId);
  if (!contato) {
    console.error(`Contato com ID ${contatoId} não encontrado.`);
    return;
  }
  const header = criarChatItens(contato);
  chatContainer.replaceChildren(header);
};


