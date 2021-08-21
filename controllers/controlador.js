let etiqueta=document.getElementById("boton1");   
let foto=document.getElementById("foto1")
let cancion=document.getElementById("cancion1")
let titulo=document.getElementById("titulo1")

 
let foto=document.getElementById("foto2")
let cancion=document.getElementById("cancion2")
let titulo=document.getElementById("titulo2")


etiqueta.addEventListener("click",perroGuardian1);

function perroGuardian1(){
    foto.src="img/foto1.png";
    audio.src="audio/cancion1.mp3";
    titulo.textContent="Lluvia de Noviembre";
    titulo.classList("");
}
etiqueta.addEventListener("click",perroGuardian2);

function perroGuardian2(){
    foto.src="img/foto2.png";
    audio.src="audio/cancion2.mp3";
    titulo.textContent="Dulce niño mio";
    titulo.classList("");
}
function perroGuardian3(){
    foto.src="img/foto3.png";
    audio.src="audio/cancion3.mp3";
    titulo.textContent="Bienvenido a la jungla";
    titulo.classList("");
}