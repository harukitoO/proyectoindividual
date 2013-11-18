var cad;
function vid (num){
	switch (num){
		case 1:
		cad = "../flash/mat1.mp4"
		mostrar(cad);
		break
		
		case 2:
		cad = "../flash/mat2.mp4"
		mostrar(cad);
		break
		
		case 3:
		cad = "../flash/mat3.mp4"
		mostrar(cad);
		break
		
	}
}
function mostrar(cad){
document.write("<link rel = \"stylesheet\" type = \"text/css\" href=\"../estilo.css\">");
document.write("<div class = \"principal\">");
document.write("<table><tr>");
document.write("<td width = \"25%\"><a href=\"index.html\" style=\"text-decoration:none; color:#0FF\"><img src=\"../img/mariposareal.gif\" width = \"80%\" height = \"50%\" style = \"border-radius: 10pt;\" /></td>");
document.write("<td><a href=\"yo.html\" style=\"text-decoration:none; color:#0FF\"><img src=\"../img/muchoscola.gif\"><br>click para ver la informaci&oacute;n de la autora</a></td>");
document.write("<td><center><p class=\"titulo\" style=\"color:#0FF\">" +localStorage.msg+"</p></center></td>");
document.write("</tr></table>");
document.write("</div>");
document.write("<div id = \"conmenu\"><ul id = \"menu\"><li><a href=\"../index.html\" class=\"menu_left\">inicio</a></li>");
document.write("<li><a href=\"ing.html\">Ingl&eacute;s</a></li><li><a href=\"mat.html\">Matematicas</a></li>");
document.write("<li><a href=\"ext.html\" class = \"menu_right\">Extras</a></li></ul></div>");
document.write("<div class = \"principal\" style=\" height:130%\"");
document.write("<center><table align=\"center\" width=\"80%\">");
document.write("<tr ><td class=\"video\">");
document.write("<video src="+cad+" controls width=\"750px\" height=\"450px\"></video></td>");
document.write("</tr><tr><td class=\"descrip\"> <a href=\"matvideos.html\"><img src=\"../img/reg.gif\"></a></td></tr></table></center>");
document.write("</div>");
document.write("<footer><hr align=\"center\" color=\"#000\" size=\"2\" /><p>&copy; PARCHITOS&trade; | Todos los derechos reservados | Lenguaje Interpretado al cliente</p></footer>");

}