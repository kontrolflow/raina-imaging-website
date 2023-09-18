/******************** 1.1 PRELOADER ********************/
    // will first fade out the loading animation
	var $prewrp = $('.preloader-wrap'),
		$loader = $( '.loader');
		

    setTimeout(() => {
        $prewrp.fadeOut();
    }, 1500)
    // will fade out the whole DIV that covers the website.
    $loader.delay(1500).fadeOut("slow");