var persona = new Object();

persona.nombre = prompt("ingresa tu nombre");
persona.edad = prompt("ingresa tu edad");

function sel () {
var col = document.getElementById("sel").value;

if (col == 1){
	cons();
}
if (col == 2){
	med();
}
if (col == 3){
	
}

}
function med (){
		
var formu = document.getElementById("formu");
	var texto = document.createTextNode("How do you said TIO in inglish");
label = document.createElement("label");
label.setAttribute("for", "nombre");
label.appendChild(texto);
formu.appendChild(label);

caja = document.createElement("input");
caja.setAttribute("type", "text");
caja.setAttribute("id", "p1");
caja.setAttribute("value", "");
formu.appendChild(caja);
var br = document.createElement("br");
formu.appendChild(br);

var texto = document.createTextNode("How do you said BLACK in spanish");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja2 = document.createElement("input");
caja2.setAttribute("type", "text");
caja2.setAttribute("id", "p2");
caja2.setAttribute("value", "");
formu.appendChild(caja2);
var br = document.createElement("br");
formu.appendChild(br);

var texto = document.createTextNode("How do you said SIETE in inglish");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja3 = document.createElement("input");
caja3.setAttribute("type", "text");
caja3.setAttribute("id", "p3");
caja3.setAttribute("value", "");
formu.appendChild(caja3);
var br = document.createElement("br");
formu.appendChild(br);

var texto = document.createTextNode("How do you said MONDAY in spanish");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja4 = document.createElement("input");
caja4.setAttribute("type", "text");
caja4.setAttribute("id", "p4");
caja4.setAttribute("value", "");
formu.appendChild(caja4);
var br = document.createElement("br");
formu.appendChild(br);


caja5 = document.createElement("input");
caja5.setAttribute("type", "button");
caja5.setAttribute("id", "p5");
caja5.setAttribute("value", "Resultados");
caja5.setAttribute("onClick","result(2)");
formu.appendChild(caja5);
}
function cons (){
	
var formu = document.getElementById("formu");
	var texto = document.createTextNode("como se dice VERDE en ingles");
label = document.createElement("label");
label.setAttribute("for", "nombre");
label.appendChild(texto);
formu.appendChild(label);

caja = document.createElement("input");
caja.setAttribute("type", "text");
caja.setAttribute("id", "p1");
caja.setAttribute("value", "");
formu.appendChild(caja);
var br = document.createElement("br");
formu.appendChild(br);

var texto = document.createTextNode("como se dice POLLO en ingles");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja2 = document.createElement("input");
caja2.setAttribute("type", "text");
caja2.setAttribute("id", "p2");
caja2.setAttribute("value", "");
formu.appendChild(caja2);
var br = document.createElement("br");
formu.appendChild(br);

var texto = document.createTextNode("como se dice HERMANO en ingles");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja3 = document.createElement("input");
caja3.setAttribute("type", "text");
caja3.setAttribute("id", "p3");
caja3.setAttribute("value", "");
formu.appendChild(caja3);
var br = document.createElement("br");
formu.appendChild(br);

var texto = document.createTextNode("como se dice PERRO en ingles");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja4 = document.createElement("input");
caja4.setAttribute("type", "text");
caja4.setAttribute("id", "p4");
caja4.setAttribute("value", "");
formu.appendChild(caja4);
var br = document.createElement("br");
formu.appendChild(br);


caja5 = document.createElement("input");
caja5.setAttribute("type", "button");
caja5.setAttribute("id", "p5");
caja5.setAttribute("value", "Resultados");
caja5.setAttribute("onClick","result(1)");
formu.appendChild(caja5);

}
function result (num){
	var ex = new Object();
	ex.r1 = document.getElementById("p1").value;
	ex.r2 = document.getElementById("p2").value;
	ex.r3 = document.getElementById("p3").value;
	ex.r4 = document.getElementById("p4").value;
	switch (num)
	{
		case 1:
		if (ex.r1=="green")ex.r1=2.5, caja.setAttribute("style", "background-color: green");
		else ex.r1=0, caja.setAttribute("style", "background-color: red");
		
		if (ex.r2=="chicken")ex.r2=2.5, caja2.setAttribute("style", "background-color: green");
		else ex.r2=0, caja2.setAttribute("style", "background-color: red");
		
		if (ex.r3=="brother") ex.r3=2.5, caja3.setAttribute("style", "background-color: green");
		else ex.r3=0, caja3.setAttribute("style", "background-color: red");
		
		if (ex.r4=="dog") ex.r4=2.5, caja4.setAttribute("style", "background-color: green");
		else ex.r4=0, caja4.setAttribute("style", "background-color: red");
	nota = new Function("a", "b", "c", "d", "return a+b+c+d ");
	ex.nota=nota(ex.r1,ex.r2, ex.r3, ex.r4);
	alert("tu nota es "+ ex.nota)
	break;
	case 2:
	if (ex.r1=="auncle")ex.r1=2.5, caja.setAttribute("style", "background-color: green");
		else ex.r1=0, caja.setAttribute("style", "background-color: red");
		
		if (ex.r2=="negro")ex.r2=2.5, caja2.setAttribute("style", "background-color: green");
		else ex.r2=0, caja2.setAttribute("style", "background-color: red");
		
		if (ex.r3=="seven") ex.r3=2.5, caja3.setAttribute("style", "background-color: green");
		else ex.r3=0, caja3.setAttribute("style", "background-color: red");
		
		if (ex.r4=="lunes") ex.r4=2.5, caja4.setAttribute("style", "background-color: green");
		else ex.r4=0, caja4.setAttribute("style", "background-color: red");
	nota = new Function("a", "b", "c", "d", "return a+b+c+d ");
	ex.nota=nota(ex.r1,ex.r2, ex.r3, ex.r4);
	alert("tu nota es "+ ex.nota)
	break;
	}}