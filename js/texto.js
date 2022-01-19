class Texto{
    
    
    presentacion(){
        var e=document.getElementById('presentacion');
        var str="";
        if(e.innerHTML==""){
         str="<section><h2>JAPI:editor fotografico</h2>";
                str+="<p>JAPI es un editor fotografico con el cual podras editar fotos de manera rapida con tu voz, pero primero sube una foto</p>"
                str+="<p>Elige si quieres poner un filtro (Editar) o escribir sobre la foto (Pincel)</p>"
             str += "</section>";   
        }
        e.innerHTML=str;
        }

        camara(){
            var e=document.getElementById('camara');
            var str="";
            if(e.innerHTML==""){
             str="<section><h2>Informacion sobre la camara</h2>";
                    str+="<p>Dandole al boton Foto podras hacer una instantanea de lo que ve tu camara web</p>"
                    str+="<p>Para descargarla dale click derecho y a guardar como para poder subirla</p>"
                 str += "</section>";   
            }
            e.innerHTML=str;
            }

            comandos(){
            var e=document.getElementById('comandos');
            var str="";
            if(e.innerHTML==""){
                str="<section><h2>Comandos de voz</h2>";
                        str+="<p>Hay que permitir al navegador el acceso al microfono. Para aplicar un filtro hay que decirlo con la voz</p>"
                        str+="<p>Blanco y negro</p>"
                        str+="<p>Difuminar</p>"
                        str+="<p>Posterizar</p>"
                        str+="<p>Oscurecer</p>"
                        str+="<p>Warhol</p>"
                        str+="<p>Quitar</p>"
                        str+="<p>Descargar</p>"
                    str += "</section>";   
                }
            e.innerHTML=str;
                }
				
			comandos_p(){
            var e=document.getElementById('comandos_p');
            var str="";
            if(e.innerHTML==""){
                str="<section><h2>Comandos de voz</h2>";
                        str+="<p>Hay que permitir al navegador el acceso al microfono. Para aplicar un filtro hay que decirlo con la voz</p>"
                        str+="<p>Derecha: para escoger el color de la derecha</p>"
                        str+="<p>Izquierda: para escoger el color de la izquierda</p>"
                        str+="<p>Aumentar grosor: para aumentar el grosor del pincel</p>"
                        str+="<p>Disminuir grosor: para disminuir el grosor del pincel</p>"
                        str+="<p>Descargar: para descargar la imagen sin el marco superior</p>"
                    str += "</section>";   
                }
            e.innerHTML=str;
                }


    
}

var texto=new Texto();
