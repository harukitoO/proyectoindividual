
function dati(){
	var vec =  new Array(4);
	var user = new Object();
	
	user.nombre = document.frmcontactos.txtnom.value;
	user.edad = document.frmcontactos.txted.value;
	user.correo = document.frmcontactos.txtcorreo.value;
	user.genero = document.frmcontactos.selgen.value;
	user.numero = document.frmcontactos.txtnum.value;
	var reg = /[0-9]{1,}/;
		if(reg.test(user.edad)){
			var reg=/[A-Za-z]/;
			if(reg.test(user.nombre)){
			  var reg= /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
 				 if(reg.test(user.correo)){
	  				 var reg= /^[0-9]{4}-[0-9]{4}$/;
  						if(reg.test(user.numero)){
	vec[0] = user.nombre;
	vec[1] = user.edad
	vec[2] = user.correo
	vec[3] = user.numero
	vec[4] = user.genero
	var len = vec.pop()
	var lar = vec.length
	var lir = vec.push();
	alert("primer dato registrado "+ len)
	alert("ultimo dato registrado "+ lir)
	alert("tus datos ocupan "+ lar+ " espacios de memoria")
	
  }
  else alert("numero de telefono Incorrecto (1234-1234)");
  }
   else alert("Correo Electronico Incorrecto");
  
  }
   else alert("Nombre Incorrecto (solo letras)");
			}
			else alert("edad incorrecta (solo numeros)");
}