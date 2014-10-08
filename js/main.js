$(document).ready(function() {
	$('#headerMobile').click(function(event) {
		event.preventDefault();
		GLOBALCONTROLS.mobileMenu();
	});

	$('#globalBackToTop a').click(function(event) {
		event.preventDefault();
		GLOBALCONTROLS.backToTop();
	});

	GLOBALCONTROLS.setPageWidth();

	$(window).resize(function(){
		GLOBALCONTROLS.setPageWidth();
	});

	$(window).scroll(function() {
		GLOBALCONTROLS.getPageScroll();
	});
	
});

var GLOBALCONTROLS = {
	pageWidth : window.innerWidth || document.documentElement.clientWidth,
	pageScroll : 0,
	isDesktop : false,
	mobileScrollUp : false,
	mobileMenu : function() {
		var element = $('#mainMenu');
		if(Modernizr.csstransitions === false) {
			if(element.hasClass('active')) {
				element.removeClass('active');
				element.slideUp();
			} else {
				element.addClass('active');
				element.slideDown();
			}
		} else {
			if(element.hasClass('active')) {
				element.removeClass('active');
			} else {
				element.addClass('active');
			}
		}
	},
	setPageWidth : function() {
		var tempHolder;
		tempHolder = GLOBALCONTROLS.isDesktop;
		GLOBALCONTROLS.pageWidth = window.innerWidth || document.documentElement.clientWidth;
		if (GLOBALCONTROLS.pageWidth > 767) {
			GLOBALCONTROLS.isDesktop = true;
			if (GLOBALCONTROLS.mobileScrollUp === true) {
				GLOBALCONTROLS.mobileToTop(0);
			}
		} else {
			GLOBALCONTROLS.isDesktop = false;
		}
		if (tempHolder !== GLOBALCONTROLS.isDesktop && GLOBALCONTROLS.isDesktop === true) {
			$('.JQueryClear').attr('style', ' ').removeClass('active');
		}
	},
	getPageScroll : function() {
	    var scrollTop = 0;
	    if (typeof(window.pageYOffset) === 'number') {
	        scrollTop = window.pageYOffset;
	        if ((scrollTop > 50 && GLOBALCONTROLS.pageScroll > scrollTop) && 
	        (GLOBALCONTROLS.isDesktop === false && GLOBALCONTROLS.mobileScrollUp === false)) {
	        	GLOBALCONTROLS.mobileToTop(1);
	        } else if ((scrollTop > 50 && GLOBALCONTROLS.pageScroll < scrollTop) && 
	        (GLOBALCONTROLS.isDesktop === false && GLOBALCONTROLS.mobileScrollUp === true)) {
	        	GLOBALCONTROLS.mobileToTop(0);
	        } else if (scrollTop <= 50 && (GLOBALCONTROLS.isDesktop === false && GLOBALCONTROLS.mobileScrollUp === true)) {
	        	GLOBALCONTROLS.mobileToTop(0);
	        }
	    }
	    $('#globalBackToTop').css('top', scrollTop + 5);
	    GLOBALCONTROLS.pageScroll = scrollTop;
	},
	mobileToTop : function (state) {
		if (state === 1) {
			$('#globalBackToTop').fadeIn();
			GLOBALCONTROLS.mobileScrollUp = true;
		} else if (state === 0) {
			$('#globalBackToTop').fadeOut();
			GLOBALCONTROLS.mobileScrollUp = false;
		}
	},
	backToTop : function() {
		$("body,html").animate({
		      scrollTop: 0
		 },500, "swing");
	}
};

var slider1, slider2;

$(document).ready(function() {
    slider1 = new iceSlider.hammerSlider({
        /* obrigatory */
        wrapper : '#slider1Wrapper',
        container : '#slider1Container', 
        item : '.slider1Item', 
        /* optionals */
        itemActiveClass : 'active',
        leftArrow : '#slider1ArrowL',
        rightArrow : '#slider1ArrowR',
        arrowInactiveClass : 'inactive',
        dots : '#slider1Dots',
        dotActiveClass : 'slider1-currentDot',
        autoSlide : true,
        setTime : 5000
    });
    slider1.init();
});    

