var lol = 2;
var gen;
if (gen == ""){
do {
gen = prompt("ingresa tu genero");
if (gen== "femenino" || gen=="f" || gen =="F" || gen =="FEMENINO"|| gen =="Femenino" || gen =="niña"){
	nombre = prompt("ingresa tu nombre de usuario");
	localStorage.msg = "Bienvenida " + nombre+ "!!!!";
	lol=2;
}
else if (gen== "masculino" || gen=="m" || gen =="M" || gen =="MASCULINO" || gen =="Masculino" || gen =="niño"){
	nombre = prompt("ingresa tu nombre de usuario");
	localStorage.msg = "Bienvenido " + nombre+ "!!!!";
	lol=2;
	
}
else {
	alert("ingresa un genero correcto");
	lol = 1 ;
}
}
while(lol==1);
}