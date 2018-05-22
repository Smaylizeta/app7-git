// JavaScript Document

$(document).ready(function(e){
    document.addEventListener("deviceready",function(){
		$('#Izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizo hacia la izquierda",function(){"aplicaion 7","ok"});
	});
	$('#Derecha').on("swiperight",function(){
		navigator.notification.confirm("¿Que quieres hacer?",function(op){
			switch(op)
			{
				case 1: 
				navigator.notification.beep(1);
				break;
				
				case 2:
				navigator.notification.vibrate(3000)
				break;
			}
		},"aplicacion 7","Beepear,Vibrar,Cancelar");
	}); //cerrar deslizar Derecha
},false); //cerrar deviceready
});//cerrar document