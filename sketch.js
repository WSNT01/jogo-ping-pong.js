//funções e variáveis da bolinha
let bolinha_x = 300;
let bolinha_y = 200;
let bolinha_diam= 27;
let bolinha_raio= bolinha_diam / 2;
let veloc_b_x= 5;
let veloc_b_y= 5;

function fzr_bolinha(){
  stroke(255)
  circle(bolinha_x,bolinha_y,bolinha_diam);
}

function movi_bolinha(){
  bolinha_x += veloc_b_x;
  bolinha_y += veloc_b_y;
}

function verifica_borda_bolinha(){
  if (bolinha_x + bolinha_raio > width || bolinha_x - bolinha_raio < 0){
    veloc_b_x *= -1;
  }
  if (bolinha_y + bolinha_raio > height || bolinha_y - bolinha_raio <0 ){
      veloc_b_y*= -1;
     }
}
//.....................................


//funções e variáveis das raquetes
let raqt_x= 5;
let raqt_y= 150;
let raqt_x_opnt = 585;
let raqt_y_opnt = 150;
let raqt_l= 10;
let raqt_h= 90;
let veloc_y_opnt;

function fzr_raquetes(x,y){
  stroke(255)
  rect(x, y, raqt_l, raqt_h);
}

function movi_raquete(){
  if(keyIsDown(UP_ARROW)){
    raqt_y-=5
  }
  if(keyIsDown(DOWN_ARROW)){
    raqt_y+=5
  }
}

function movi_raquete_opnt(){
  if(keyIsDown(87)){
    raqt_y_opnt-=5
  }
  if(keyIsDown(83)){
    raqt_y_opnt+=5
  }
}
//.................................


// funcões e variáveis colisão raquete com bolinha
let colidiu = false;

function colisao_raqt(){
  if (bolinha_x - bolinha_raio < raqt_x + raqt_l && bolinha_y - bolinha_raio < raqt_y + raqt_h && bolinha_y + bolinha_raio > raqt_y){
    veloc_b_x *= -1;
  }
}

function colisao_raqt(x,y){
  colidiu =
  collideRectCircle(x, y, raqt_l, raqt_h, bolinha_x, bolinha_y, bolinha_raio);
  if(colidiu){
    veloc_b_x *= -1;
  }
}
//.................................................


//funções e variáveis do placar
let meus_pnts= 0;
let opnt_pnts= 0;

function placar(){
  textAlign(CENTER)
  textSize(16);
  stroke("darkorange")
  fill("darkorange")
  rect(150, 10, 40, 20)
  rect(450,10, 40, 20)
  fill(255);
  text(meus_pnts, 170, 26);
  text(opnt_pnts, 470,26);
}

function marcar_pnt(){
  if (bolinha_x > 585){
    meus_pnts+=1;
  }
  if (bolinha_x < 15) {
    opnt_pnts+=1;
  }
}
//..............................



//corpo do código
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("darkgreen");
  fzr_bolinha();
  movi_bolinha();
  verifica_borda_bolinha();
  fzr_raquetes(raqt_x,raqt_y);
  fzr_raquetes(raqt_x_opnt,raqt_y_opnt);
  movi_raquete();
  movi_raquete_opnt();
  //colisao_raqt();
  colisao_raqt(raqt_x, raqt_y);
  colisao_raqt(raqt_x_opnt, raqt_y_opnt);
  placar();
  marcar_pnt();
}