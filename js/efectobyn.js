var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split ("&");
var params = {};

for ( var i = 0; i < paramarr.length; i++) {
var tmparr = paramarr[i].split("=");
params[tmparr[0]] = tmparr[1];
}
if (params['foto']) {
console.log('El valor del parámetro variable es: '+params['foto']);
//marco_imagen.src = params['foto'];
} else {
console.log('No se envió el parámetro variable');
}

//processsing
let img;
let speechRec;
let filtroActual = "";
function preload() {
  img = loadImage(params['foto']);
}

function setup() {
  createCanvas(img.width, img.height);
  let lang = navigator.language || 'es';
  speechRec = new p5.SpeechRec(lang,gotSpeech);
  let continuous = true;
  let interim = false;
  speechRec.start(continuous, interim);
  inicializar();
}

function inicializar(){
  image(img, 0, 0);
}

function gotSpeech(){
 if(speechRec.resultValue){
   createP(speechRec.resultString);
 }
}

function vieneDeWarhol(){
  if(filtroActual==="Warhol"){
    clear();
    image(img, 0, 0);
  }
 }

function draw() {
  // draw image first
  
  // then apply a filter
   if (speechRec.resultString === "blanco y negro" || speechRec.resultString === "Blanco y negro") { 
    inicializar();
    vieneDeWarhol();
    filter(GRAY);
    filtroActual = GRAY;
   }
  else if (speechRec.resultString === "difuminar" || speechRec.resultString === "Difuminar") { 
    inicializar();
    vieneDeWarhol();
    filter(BLUR, 5);
    filtroActual = BLUR;
   
  } else if (speechRec.resultString === "oscurecer" || speechRec.resultString === "Oscurecer") { 
    inicializar();
    vieneDeWarhol();
    filter(THRESHOLD);
    filtroActual = THRESHOLD;
  } else if (speechRec.resultString === "posterizar" || speechRec.resultString === "Posterizar") { 
    inicializar();
    vieneDeWarhol();
    filter(POSTERIZE,2);
    filtroActual = POSTERIZE;
    
  } else if (speechRec.resultString === "quitar" || speechRec.resultString === "Quitar") { 
    inicializar();
    vieneDeWarhol();
    filtroActual = "";
  }
    else if (speechRec.resultString === "Warhol" || speechRec.resultString === "warhol") { 
    inicializar();
	  blend(img, 0, 0, img.width, img.height, -100, 0, width, height, MULTIPLY);
	  blend(img, 0, 0, img.width, img.height, 100, 0, width, height, MULTIPLY);
    filtroActual = "Warhol";
 
  } else if (speechRec.resultString === "descargar" || speechRec.resultString === "Descargar"){
    //if(filtroActual !== ""){
      //if(filtroActual !== "Warhol"){
     // filter(filtroActual);
      //}
    //}
    saveCanvas('foto_editada.png');
    speechRec.resultString = "";
  }
}



