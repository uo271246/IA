const file_a_subir = document.getElementById("boton_subir_imagen");
const boton_editar = document.getElementById("boton_editar");
const boton_pincel = document.getElementById("boton_pincel");
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dc1p7fesg/image/upload";
const CLOUDINARY_PRESET = "fskmge5j";
var foto = null;

console.log("Entra bien");
file_a_subir.addEventListener("change",(e) => {
	var marco_imagen = document.getElementById("imagen_pre_subida");
  //      console.log(e);
    //    console.log();
        foto = e.target.files[0];
        //console.log(foto);
        marco_imagen.src = URL.createObjectURL(foto);
        if(foto || marco_imagen.src){
            boton_editar.addEventListener("click", async (e) => {
              //  console.log(foto);
                console.log("listo para enviar");
                const formData = new FormData();
                formData.append('file',foto);
                formData.append('upload_preset',CLOUDINARY_PRESET);
                const res = await axios.post(CLOUDINARY_URL,formData, {
                  headers: {
                    'Content-Type': 'multipart/from-data'
                  }
                });
                console.log(res);
                var url_destino = "edicion.html?foto="+res.data.url;
                boton_editar.href = url_destino;
                console.log(url_destino);
            });
			
			boton_pincel.addEventListener("click", async (e) => {
              //  console.log(foto);
                console.log("listo para enviar");
                const formData = new FormData();
                formData.append('file',foto);
                formData.append('upload_preset',CLOUDINARY_PRESET);
                const res = await axios.post(CLOUDINARY_URL,formData, {
                  headers: {
                    'Content-Type': 'multipart/from-data'
                  }
                });
                console.log(res);
                var url_destino = "pincel.html?foto="+res.data.url;
                boton_pincel.href = url_destino;
                console.log(url_destino);
            });
        }
});



