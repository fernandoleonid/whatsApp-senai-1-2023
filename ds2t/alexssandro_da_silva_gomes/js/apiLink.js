export const preencherDados = async (id) => {
    const url = `http://localhost:8080/v1/whatsapp/perfil/id/${id}`;
    const response = await fetch(url);
    const dados = await response.json()
    return dados
}