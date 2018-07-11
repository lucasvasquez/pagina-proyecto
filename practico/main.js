function enviarMensaje() {
	alert("Se envio correctamente el mensaje");
}

window.addEventListener("scroll",function(event){
	
	if (window.scrollY > 110) {
		document.getElementById("boton_arriba").style.display = "block";
	} else {
		document.getElementById("boton_arriba").style.display = "none";
	}
});
function arriba(){
	window.scroll(0, 0);
}