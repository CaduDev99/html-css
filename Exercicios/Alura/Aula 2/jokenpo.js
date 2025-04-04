idade = prompt("Quantos anos voce tem?");

if (idade >= 18) {
  alert("Excelente, continue!");

  escolhajogador = prompt("1-Pedra, 2-Papel, 3-Tesoura");
  escolhacomputador = Math.floor(Math.random() * 3) + 1;
  if (escolhajogador == escolhacomputador) {
    alert("Empate!");
  }

  if (escolhajogador == 1) {
    if (escolhacomputador == 2) {
      alert("Computador Venceu, computador: Papel");
    }
    if (escolhacomputador == 3) {
      alert("Jogador Venceu, computador: Tesoura");
    }
  }

  if (escolhajogador == 2) {
    if (escolhacomputador == 1) {
      alert("Jogador Venceu, computador: Pedra");
    }
    if (escolhacomputador == 3) {
      alert("Computador Venceu, computador: Tesoura");
    }
  }

  if (escolhajogador == 3) {
    if (escolhacomputador == 2) {
      alert("Jogador Venceu, computador: Papel");
    }
    if (escolhacomputador == 1) {
      alert("Computador Venceu, computador: Tesoura");
    }
  }
}

if (idade < 18) {
  alert("NEGADO");
}
