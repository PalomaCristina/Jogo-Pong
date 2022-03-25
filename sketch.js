var xBolinha = 300;
var yBolinha = 200;
var diametro = 25;

var velocidadeXBolinha = 6;
var velocidadeYBolinha = 6;
var raio = diametro / 2;

var xRaquete = 5;
var yRaquete = 150;
var larguraRaquete = 10;
var alturaRaquete = 90;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  xBolinha += velocidadeXBolinha; 
  yBolinha += velocidadeYBolinha; 
  mostraBolinha();
  movimentaBolinha();
  mostraRaquete();
  movimentaRaqueta();
  verificaColisaoRaquete();
function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}
function movimentaBolinha(){
    if(xBolinha+raio  > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
    }
  }
}
function mostraRaquete(){
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}

function movimentaRaqueta(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}