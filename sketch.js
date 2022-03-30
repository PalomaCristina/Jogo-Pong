//variáveis da bolinha
var xBolinha = 300;
var yBolinha = 200;
var diametro = 15;
var raio = diametro / 2;

//velocidade da bolinha
var velocidadeXBolinha = 6;
var velocidadeYBolinha = 6;
var raqueteComprimento = 10;
var raqueteAltura = 90;

//variáveis da raquete
var xRaquete = 5;
var yRaquete = 150;

//variáveis do oponente
var xRaqueteOponente = 585;
var yRaqueteOponente = 150;
var velocidadeYOponente;

var colidiu = false;

//placar do jogo
var meusPontos = 0;
var pontosDoOpon

//adcionando sons no jogo
var raquetada;
var ponto;
var trilhaSonora;

function setup() {
  createCanvas(600, 400);
  trilhaSonora.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  preload();
  //pensar em como fazer o oponente perder
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width ||
    xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
    yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento,
    raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
//aqui eu passo os parametros na funcao para utilizar tanto para a minha raquete, quanto para a do oponente
function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura,
    xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar() {
  //dando cor ao placar
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}
function marcaPonto() {
  if (xBolinha > 595) {
    meusPontos++;
    ponto.play();
  } else if (xBolinha < 7) {
    pontosDoOponente++;
    ponto.play();
  }
}

function preload() {
  trilhaSonora = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


