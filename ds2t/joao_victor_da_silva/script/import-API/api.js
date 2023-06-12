'use strict'

export const pesquisarTelefone = async (filtroTelefone) => {

    const url = `http://localhost:8080/v1/whatsapp/contatos/${filtroTelefone}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}