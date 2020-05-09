$( '.navbar-nav a' ).on( 'click', function () {
	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
$(document).ready(function(){
    //sticky menu
	$(".sticky-menu-js").waypoint(function(direction){
		if(direction =="down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
	});
	//mixitup(portfolio section)
	var mixer = mixitup ('.contain');
});
//media query nav
function openNav(){
	document.getElementById("myNav").style.width = "90%";
}
function closeNav(){
	document.getElementById("myNav").style.width = "0";
}
