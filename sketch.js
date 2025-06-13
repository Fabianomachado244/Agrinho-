 // Lista de jogadores

let xJogadores = [50, 50, 50, 50]; // Posições iniciais na linha de partida

let yJogadores = [100, 200, 300, 400];

let jogadores = ["🚶‍♂️", "👨‍🦽‍➡️", "🛫", "🏍️"];

// Tamanhos e cores dos jogadores

let coresJogadores = ["blue", "pink", "green", "orange"];

let ganhou = false; // Variável para verificar se alguém ganhou

let vencedorIndex = -1; // Índice do jogador vencedor

function setup() {

  createCanvas(500, 500);

}

function draw() {

  ativaJogo();

  criaJogadores();

  criaChegada();

  if (!ganhou) {

    movimentaJogadores();

    verificaGanhador();

  } else {

    exibeVencedor();

  }

}

// Cor de fundo da tela

function ativaJogo() {

  if (focused) {

    background("black");

  } else {

    background("black");

  }

}

// Cria os jogadores

function criaJogadores() {

  textSize(30);

  for (let i = 0; i < 4; i++) {

    fill(coresJogadores[i]);

    text(jogadores[i], xJogadores[i], yJogadores[i]);

  }

}

// Cria linha de chegada

function criaChegada() {

  fill("white");

  rect(450, 0, 10, 500); // Linha de chegada na posição x=450

  fill("black");

  for (let yAtual = 10; yAtual < 500; yAtual += 20) {

    rect(450, yAtual, 10, 10);

  }

}

// Movimenta os jogadores automaticamente

function movimentaJogadores() {

  for (let i = 0; i < 4; i++) {

    xJogadores[i] += random(1, 3); // Velocidade aleatória

  }

}

// Verifica quem passou da linha de chegada

function verificaGanhador() {

  for (let i = 0; i < 4; i++) {

    if (xJogadores[i] >= 440) { // Perto da linha de chegada

      ganhou = true;

      vencedorIndex = i;

      break;

    }

  }

}

// Exibe a mensagem de vencedor

function exibeVencedor() {

  fill("white");

  textSize(60);

  text(jogadores[vencedorIndex] + " venceu!", 80, 200);

}