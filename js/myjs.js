// Author:Daniel Neshkoski

$(document).ready(function(){
	$(".dropdown-large").on("click",function(e){
		$('.drop-caret').toggle();
	});
});

$(document).on("click", function () {
    $(".drop-caret").hide();
});