// Author:Daniel Neshkoski

$(document).ready(function(){
	$(".drop-hover").hover(function(e){
		$('.drop-caret').toggle();
	});
});

$(document).hover(function () {
    $(".drop-caret").hide();
});