class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Métodos da classe
  atacar() {
    console.log(`o ${this.tipo} atacou usando ${this.ataque_por_tipo()}`);
  }

  ataque_por_tipo() {
    switch (this.tipo) {
      case "mago":
        return "magia";
      case "guerreiro":
        return "espada";
      case "monge":
        return "artes marciais";
      default:
        return "shuriken";
    }
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.querySelector("#nome").value;
  const idade = document.querySelector("#idade").value;
  const tipo = document.querySelector("#tipo").value;

  const heroi = new Heroi(nome, idade, tipo);
  heroi.atacar();

  // variavel que armazena o valor da mensagem final, so usei essa fora da classe
  
const mensagemFinal = `O herói ${nome} de ${idade} anos do tipo ${tipo}  atacou usando ${tipo}.`;
document.querySelector("#mensagem-final").innerHTML = mensagemFinal;
});
