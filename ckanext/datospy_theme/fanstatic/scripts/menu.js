
$(document).ready(function(){
	//menu usuario
  $("#botonUser").click(function () {
      $("#panelUser").each(function() {
        displaying = $(this).css("display");
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
           $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");
          });
        }
      });
    });

  //menu principal
  $("#boton1").click(function(){

  		$('#panel2').attr("style","display:none;");
		$("#boton2").parents().removeClass("active");
		
		$("#panel1").slideToggle("slow");
		$(this).parents().toggleClass("active"); return false;
		
	}); 

  $("#boton2").click(function(){
		
		$('#panel1').attr("style","display:none;");
		$("#boton1").parents().removeClass("active");

		$("#panel2").slideToggle("slow");
		$(this).parents().toggleClass("active"); return false;

	}); 

	if(window.location.href.indexOf("dataset") > -1 || window.location.href.indexOf("organization") > -1 || window.location.href.indexOf("group") > -1 || window.location.href.indexOf("about") > -1) {
       $('#panel1').attr("style","display:block;");
       $("#boton1").parents().addClass("active");
    }

    var pathname = window.location.pathname;
  var loginpath = "http://www.datos.org.py/user/login?destination=";
  $("#loginRedirect").attr("href", loginpath.concat(pathname));

});

