
export async function verificarEmail(email) {
    const URL = 'https://projeto-restaurante-backend-5mhl.onrender.com/cliente';

    const resposta = await fetch(URL);

    if (!resposta.ok) {
        throw new Error("Erro ao consultar os clientes.");
    }

    const clientes = await resposta.json();

    return clientes.some(cliente =>
        cliente.email.trim().toLowerCase() === email.trim().toLowerCase()
    );
}
