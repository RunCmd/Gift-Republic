// Author:Daniel Neshkoski

$(document).ready(function(){
	$(".dropdown-large").hover(function(e){
		$('.drop-caret').toggle();
	});
});

$(document).hover(function () {
    $(".drop-caret").hide();
});