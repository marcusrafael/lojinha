class Jogo {
  constructor(id, nome, quantidade, preco) {
    this.id = id;
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco = preco;
  }
}

let jogos = [];

function listar() {
  document.getElementById("lista").textContent = "";

  jogos.forEach((jogo) => {
    const item = document.createElement("li");
    item.textContent = `Id: ${jogo.id} - Nome: ${jogo.nome} - Qtde: ${jogo.quantidade} - Preço: ${jogo.preco}`;
    document.getElementById("lista").appendChild(item);

    const excluir = document.createElement("button");
    excluir.textContent = "Excluir";
    item.appendChild(excluir);

    excluir.addEventListener("click", () => {
      jogos = jogos.filter((item) => {
        return item.id !== jogo.id;
      });
      listar();
    });

    const update = document.createElement("button");
    update.textContent = "Atualizar";
    item.appendChild(update);

    update.addEventListener("click", () => {
      document.getElementById("id").value = jogo.id;
      document.getElementById("nome").value = jogo.nome;
      document.getElementById("quantidade").value = jogo.quantidade;
      document.getElementById("preco").value = jogo.preco;
    });

    const save = document.createElement("button");
    save.textContent = "Salvar";
    item.appendChild(save);

    save.addEventListener("click", () => {
        jogo.id = document.getElementById("id").value
        jogo.nome = document.getElementById("nome").value
        jogo.quantidade = document.getElementById("quantidade").value
        jogo.preco = document.getElementById("preco").value
        listar();
    });
  });
}

function criar() {
  document.getElementById("botao").addEventListener("click", () => {
    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;

    const jogo = new Jogo(id, nome, quantidade, preco);

    jogos.push(jogo);

    document.getElementById("id").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco").value = "";
    listar();
  });
}

criar();
