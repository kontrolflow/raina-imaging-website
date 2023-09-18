$('nav#dropdown').meanmenu();
	
/* Fixed main menu */

$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 5) {
        $('.header-area').removeClass('is_stuck');
    }else{
        $('.header-area').addClass('is_stuck');
    }
});