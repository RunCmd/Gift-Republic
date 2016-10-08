// Author:Daniel Neshkoski

$(document).ready(function(){
	$(".drop-hover").hover(function(e){
		$('.drop-caret').toggle();
	});
	$(".dropdown-menu-large").hover(function(e){
		$('.drop-caret').show();
	});
});

$(document).hover(function () {
    $(".drop-caret").hide();
});


