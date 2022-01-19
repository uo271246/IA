var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split ("&");
var params = {};

for ( var i = 0; i < paramarr.length; i++) {
var tmparr = paramarr[i].split("=");
params[tmparr[0]] = tmparr[1];
}
if (params['foto']) {
console.log('El valor del parametro variable es: '+params['foto']);
//marco_imagen.src = params['foto'];
} else {
console.log('No se envio el parametro variable');
}

//processsing
let img;
let speechRec;
let fotoIntroducida = false;
function preload() {
  img = loadImage(params['foto']);
}


function setup() {
 
  wheight=5;
  posicion=0;
  blanco = color(255);
  negro = color(0);
  value = color(255);
  rojo = color(255,0,0,128);
  verde = color(0,255,0,128);
  azul = color(0,0,255,128);
  c2 = color(0,128,255);
  c3= color(255,0,255);
  c4= color(128,255,255);
  c=color(0);
  cs=[];
  background(blanco);
  stroke(negro);
  frameRate(30);
  strokeWeight(wheight);
  noStroke();
  smooth();
  noCursor();
  cs[0]=c;
  cs[1]=rojo;
  cs[2]=verde;
  cs[3]=azul;
  cs[4]=c3;
  cs[5]=c4;
  
  let lang = navigator.language || 'es';
  speechRec = new p5.SpeechRec(lang,gotSpeech);
  let continuous = true;
  let interim = false;
  speechRec.start(continuous, interim);
  
}

function gotSpeech(){
  if(speechRec.resultValue){
    createP(speechRec.resultString);
  }
 }

function draw(){
  //barra
  introduccionDeFoto();
  cursor(HAND);
  noStroke();
  fill(110);
  rect(0,0,1500,60); 
  fill(cs[posicion]);
  square(10,10,25);
  fill(255);
  circle(100,24,wheight);
  //Control de Extremos
  if(mouseIsPressed && mouseButton==LEFT && mouseX> 30 && mouseX<1470 && mouseY>85 && mouseY<1490 ){
    stroke(cs[posicion]);
    line(pmouseX,pmouseY,mouseX,mouseY);
    noStroke();
  }
  
  voz();
}

function introduccionDeFoto(){
  if(!fotoIntroducida){
    createCanvas(img.width,img.height+60);
    image(img, 0,60);
    fotoIntroducida = true;
    console.log(img.width);
    console.log(img.height);
    
    
  }
}
  

function voz() {
   
      if(speechRec.resultString ==="izquierda" || speechRec.resultString ==="Izquierda"){

        if(posicion>0){
         posicion=posicion-1;
         stroke(cs[posicion]);
         line(pmouseX,pmouseY,mouseX,mouseY);
        }
        else{
          posicion=5;
          stroke(cs[posicion]);
          line(pmouseX,pmouseY,mouseX,mouseY);
          
        }
        speechRec.resultString = "";
      }
      else if(speechRec.resultString ==="derecha" || speechRec.resultString ==="Derecha"){
        if(posicion<5){
          posicion=posicion+1;
          stroke(cs[posicion]);
          line(pmouseX,pmouseY,mouseX,mouseY);
          
        }
        else{
          posicion=0;
          stroke(cs[posicion]);
          line(pmouseX,pmouseY,mouseX,mouseY);
          
        
        }
        stroke(cs[posicion]);
        line(pmouseX,pmouseY,mouseX,mouseY);
        speechRec.resultString ="";
      }
      //Aumento de Tamaño
  
      else if ((speechRec.resultString ==="aumentar grosor" || 
      speechRec.resultString ==="Aumentar grosor")&&   wheight < 40) {
      wheight=wheight+5;
      strokeWeight(wheight);
      speechRec.resultString = "";
     }
      else if((speechRec.resultString ==="disminuir grosor" || 
      speechRec.resultString ==="Disminuir grosor")&&  wheight>=10) {
      wheight=wheight-5;
      strokeWeight(wheight);
      speechRec.resultString = "";
      }
    
       else if(speechRec.resultString ==="descargar" ||
	   speechRec.resultString ==="Descargar"){
        //line(80, 20, 20, 80);
        let p = get(0, 60, img.width, img.height);
        save(p);
		speechRec.resultString = "";
        //save("IA.tga");
        
      }
    
}