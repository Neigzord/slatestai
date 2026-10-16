
import { verificarEmail } from "./fetch.js";

export async function darFetch(nome, email, cpf, senha) {
    try {
        const existe = await verificarEmail(email);

        if (existe) {
            console.log("Esse e-mail já está cadastrado!");
            return;
        }

        const URL = 'https://projeto-restaurante-backend-5mhl.onrender.com/cliente';

        const resposta = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                cpf: cpf,
                senha: senha
            })
        });

        if (resposta.ok) {
            console.log("Cadastro realizado com sucesso!");
        } else {
            console.error(
                "Erro do servidor (" + resposta.status + "):",
                await resposta.text()
            );
        }

    } catch (erro) {
        console.error("Erro ao cadastrar:", erro);
    }
}
