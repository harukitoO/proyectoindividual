var persona = new Object();

persona.nombre = prompt("ingresa tu nombre");
persona.edad = prompt("ingresa tu edad");

function sel () {
var col = document.getElementById("sel").value;

if (col == 5)cons(col);
if (col == 8)cons(col);

}


function cons (nu){
	
var formu = document.getElementById("formu");
	var texto = document.createTextNode(nu+" x 1");
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

var texto = document.createTextNode(nu+" x 2");
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

var texto = document.createTextNode(nu+" x 3");
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

var texto = document.createTextNode(nu+" x 4");
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

var texto = document.createTextNode(nu+" x 5");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja5 = document.createElement("input");
caja5.setAttribute("type", "text");
caja5.setAttribute("id", "p5");
caja5.setAttribute("value", "");
formu.appendChild(caja5);
var br = document.createElement("br");
formu.appendChild(br);

var texto = document.createTextNode(nu+" x 6");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja6 = document.createElement("input");
caja6.setAttribute("type", "text");
caja6.setAttribute("id", "p6");
caja6.setAttribute("value", "");
formu.appendChild(caja6);
var br = document.createElement("br");
formu.appendChild(br);

var texto = document.createTextNode(nu+" x 7");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja7 = document.createElement("input");
caja7.setAttribute("type", "text");
caja7.setAttribute("id", "p7");
caja7.setAttribute("value", "");
formu.appendChild(caja7);
var br = document.createElement("br");
formu.appendChild(br);

var texto = document.createTextNode(nu+" x 8");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja8 = document.createElement("input");
caja8.setAttribute("type", "text");
caja8.setAttribute("id", "p8");
caja8.setAttribute("value", "");
formu.appendChild(caja8);
var br = document.createElement("br");
formu.appendChild(br);

var texto = document.createTextNode(nu+" x 9");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja9 = document.createElement("input");
caja9.setAttribute("type", "text");
caja9.setAttribute("id", "p9");
caja9.setAttribute("value", "");
formu.appendChild(caja9);
var br = document.createElement("br");
formu.appendChild(br);

var texto = document.createTextNode(nu+" x 10");
label = document.createElement("label");
label.appendChild(texto);
formu.appendChild(label);

caja10 = document.createElement("input");
caja10.setAttribute("type", "text");
caja10.setAttribute("id", "p10");
caja10.setAttribute("value", "");
formu.appendChild(caja10);
var br = document.createElement("br");
formu.appendChild(br);

caja11 = document.createElement("input");
caja11.setAttribute("type", "button");
caja11.setAttribute("id", "p11");
caja11.setAttribute("value", "Resultados");
if (nu == 5) caja11.setAttribute("onClick","result(5)");
else caja11.setAttribute("onClick","result(8)");
formu.appendChild(caja11);

}
function result (num){
	
	var ex = new Object();
	ex.r1 = document.getElementById("p1").value;
	ex.r2 = document.getElementById("p2").value;
	ex.r3 = document.getElementById("p3").value;
	ex.r4 = document.getElementById("p4").value;
	ex.r5 = document.getElementById("p5").value;
	ex.r6 = document.getElementById("p6").value;
	ex.r7 = document.getElementById("p7").value;
	ex.r8 = document.getElementById("p8").value;
	ex.r9 = document.getElementById("p9").value;
	ex.r10 = document.getElementById("p10").value;
	
	switch (num)
	{
		case 5:
		if (ex.r1==5)ex.r1=1, caja.setAttribute("style", "background-color: green");
		else ex.r1=0, caja.setAttribute("style", "background-color: red");
		
		if (ex.r2==10)ex.r2=1, caja2.setAttribute("style", "background-color: green");
		else ex.r2=0, caja2.setAttribute("style", "background-color: red");
		
		if (ex.r3==15) ex.r3=1, caja3.setAttribute("style", "background-color: green");
		else ex.r3=0, caja3.setAttribute("style", "background-color: red");
		
		if (ex.r4==20) ex.r4=1, caja4.setAttribute("style", "background-color: green");
		else ex.r4=0, caja4.setAttribute("style", "background-color: red");
		
		if (ex.r5==25) ex.r5=1, caja5.setAttribute("style", "background-color: green");
		else ex.r5=0, caja5.setAttribute("style", "background-color: red");
		
		if (ex.r6==30) ex.r6=1, caja6.setAttribute("style", "background-color: green");
		else ex.r6=0, caja6.setAttribute("style", "background-color: red");
		
		if (ex.r7==35) ex.r7=1, caja7.setAttribute("style", "background-color: green");
		else ex.r7=0, caja7.setAttribute("style", "background-color: red");
		
		if (ex.r8==40) ex.r8=1, caja8.setAttribute("style", "background-color: green");
		else ex.r8=0, caja8.setAttribute("style", "background-color: red");
		
		if (ex.r9==45) ex.r9=1, caja9.setAttribute("style", "background-color: green");
		else ex.r9=0, caja9.setAttribute("style", "background-color: red");
		
		if (ex.r10==50) ex.r10=1, caja10.setAttribute("style", "background-color: green");
		else ex.r10=0, caja10.setAttribute("style", "background-color: red");
		
	nota = new Function("a", "b", "c", "d", "e", "f", "g", "h","i", "j", "return a+b+c+d+e+d+f+g+i+j ");
	ex.nota=nota(ex.r1,ex.r2, ex.r3, ex.r4, ex.r5,ex.r6, ex.r7, ex.r8, ex.r9,ex.r10);
	alert("tu nota es "+ ex.nota)
	break;
	case 8:
	if (ex.r1==8)ex.r1=1, caja.setAttribute("style", "background-color: green");
		else ex.r1=0, caja.setAttribute("style", "background-color: red");
		
		if (ex.r2==16)ex.r2=1, caja2.setAttribute("style", "background-color: green");
		else ex.r2=0, caja2.setAttribute("style", "background-color: red");
		
		if (ex.r3==24) ex.r3=1, caja3.setAttribute("style", "background-color: green");
		else ex.r3=0, caja3.setAttribute("style", "background-color: red");
		
		if (ex.r4==32) ex.r4=1, caja4.setAttribute("style", "background-color: green");
		else ex.r4=0, caja4.setAttribute("style", "background-color: red");
		
		if (ex.r5==40) ex.r5=1, caja5.setAttribute("style", "background-color: green");
		else ex.r5=0, caja5.setAttribute("style", "background-color: red");
		
		if (ex.r6==48) ex.r6=1, caja6.setAttribute("style", "background-color: green");
		else ex.r6=0, caja6.setAttribute("style", "background-color: red");
		
		if (ex.r7==56) ex.r7=1, caja7.setAttribute("style", "background-color: green");
		else ex.r7=0, caja7.setAttribute("style", "background-color: red");
		
		if (ex.r8==64) ex.r8=1, caja8.setAttribute("style", "background-color: green");
		else ex.r8=0, caja8.setAttribute("style", "background-color: red");
		
		if (ex.r9==72) ex.r9=1, caja9.setAttribute("style", "background-color: green");
		else ex.r9=0, caja9.setAttribute("style", "background-color: red");
		
		if (ex.r10==80) ex.r10=1, caja10.setAttribute("style", "background-color: green");
		else ex.r10=0, caja10.setAttribute("style", "background-color: red");
		
	nota = new Function("a", "b", "c", "d", "e", "f", "g", "h","i", "j", "return a+b+c+d+e+d+f+g+i+j ");
	ex.nota=nota(ex.r1,ex.r2, ex.r3, ex.r4, ex.r5,ex.r6, ex.r7, ex.r8, ex.r9,ex.r10);
	alert("tu nota es "+ ex.nota)
	break;
	}}
	
	function tab () {
	var formu = document.getElementById("tab");
nume = prompt("de que numero desea la tabla? ")
var reg = /[0-9]{1,}/;
if(reg.test(nume)){
	
for (i=0; i<10; i++){
	var texto = document.createTextNode(nume +" x "+ (i+1));
label = document.createElement("label");
label.setAttribute("for", "nombre");
label.appendChild(texto);
formu.appendChild(label);

caja = document.createElement("input");
caja.setAttribute("type", "text");
caja.setAttribute("value", nume*(i+1));
formu.appendChild(caja);
var br = document.createElement("br");
formu.appendChild(br);
}
}
}