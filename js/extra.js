$(function(){
	var a = 0;
	$('.resp-menu').click(function(){
		$(this).next('ul').slideToggle(1000);
	});
});

$(document).ready(function () {

    $('#fadeandscale').popup({
        pagecontainer: '.container',
        transition: 'all 0.3s'
    });

});

