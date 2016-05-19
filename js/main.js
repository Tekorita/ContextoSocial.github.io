(function(){
		// Inicializamos el navbar
		$(".button-collapse").sideNav();
		// Inicializamos el dropdown
		$('.dropdown-button').dropdown({
		    inDuration: 500,
		    outDuration: 500,
		    constrain_width: true, // Does not change width of dropdown to that of the activator
		    hover: true, // Activate on hover
		    gutter: 0, // Spacing from edge
		    belowOrigin: true, // Displays dropdown below the button
		    alignment: 'left' // Displays dropdown with edge aligned to the left of button
		    }
		);
		// Inicializamos el slideshow
		  $(document).ready(function(){
		      $('.slider').slider({full_width: true});
		    });
		// Inicializamos el Collapsible
		$(document).ready(function(){
		    $('.collapsible').collapsible({
		      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
		    });
		});
      

		  // Funcion para el menu fixed

		  var loguito = document.getElementById("logo");

		  $(document).ready(function(){
		  		var altura = $('.menu').offset().top;
		  		// alert(altura);

		  		$(window).on('scroll', function(){
		  			if ($(window).scrollTop() > altura ){
		  				$('.menu').addClass("menu-fixed");
		  				$('.menu').addClass("z-depth-2");
		  				loguito.setAttribute("src", "imagenes/logo-nav.png");

		  			}else{
		  				$('.menu').removeClass("menu-fixed");
		  				$('.menu').removeClass("z-depth-2");
		  				loguito.setAttribute("src", "imagenes/logo-navv.png");
		  			}

		  		});
		  });

		  //  // Funcion para el aside fixed

		  // $(document).ready(function(){
		  // 		var altura2 = $('.aside-p').offset().top;
		  // 		// alert(altura);

		  // 		$(window).on('scroll', function(){
		  // 			if ($(window).scrollTop() > altura2 ){
		  // 				$('.aside-p').addClass("aside-fixed");
		  // 			}else{
		  // 				$('.aside-p').removeClass("aside-fixed");
		  // 			}
		  // 		});
		  // });
}());