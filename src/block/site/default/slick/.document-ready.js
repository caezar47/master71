'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');	
	var objacts = $('[data-slider-slick="slick-objacts"]');	
	var partners = $('[data-slider-slick="slick-partners"]');	
	var gallery = $('[data-slider-slick="slick-gallery"]');	
	var certificates = $('[data-slider-slick="slick-certificates"]');	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
	//var CMS__TPL_PATH = '/tpl';  
	var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span><svg class="icon-svg icon-icon-prev" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#icon-prev"></use></svg></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span><svg class="icon-svg icon-icon-next" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#icon-next"></use></svg></button>';	
	
	$('.slick-cloned .content-block__preview').removeAttr('data-fancybox');
	
	/*header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		//infinite: true, 
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true
	});*/
	gallery.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	objacts.slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: '.slick-btn.is--prev.is--objacts',
		nextArrow: '.slick-btn.is--next.is--objacts',
		slide: '.content-block__slick-item.is--objacts-index',
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	partners.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: '.slick-btn.is--prev.is--partners',
		nextArrow: '.slick-btn.is--next.is--partners',
		slide: '.content-block__slick-item.is--partners-index',
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
		    },
		    {
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 566,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	certificates.slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: '.slick-btn.is--prev.is--certificates',
		nextArrow: '.slick-btn.is--next.is--certificates',
		slide: '.content-block__slick-item.is--certificates-index',
		responsive: [
		    {
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 566,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    }
		]
	});
}); 