//Crianda uma variável para chamar o input que contém a checkbox
const containerCheckbox = document.querySelector('input.checkbox')
const rootElement = document.documentElement

//Variável criada para mudar somente a cor do body
const bodyChange = document.getElementById('checkbox')

//Adicionando um evento de mudança da cor do body
bodyChange.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

//Variável que contém todas as cores do tema claro do WhatsApp
const lightTheme = {
    '--header-color': '#ededed',
    '--search-chat-color': '#eeeeeea9',
    '--search-chat-text': '#bbb',
    '--chatlist-color': '#fff',
    '--chatlist-hover-color': '#e9edef',
    '--search-bar-left-color': '#ededed',
    '--body-right-color': '#efeae2',
    '--chat-mymessage-color': '#d9fdd3',
    '--chat-friendmessage-color': '#fff',
    '--text-mymessage-color': '#000',
    '--text-friendmessage-color': '#000',
    '--hour-mymessage-color': '#000',
    '--hour-friendmessage-color': '#000',
    '--container-initial-color': '#F0F2F5',
    '--container-initial-resources-color': '#41525D', 
    '--nav-icons-left-color': '#51585c',
    '--text-contacts-color': '#000',
    '--text-description-color': '#727272',
    '--chat-input-color': '#e9edef',
    '--input-chat-input-color': '#fff'
}

//Variável que contém todas as cores do tema escuro do WhatsApp
const darkTheme = {
    '--header-color': '#202c33',
    '--search-chat-color': '#111B21',
    '--search-chat-text': '#bbb',
    '--chatlist-color': '#111B21',
    '--chatlist-hover-color': '#202c33',
    '--search-bar-left-color': '#202c33',
    '--body-right-color': '#111B21',
    '--contact_text': '#bbb',
    '--chat-mymessage-color': '#005c4b',
    '--chat-friendmessage-color': '#202c33',
    '--text-mymessage-color': '#fff',
    '--text-friendmessage-color': '#fff',
    '--hour-mymessage-color': '#fff',
    '--hour-friendmessage-color': '#fff',
    '--container-initial-color': '#202c33',
    '--container-initial-resources-color': '#bbb', 
    '--nav-icons-left-color': '#bbb',
    '--text-contacts-color': '#fff',
    '--text-description-color': '#bbb',
    '--chat-input-color': '#202c33',
    '--input-chat-input-color': '#eeeeeea9'
}

//Adicionando o evento de mudança de cores, de claro para escuro e vice-versa
containerCheckbox.addEventListener('change', () => {
    const isChecked = containerCheckbox.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

//Função criada para efetuar a mudança de tema com base na checkbox
function changeTheme (checkbox) {
    for (let prop in checkbox) {
        changeProperty(prop, checkbox[prop])
    }
}

//Função criada para mudar a proprieda e valor, utilizada na função acima
function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}