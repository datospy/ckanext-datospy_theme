$(document).ready(function(){$("#botonUser").click(function(){$("#panelUser").each(function(){displaying=$(this).css("display");if(displaying=="block"){$(this).fadeOut("slow",function(){$(this).css("display","none")})}else{$(this).fadeIn("slow",function(){$(this).css("display","block")})}})});$("#boton1").click(function(){$("#panel2").attr("style","display:none;");$("#boton2").parents().removeClass("active");$("#panel1").slideToggle("slow");$(this).parents().toggleClass("active");return false});$("#boton2").click(function(){$("#panel1").attr("style","display:none;");$("#boton1").parents().removeClass("active");$("#panel2").slideToggle("slow");$(this).parents().toggleClass("active");return false});if(window.location.href.indexOf("dataset")>-1||window.location.href.indexOf("organization")>-1||window.location.href.indexOf("group")>-1||window.location.href.indexOf("about")>-1){$("#panel1").attr("style","display:block;");$("#boton1").parents().addClass("active")}
$(".inline").colorbox({inline:true, width:"50%"});var pathname = window.location.pathname;var loginpath = "http://www.datos.org.py/user/login?destination=";  $("#loginRedirect").attr("href", loginpath.concat(pathname));
});