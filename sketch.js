var xBolinha = 300;
var yBolinha = 200;
var diametro = 25;

// velocidade da bolinha

var velocidadeXBolinha = 6;
var velocidadeYBolinha = 6;
var raio = diametro / 2;

//raquete
var xRaquete = 5;
var yRaquete = 150;
var larguraRaquete = 10;
var alturaRaquete = 90;

//raquete do oponente
var xRaqueteOponente = 585;
var yRaqueteOponente = 150;


//movimento da raquete do oponente
var velocidadeYoponente;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);

  mostraBolinha();
  movimentaBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoBorda();

  function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
  }
  function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }
  function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeYBolinha *= -1;
    }
  }

  function mostraRaquete(x, y) {
    rect(x, y, larguraRaquete, alturaRaquete);
  }

  function movimentaRaquete() {
    if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
  }
  function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
      velocidadeXBolinha *= -1;
    }
  }
  function verificaColisaoRaqueteOponente() {
    if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
      velocidadeXBolinha *= -1;
    }
  }

  function movimentaRaqueteOponente() {
    velocidadeYoponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYoponente;
  }
  function colisaoRaqueteOponenteBiblioteca() {
    colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
    }
}

}