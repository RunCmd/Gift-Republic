// Author:Daniel Neshkoski

$(document).ready(function(){
	$(".drop-hover").hover(function(e){
		$('.drop-caret').toggle();
	});
});

$(document).hover(function () {
    $(".drop-caret").hide();
});

$(document).ready(function(){
	$(".drop-hover").click(function(e){
		$('.dropdown-menu-large').toggle();
	});
});

$(document).click(function () {
    $(".dropdown-menu-large").hide();
});