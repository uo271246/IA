const marco_imagen = document.getElementById("marco_imagen");
var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split ("&");
var params = {};

for ( var i = 0; i < paramarr.length; i++) {
var tmparr = paramarr[i].split("=");
params[tmparr[0]] = tmparr[1];
}
if (params['foto']) {
console.log('El valor del parámetro variable es: '+params['foto']);
marco_imagen.src = params['foto'];
} else {
console.log('No se envió el parámetro variable');
}

//processing
boton_blanco_y_negro.addEventListener("change",(e) => {
    
});
