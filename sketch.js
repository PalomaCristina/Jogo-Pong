//variáveis da bolinha
var xBolinha = 300;
var yBolinha = 200;
var diametro = 15;
var raio = diametro / 2 ;

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
var pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
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
  //pensar em como fazer o oponente perder
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, 
      raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
//aqui eu passo os parametros na funcao para utilizar tanto para a minha raquete, quanto para a do oponente
function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y,raqueteComprimento,raqueteAltura,
                              xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar() {
  //dando cor ao placar 
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}
 function marcaPonto() {
   if(xBolinha > 595){
    meusPontos++;
   }else if(xBolinha < 7){
     pontosDoOponente++;
   }
 }



