let jogos = [
    "Minecraft",
    "GTA V",
    "Valorant"
];

function renderizarLista() {
    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (let i = 0; i < jogos.length; i++) {

        lista.innerHTML += `
            <li>
                ${jogos[i]}
                <button onclick="editarItem(${i})">Editar</button>
                <button onclick="removerItem(${i})">Remover</button>
            </li>
        `;
    }
}

function fazerLogin() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let erro = document.getElementById("erroLogin");

    if (usuario === "" || senha === "") {
        erro.textContent = "Preencha todos os campos.";
        return;
    }

    if (usuario === "aluno" && senha === "fiap2025") {

        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("appContainer").style.display = "block";

        renderizarLista();

    } else {
        erro.textContent = "Usuário ou senha inválidos.";
    }
}

function adicionarFinal() {

    let campo = document.getElementById("novoItem");
    let erro = document.getElementById("erroItem");

    if (campo.value.trim() === "") {
        erro.textContent = "Digite um jogo.";
        return;
    }

    jogos.push(campo.value);

    campo.value = "";
    erro.textContent = "";

    renderizarLista();
}

function adicionarInicio() {

    let campo = document.getElementById("novoItem");
    let erro = document.getElementById("erroItem");

    if (campo.value.trim() === "") {
        erro.textContent = "Digite um jogo.";
        return;
    }

    jogos.unshift(campo.value);

    campo.value = "";
    erro.textContent = "";

    renderizarLista();
}

function editarItem(indice) {

    let novoNome = prompt("Editar jogo:", jogos[indice]);

    if (novoNome === null || novoNome.trim() === "") {
        return;
    }

    jogos[indice] = novoNome;

    renderizarLista();
}

function removerItem(indice) {

    jogos.splice(indice, 1);

    renderizarLista();
}