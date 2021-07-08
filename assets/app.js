$(document).ready(function(){/* - - - - - - -        init inputmask       - - - - - - - - */// $('[type="tel"]').inputmask('+38 (999) 999 99 99');
/* - - - - - - -        init fancybox       - - - - - - - - */$("[data-fancybox]").fancybox({mobile:{clickContent:"close",clickSlide:"close"}});/* - - - - - - -        isValidEmail       - - - - - - - - */function isValidEmail(email){return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)}/* - - - - - - -        valid subscribe       - - - - - - - - */$(document).on("blur",".subscribe [type=\"email\"]",function(){//has-error
var email=$(this).val();if(email===""){$(this).parent().removeClass("has-error has-success")}else if(isValidEmail(email)){$(this).parent().removeClass("has-error").addClass("has-success")}else{$(this).parent().removeClass("has-success").addClass("has-error");$(this).closest("form").submit(function(e){e.stopPropagation()})}});//- - - - - - - - - - - - - - - - - - - - - -            init select2             - - - - - - - - - - - - - - - - - - - - - -
$(".js-select").select2({language:"en",width:"100%",minimumResultsForSearch:-1});$(".js-select-xs").select2({language:"en",width:"100%",minimumResultsForSearch:-1,containerCssClass:"select-xs",dropdownCssClass:"select-xs-dropdown"});/* - - - - - - -        header show/hide       - - - - - - - - */function showHeader(){var $header=$(".header"),top=$(window).scrollTop();if(top>$header.innerHeight()){$header.addClass("show")}else{$header.removeClass("show")}}$(window).on("scroll",function(){showHeader()});showHeader();/* - - - - - - -        catalog menu show/hide       - - - - - - - - */$(document).on("mouseenter",".header.show .brand-list ul li a.active",function(){if($(window).width()>=1200){$(".header-bottom").addClass("show")}});$(document).on("mouseleave",".header",function(){if($(window).width()>=1200){$(".header-bottom").removeClass("show")}});/* - - - - - - -        modal menu toggle       - - - - - - - - */$(document).on("click",".js-modal-menu-open",function(){$("body").addClass("no-scroll");$(".search-modal").removeClass("show").height("");$(".modal-menu").addClass("show");if($(window).width()<768){$(".logo").addClass("show")}if($(window).width()<580){$(".location").addClass("show")}});$(document).on("click",".js-modal-menu-close",function(){$("body").removeClass("no-scroll");$(".modal-menu").removeClass("show");if($(window).width()<768){$(".logo").removeClass("show")}if($(window).width()<580){$(".location").removeClass("show")}});$(window).on("resize",function(){if($(window).width()>=768){$(".logo").removeClass("show")}if($(window).width()>=580){$(".location").removeClass("show")}});/* - - - - - - -        head slider       - - - - - - - - */$(document).on("click",".top-menu > ul > li > a",function(e){var $parent=$(this).closest("li"),$submenu=$parent.find("ul");if($submenu.length){e.preventDefault();if($parent.hasClass("show")){$parent.removeClass("show");$submenu.slideUp(300)}else{$parent.addClass("show");$submenu.slideDown(300)}}});/* - - - - - - -        catalog menu toggle       - - - - - - - - */$(document).on("click",".js-catalog-menu-toggle",function(){var $parent=$(".catalog-menu__toggle");if(!$parent.hasClass("show")){$parent.addClass("show");$(".catalog-menu").slideDown(300)}else{$parent.removeClass("show");$(".catalog-menu").slideUp(300)}});/* - - - - - - -        catalog menu modal toggle       - - - - - - - - */$(document).on("click",".js-catalog-menu-modal-toggle",function(){var $parent=$(this).closest("li");if(!$parent.hasClass("show")){$parent.addClass("show").find(".catalog-menu__modal").slideDown(300)}else{$parent.removeClass("show").find(".catalog-menu__modal").slideUp(300)}});/* - - - - - - -        catalog menu modal category toggle       - - - - - - - - */$(document).on("click",".js-catalog-menu-category-toggle",function(){var $parent=$(this).closest(".catalog-menu__modal-box");if(!$parent.hasClass("show")){$parent.addClass("show").find(".catalog-menu__modal-list").slideDown(300)}else{$parent.removeClass("show").find(".catalog-menu__modal-list").slideUp(300)}});$(window).on("resize",function(){if($(window).width()>=1200){$(".catalog-menu__toggle, .catalog-menu > ul > li, .catalog-menu__modal-box").removeClass("show");$(".catalog-menu, .catalog-menu__modal, .catalog-menu__modal-list").css("display","")}});/* - - - - - - -        head slider       - - - - - - - - */




    var durationList = $('.js-main_slider_item').map(function(index, item) {
        return item.getAttribute('data-duration');
    });


    $(".js-head-slider").on('init', function(event, slick){
       var cur_sl =slick.currentSlide;
       setTimeout(function () {
        if ($("#slick-slide0"+cur_sl + " video").length) {

            var vid = $("#slick-slide0"+cur_sl).find('video')

            vid.get(0).currentTime=0;
            vid.get(0).play();

            function progressLoop() {
                setInterval(function () {
                    //progress.value = Math.round((vid.get(0).currentTime / vid.get(0).duration) * 100);
                    //var current_t = Math.round(vid.get(0).currentTime) + " seconds";
                    if (Math.round(vid.get(0).currentTime) == Math.round(vid.get(0).duration)) {
                        $(".js-head-slider").slick('slickNext');
                        // console.log(vid.get(0).duration);
                        // console.log(vid.get(0).currentTime);
                    }
                });
            }
            progressLoop();
        }
       },100);

    });


    $(".js-head-slider").slick(
    {
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        dots:true,
        swipeToSlide:true,
        speed:3000,
        autoplay: true,
        autoplaySpeed: durationList[0]*1000,
        adaptiveHeight:true
    }
).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log("beforeChange")
        if ($("#slick-slide0"+currentSlide + " video").length) {
            var vid = $("#slick-slide0"+currentSlide).find('video')
            vid.get(0).pause();
            vid.get(0).currentTime=0;
        }
        if ($("#slick-slide0"+nextSlide + " video").length) {
            var vid = $("#slick-slide0"+nextSlide).find('video')
            vid.get(0).currentTime=0;
            vid.get(0).play();


            function progressLoop() {
                setInterval(function () {
                    //progress.value = Math.round((vid.get(0).currentTime / vid.get(0).duration) * 100);
                    //var current_t = Math.round(vid.get(0).currentTime) + " seconds";
                   if (Math.round(vid.get(0).currentTime) == Math.round(vid.get(0).duration)) {
                       $(".js-head-slider").slick('slickNext');
                       // console.log(vid.get(0).duration);
                       // console.log(vid.get(0).currentTime);
                   }
                });
            }
            progressLoop();
        } else {
            setTimeout(function () {
                $(".js-head-slider").slick('slickNext');
            }, durationList[nextSlide]*1000-1000 )
        }


});



    /* - - - - - - -        footer box toggle       - - - - - - - - */$(document).on("click",".js-footer-box-toggle",function(){var $parent=$(this).closest(".footer-box"),currentIndex=$parent.index(),prevIndex=currentIndex-1,nextIndex=currentIndex+1;if($(window).width()<1200){if(!$parent.hasClass("show")){$parent.addClass("show").find(".footer-box__body ul").slideDown(300);if($(window).width()>=768){if(currentIndex%2===0){$(".footer-box").eq(nextIndex).addClass("show").find(".footer-box__body ul").slideDown(300)}else{$(".footer-box").eq(prevIndex).addClass("show").find(".footer-box__body ul").slideDown(300)}}}else{$parent.removeClass("show");$parent.find(".footer-box__body ul").slideUp(300);if($(window).width()>=768){if(currentIndex%2===0){$(".footer-box").eq(nextIndex).removeClass("show").find(".footer-box__body ul").slideUp(300)}else{$(".footer-box").eq(prevIndex).removeClass("show").find(".footer-box__body ul").slideUp(300)}}}}});$(window).on("resize",function(){if($(window).width()>=1200){$(".footer-box").removeClass("show").find(".footer-box__body ul").css("display","")}});/* - - - - - - -        catalog filter box toggle       - - - - - - - - */$(document).on("click",".js-catalog-filter-box-toggle",function(){var $parent=$(this).closest(".catalog-filter__box");if(!$parent.hasClass("show")){$parent.addClass("show").find(".catalog-filter__box-body").slideDown(300)}else{$parent.removeClass("show").find(".catalog-filter__box-body").slideUp(300)}});if($(".catalog-filter__box").length){$(".catalog-filter__box").each(function(){var $parent=$(this);if($parent.hasClass("show")){$parent.addClass("show").find(".catalog-filter__box-body").slideDown(300)}else{$parent.removeClass("show").find(".catalog-filter__box-body").slideUp(300)}})};/* - - - - - - -        catalog filter toggle       - - - - - - - - */// $(document).on('click', '.js-catalog-filter-toggle', function () {
// 	$('body').addClass('no-scroll');
// 	$('.catalog-filter').addClass('show');
// });
// $(document).on('click', '.js-catalog-filter-close', function () {
// 	$('body').removeClass('no-scroll');
// 	$('.catalog-filter').removeClass('show');
// });
//
// function setCatalogFilterScrollbar() {
// 	const $filterList = $('.catalog-filter__list');
// 	if ($(window).width() <= 991){
// 		const $parent = $filterList.closest('.catalog-filter__inner'),
// 			$title = $parent.find('.catalog-filter__title'),
// 			titleHeight = ($title.length) ? parseFloat($title.innerHeight()) : 0,
// 			$head = $parent.find('.catalog-filter__head'),
// 			headHeight = ($head.length) ? parseFloat($head.innerHeight()) : 0;
// 		let height = 0;
// 		height = parseFloat($parent.innerHeight()) - parseFloat($parent.css('padding-top')) - parseFloat($parent.css('padding-bottom')) - titleHeight - headHeight;
// 		$filterList.height(height);
// 	} else {
// 		$filterList.height('');
// 	}
// }
// if ($('.catalog-filter__list').length){
// 	setCatalogFilterScrollbar();
// 	$(window).on('resize', function () {
// 		setCatalogFilterScrollbar();
// 	});
// }
/* - - - - - - -        catalog filter tag toggle       - - - - - - - - */// function toggleCatalogFilterTag(){
// 	$('.catalog-filter__result').html('');
// 	$('.catalog-filter__box [type="checkbox"]').each(function () {
// 		const $this = $(this);
// 		if ($(this).prop('checked')){
// 			$('.catalog-filter__result').append(
// 				'<div class="catalog-filter__tag" data-id="' +
// 						$this.attr('id') +
// 						'" title="' +
// 						$this.closest('li').find('.catalog-filter__box-title').text() +
// 					'">' +
// 					'<div class="catalog-filter__tag-title">' +
// 						$this.closest('.catalog-filter__box').find('.catalog-filter__box-head').text() +
// 						': ' +
// 						$this.closest('li').find('.catalog-filter__box-title').text() +
// 					'</div>' +
// 					'<div class="catalog-filter__tag-del">' +
// 						'<span class="icon icon-close"></span>' +
// 					'</div>' +
// 				'</div>'
// 			);
// 		}
// 	});
// }
// toggleCatalogFilterTag();
// $(document).on('change', '.catalog-filter__box [type="checkbox"]', function () {
// 	toggleCatalogFilterTag();
// 	setCatalogFilterScrollbar();
// });
// $(document).on('click', '.catalog-filter__tag-del', function () {
// 	const $parent = $(this).closest('.catalog-filter__tag');
// 	$parent.remove();
// 	$('#' + $parent.attr('data-id')).prop('checked', false);
// 	setCatalogFilterScrollbar();
// });
// $(document).on('click', '.js-filter-reset', function () {
// 	$(this).closest('.catalog-filter').find('[type="checkbox"]').prop('checked', false);
// 	toggleCatalogFilterTag();
// 	setCatalogFilterScrollbar();
// });
/* - - - - - - -        switch catalog img front/back       - - - - - - - - */// function switchCatalogImg(){
// 	$('.catalog-list .product-img img').each(function () {
// 		const front = $(this).attr('src'),
// 			back = $(this).attr('data-image-back');
// 		if (back !== undefined && back !== ''){
// 			$(this).attr('src', back).attr('data-image-back', front);
// 		}
// 	});
// }
// if($('.catalog-list').length){
// 	if ($('#switchView').length && $('#switchView').prop('checked')){
// 		switchCatalogImg();
// 	}
// }
// $('#switchView').on('change', function () {
// 	switchCatalogImg();
// });
/* - - - - - - - - - - - - - -       init ionRangeSlider       - - - - - - - - - - - - - - - */// $('.js-range').each(function() {
// 	var $range = $(this),
// 		$parent = $range.closest('.range-box'),
// 		// $inputFrom = $parent.find('.range-box__value-from'),
// 		// $inputTo = $parent.find('.range-box__value-to'),
// 		$textFrom = $parent.find('.range-box__value-from .price'),
// 		$textTo = $parent.find('.range-box__value-to .price'),
// 		min = $range.attr('data-min'),
// 		max = $range.attr('data-max'),
// 		valueFrom = $range.attr('data-from'),
// 		valueTo = $range.attr('data-to'),
// 		instance;
// 	$range.ionRangeSlider({
// 		type: "double",
// 		grid: false,
// 		hide_from_to: true,
// 		hide_min_max: true,
// 		// min: min,
// 		// max: max,
// 		// from: valueFrom,
// 		// to: valueTo,
// 		onStart: updateInputs,
// 		onChange: updateInputs,
// 	});
// 	instance = $range.data('ionRangeSlider');
// 	function updateInputs (data) {
// 		from = data.from;
// 		to = data.to;
// 		// $inputFrom.prop('value', from);
// 		// $inputTo.prop('value', to);
// 		$textFrom.text(prettify(from));
// 		$textTo.text(prettify(to));
// 	}
// 	// $inputFrom.on('input', function () {
// 	// 	var val = parseInt($(this).prop('value')),
// 	// 		to = parseInt($(this).closest('.range-box').find('.range-box__value-to').prop('value'));
// 	// 	// validate
// 	// 	if (val < min) {
// 	// 		val = min;
// 	// 	} else if (val > to) {
// 	// 		val = to;
// 	// 	}
// 	// 	instance.update({
// 	// 		from: val,
// 	// 	});
// 	// });
// 	// $inputTo.on('input', function () {
// 	// 	var val = parseInt($(this).prop('value')),
// 	// 		from = parseInt($(this).closest('.range-box').find('.range-box__value-from').prop('value'));
// 	// 	// validate
// 	// 	if (val < from) {
// 	// 		val = from;
// 	// 	} else if (val > max) {
// 	// 		val = max;
// 	// 	}
// 	// 	instance.update({
// 	// 		to: val
// 	// 	});
// 	// });
// 	function prettify(num) {
// 		var n = num.toString();
// 		return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
// 	}
// });
/* - - - - - - -        product flip       - - - - - - - - */function flipProduct($image){var imageFront=$image.attr("src"),imageBack=$image.attr("data-image-back");if(imageBack!==undefined&&imageBack!==""){$image.attr("src",imageBack);$image.attr("data-image-back",imageFront)}}$(document).on("mouseenter",".js-product-flip",function(){var $image=$(this).find(".product-img img");flipProduct($image)});$(document).on("mouseleave",".js-product-flip",function(){var $image=$(this).find(".product-img img");flipProduct($image)});/* - - - - - - -        similars slider       - - - - - - - - */var similarsSlider=$(".js-similars-slider").slick({infinite:true,slidesToShow:4,slidesToScroll:1,arrows:true,dots:false,swipeToSlide:true,speed:600,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}}]});$(document).on("click",".js-similars-tabs li",function(){if(!$(this).hasClass("active")){$(this).closest(".similars-list__box").find(".js-similars-tabs li").removeClass("active");$(this).addClass("active");$(this).closest(".similars-list__box").find(".similars-list__box-slider").removeClass("show");$(".similars-list__box-slider[data-slider=\""+$(this).attr("data-slider")+"\"]").addClass("show");similarsSlider.slick("refresh")}});/* - - - - - - -        table responsive       - - - - - - - - */if($(".blog-details__text, .text").length){$(this).find("table").each(function(){var $this=$(this);$this.wrap("<div class=\"table-responsive\"></div>")})}/* - - - - - - -        count calculate       - - - - - - - - */// $('.count-box').each(function () {
// 	var $this = $(this),
// 		$field = $this.find('.count'),
// 		count = 0,
// 		$plus = $this.find('.count-inc'),
// 		$minus = $this.find('.count-dec'),
// 		min = parseInt($field.attr('data-min')),
// 		max = parseInt($field.attr('data-max')),
// 		postfix = $field.attr('data-postfix');
// 	postfix = postfix !== '' ? ' ' + postfix : '';
// 	if(parseInt($field.val()) == min ){
// 		$minus.addClass('disabled');
// 		$plus.removeClass('disabled');
// 	} else if(parseInt($field.val()) == max){
// 		$minus.removeClass('disabled');
// 		$plus.addClass('disabled');
// 	} else {
// 		$plus.removeClass('disabled');
// 		$minus.removeClass('disabled');
// 	}
// 	$plus.on('click', function () {
// 		$minus.removeClass('disabled');
// 		count = parseInt($field.val());
// 		if (count < max - 1) {
// 			count++;
// 		} else {
// 			$plus.addClass('disabled');
// 			count = max;
// 		}
// 		$field.val(count + postfix);
// 	});
// 	$minus.on('click', function () {
// 		$plus.removeClass('disabled');
// 		count = parseInt($field.val());
// 		if (count > min + 1) {
// 			count--;
// 		} else {
// 			$minus.addClass('disabled');
// 			count = min;
// 		}
// 		$field.val(count + postfix);
// 	});
// 	$field.on('input', function () {
// 		$plus.removeClass('disabled');
// 		$minus.removeClass('disabled');
// 		count = $field.val();
// 		count = (count == '') ? count : parseInt(count);
// 		if (count < min + 1) {
// 			$minus.addClass('disabled');
// 			if (count == '') {
// 				count = '';
// 			} else {
// 				count = min;
// 			}
// 		} else if (count > max - 1) {
// 			$plus.addClass('disabled');
// 			count = max;
// 		}
// 		$field.val(count);
// 	});
// 	$field.on('focus', function () {
// 		count = parseInt($field.val());
// 		$field.val(count);
// 	});
// 	$field.on('blur', function () {
// 		count = $field.val();
// 		if (count == '') {
// 			count = min;
// 		}
// 		$field.val(parseInt(count) + postfix);
// 	});
// });
/* - - - - - - -        check toggle       - - - - - - - - */$(document).on("change",".js-check [type=\"checkbox\"]",function(){var $this=$(this),$parent=$this.closest(".js-check");if($this.prop("checked")){$parent.find("[type=\"checkbox\"]").prop("checked",false);$this.prop("checked",true)}});/* - - - - - - -        init elevateZoom       - - - - - - - - */var elevateZoomSettings={gallery:"gallery_01",cursor:"pointer",galleryActiveClass:"active",imageCrossfade:true,zoomWindowFadeIn:300,zoomWindowFadeOut:300,lensFadeIn:300,lensFadeOut:300,lensBorderColour:"#D4D4D4D",scrollZoom:true,easing:true,borderSize:0,zoomWindowOffetx:30,tint:true,tintColour:"#FFF",responsive:true};// $('[data-zoom-image]').elevateZoom(elevateZoomSettings);
$(".product-card__gallery-slider > div:first-child [data-zoom-image]").elevateZoom(elevateZoomSettings);function toggleElevateZoom(){if(window.matchMedia("(max-width: 992px)").matches){$(".product-card__gallery-slider > div:first-child [data-zoom-image]").bind("touchstart",function(){$(".product-card__gallery-slider > div:first-child [data-zoom-image]").unbind("touchmove")})}}$(window).on("resize",function(){toggleElevateZoom()});toggleElevateZoom();/* - - - - - - -        product card slider       - - - - - - - - */$(".product-card__gallery-big .product-card__gallery-slider").slick({infinite:false,slidesToShow:1,slidesToScroll:1,arrows:false,dots:false,swipe:false,swipeToSlide:false,speed:500,fade:true,adaptiveHeight:true,asNavFor:".product-card__gallery-small .product-card__gallery-slider"}).on("init",function(){$("[data-zoom-image]").elevateZoom(elevateZoomSettings)}).on("beforeChange",function(event,slick,currentSlide,nextSlide){var img=$(slick.$slides[nextSlide]).find("[data-zoom-image]");$(".zoomWindowContainer,.zoomContainer").remove();$(img).elevateZoom(elevateZoomSettings)});$(".product-card__gallery-small .product-card__gallery-slider").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".product-card__gallery-big .product-card__gallery-slider",arrows:false,dots:false,centerMode:false,focusOnSelect:true,vertical:true,verticalSwiping:true,adaptiveHeight:true,responsive:[{breakpoint:1200,settings:{slidesToShow:4,vertical:false}}]});/* - - - - - - -        product card desc toggle       - - - - - - - - */$(document).on("click",".js-product-card-desc-toggle",function(){var $parent=$(this).closest(".product-card__desc-box");if(!$parent.hasClass("show")){$parent.addClass("show");$parent.find(".product-card__desc-box-body").slideDown(300)}else{$parent.removeClass("show");$parent.find(".product-card__desc-box-body").slideUp(300)}});$(document).on("click",".js-product-content-tabs li",function(){if(!$(this).hasClass("active")){$(".product-card__content-tabs li").removeClass("active");$(this).addClass("active");$(".product-card__content-box").removeClass("show");$(".product-card__content-box[data-text=\""+$(this).attr("data-text")+"\"]").addClass("show")}});$(document).on("click",".js-product-content-more",function(e){e.preventDefault();$(this).closest(".product-card__content-box").find(".product-card__content-text").addClass("show");$(this).remove()});/* - - - - - - -        faq toggle       - - - - - - - - */$(document).on("click",".js-faq-toggle",function(){var $parent=$(this).closest(".faq-list__box");if(!$parent.hasClass("show")){$(".faq-list__box").removeClass("show");$parent.addClass("show");$(".faq-list__box-body").slideUp(300);$parent.find(".faq-list__box-body").slideDown(300)}else{$parent.removeClass("show");$parent.find(".faq-list__box-body").slideUp(300)}});$(document).on("click",".js-product-card-reviews",function(){var $parent=$(".product-card__desc-reviews").closest(".product-card__desc-box");$parent.addClass("show").find(".product-card__desc-box-body").slideDown(300);$("html, body").animate({"scrollTop":$parent.offset().top-50},600)});/* - - - - - - -        file change       - - - - - - - - */// $(document).on('change', '.js-file [type="file"]', function(e) {
// 	const list = $(this)[0].files,
// 		isMultiple = false;
// 	if ($(this).attr('multiple') === undefined){
// 		$(this).closest('.file-box').find('.file-box__field').addClass('hidden');
// 	}
// 	for (let i = 0; i < list.length; i++) {
// 		const name = list[i].name;
// 		let fileBoxTpl = '';
// 		fileBoxTpl =
// 			'<div class="file-box__list-box">' +
// 				'<div class="file-box__list-box-name">' +
// 					name +
// 				'</div>' +
// 				'<div class="file-box__list-box-delete js-file-delete">' +
// 					'<span class="icon icon-close"></span>' +
// 				'</div>' +
// 			'</div>';
// 		$(this).closest('.file-box').find('.file-box__list').append(fileBoxTpl);
// 	}
// });
// $(document).on('click', '.js-file-delete', function() {
// 	const $parent = $(this).closest('.file-box');
// 	$(this).closest('.file-box').find('.file-box__field').removeClass('hidden');
// 	$(this).closest('.file-box__list-box').remove();
// 	if (!!$parent.find('.file-box__list-box').length === false) {
// 		const $this = $parent.find('[type="file"]');
// 		$this.val('');
// 	}
// });
/* - - - - - - -        rating       - - - - - - - - */// $(document).on('change', '.js-rating [type="checkbox"]', function () {
// 	const $parent = $(this).closest('.rating'),
// 		index = $(this).closest('.rating-box').index();
// 	$parent.find('[type="checkbox"]').prop('checked', false);
// 	for (let i = 5; i >= index; i--){
// 		$parent.find('.rating-box').eq(i).find('[type="checkbox"]').prop('checked', true);
// 	}
// });
/* - - - - - - -        resize video       - - - - - - - - */function resizeVideo(){$(".text iframe").each(function(){$(this).height($(this).width()*0.5625)})}if($(".text iframe").length){resizeVideo();$(window).on("resize",function(){resizeVideo()})}/* - - - - - - -        share toggle       - - - - - - - - */$(document).on("click",".js-share",function(e){e.preventDefault();$(this).closest(".product-card__share").toggleClass("show")});$(document).click(function(event){if($(event.target).closest(".product-card__share").length)return;$(".product-card__share").removeClass("show");event.stopPropagation()});/* - - - - - - -        show modal in modal       - - - - - - - - */$(document).on("click",".js-modal",function(e){e.preventDefault();var link=$(this).attr("href");$(".modal").modal("hide");if(link!==""){setTimeout(function(){$(link).modal("show")},500)}});/* - - - - - - -        login toggle       - - - - - - - - */$(document).on("click",".login-tabs ul li",function(){if($(window).width()<=767){var $this=$(this);if(!$(this).hasClass("active")){$(".login-tabs ul li").removeClass("active");$this.addClass("active");$(".login-list__box").removeClass("show");$(".login-list__box[data-tabs=\""+$this.attr("data-tabs")+"\"]").addClass("show")}}});/* - - - - - - -        show search       - - - - - - - - */$(document).on("click",".js-search",function(e){e.preventDefault();var height=$(window).height()-$(".header").innerHeight();$("body").addClass("no-scroll");$("html, body").animate({"scrollTop":0},300);$(".search-modal").addClass("show").height(height);//.animate({'height': height + 'px'}, 300);
$(".search-section__form input").focus();if($(window).width()<579){$(".logo").addClass("show")}});$(document).on("click",".js-modal-search-close",function(){$("body").removeClass("no-scroll");$(".search-modal").removeClass("show").height("");//.animate({'height': 0}, 300);
if($(window).width()<579){$(".logo").removeClass("show")}});function toggleSearchModalResult(){var height=0,modalPaddintTop=0,searchFormHeight=0;modalPaddintTop=$(".modal-menu__box").length?parseInt($(".modal-menu__box").css("padding-top")):0;searchFormHeight=$(".search-form__box").length?$(".search-form__box").innerHeight():0;height=$(window).height()-modalPaddintTop-searchFormHeight;$(".search-form__result").css("max-height",height-60+"px");if($(".modal-menu").hasClass("show")){if($(".search-form input").val().length<3){$(".currency, .lang, .location").addClass("show");$(".search-form__modal").removeClass("show").height("");$(".search-form__box [type=\"submit\"]").show();$(".search-form__box [type=\"reset\"]").hide()}else{$(".currency, .lang, .location").removeClass("show");$(".search-form__modal").addClass("show").height(height);$(".search-form__box [type=\"submit\"]").hide();$(".search-form__box [type=\"reset\"]").show()}}}// toggleSearchModalResult();
// $(window).on('resize', function () {
// 	toggleSearchModalResult();
// });
// $(document).on('focus blur input', '.search-form input', function () {
// 	toggleSearchModalResult();
// });
// $(document).on('click', '.search-form__box [type="reset"]', function () {
// 	$('.search-form input').val('').focus();
// 	toggleSearchModalResult();
// });
/* - - - - - - -        stores map toggle       - - - - - - - - */$("#stores-country").on("select2:select",function(e){$("#stores-map, #stores-result").removeClass("d-none")});/* - - - - - - -        size guide scrollTo       - - - - - - - - */$(document).on("click",".js-guide",function(){$("html, body").animate({"scrollTop":$(".size-guide__content").offset().top-60},300)});$(document).on("click",".js-modal-guide",function(){var $parent=$(this).closest(".modal");$parent.animate({"scrollTop":$parent.find(".size-guide__content").offset().top-$parent.offset().top},300)});/* - - - - - - -        get sizes bra       - - - - - - - - */function getSizesBraList($parent,$sizeBreastSelect,$sizeUnderBreastSelect,$sizeBra){var sizeBreastList=[{id:0,text:"\u041E\u0431\u0440\u0430\u0442\u0438 \u0440\u043E\u0437\u043C\u0456\u0440",value:0}];var countBreast=1;sizesBra.map(function(item,i){var _loop=function _loop(j){var arr=sizeBreastList.find(function(element){return element.id===j});if(!arr){sizeBreastList[countBreast]={id:j,text:j+" "+unitBreast// size: item.size
};countBreast++}};for(var j=item.breast.min;j<item.breast.max;j++){_loop(j)}});$sizeBreastSelect.select2({language:"ru",width:"100%",minimumResultsForSearch:-1,data:sizeBreastList,dropdownParent:$parent}).on("select2:select",function(e){$sizeBra.text("");var valBreast=parseInt($(this)[0].value);var sizeUnderBreastList=[{id:0,text:"\u041E\u0431\u0440\u0430\u0442\u0438 \u0440\u043E\u0437\u043C\u0456\u0440",value:0}],countUnderBreast=1;if(valBreast===0){sizeUnderBreastList=[]}else{sizesBra.map(function(item,i){if(valBreast>=item.breast.min&&valBreast<item.breast.max){for(var j=item.underBreast.min;j<=item.underBreast.max;j++){sizeUnderBreastList[countUnderBreast]={id:j,text:j+" "+unitUnderBreast,size:item.size};countUnderBreast++}}})}$sizeUnderBreastSelect.empty();$sizeUnderBreastSelect.select2({language:"ru",width:"100%",minimumResultsForSearch:-1,data:sizeUnderBreastList,dropdownParent:$parent}).on("select2:select",function(e){var valUnderBreast=parseInt($(this)[0].value);if(valUnderBreast===0){$sizeBra.text("")}else{sizeUnderBreastList.map(function(item,i){if(valUnderBreast===item.id){$sizeBra.text(item.size)}})}})})}/* - - - - - - -        get sizes panties       - - - - - - - - */function getSizesPantiesList($parent,$sizeHipsSelect,$sizePanties){var sizesPantiesList=[{id:0,text:"\u041E\u0431\u0440\u0430\u0442\u0438 \u0440\u043E\u0437\u043C\u0456\u0440",value:0}];var count=1;sizesPanties.map(function(item,i){for(var j=item.hips.min;j<item.hips.max;j++){sizesPantiesList[count]={id:j,text:j+" "+unitHips,size:item.size};count++}});$sizeHipsSelect.select2({language:"ru",width:"100%",minimumResultsForSearch:-1,data:sizesPantiesList,dropdownParent:$parent}).on("select2:select",function(e){var val=parseInt($(this)[0].value);if(val===0){$sizePanties.text("")}else{sizesPantiesList.map(function(item,i){if(val===item.id){$sizePanties.text(item.size)}})}})}$(".size-guide").each(function(){var $parent=$(this),$sizeBreastSelect=$(this).find(".size-breast"),$sizeUnderBreastSelect=$(this).find(".size-under-breast"),$sizeBra=$(this).find(".size-bra"),$sizeHipsSelect=$(this).find(".size-hips"),$sizePanties=$(this).find(".size-panties");if(typeof sizesBra!=="undefined"){getSizesBraList($parent,$sizeBreastSelect,$sizeUnderBreastSelect,$sizeBra)}if(typeof sizesPanties!=="undefined"){getSizesPantiesList($parent,$sizeHipsSelect,$sizePanties)}});/* - - - - - - -        header modal toggle       - - - - - - - - */$(document).on("click",".js-header-modal-close",function(){$(this).closest(".header-modal").remove()});/* - - - - - - -        init autocomplete       - - - - - - - - */if(typeof countries!=="undefined"){$(".js-autocomplete").autocomplete({minChars:3,lookup:countries,onSelect:function onSelect(item){console.log(item)}})};/* - - - - - - -        toggle checkout registration       - - - - - - - - */function showCheckoutRegistration(){var $this=$("#is-registration");if($this.prop("checked")){$(".checkout-registration").removeClass("d-none")}else{$(".checkout-registration").addClass("d-none")}}$(document).on("change","#is-registration",function(){showCheckoutRegistration()});showCheckoutRegistration();/* - - - - - - -        toggle checkout promocode       - - - - - - - - */function showCheckoutPromocode(){var $this=$("#is-promocode");if($this.prop("checked")){$(".checkout-promocode").removeClass("d-none")}else{$(".checkout-promocode").addClass("d-none")}}$(document).on("change","#is-promocode",function(){showCheckoutPromocode()});showCheckoutPromocode();/* - - - - - - -        toggle checkout certificate       - - - - - - - - */function showCheckoutCertificate(){var $this=$("#is-certificate");if($this.prop("checked")){$(".checkout-certificate").removeClass("d-none")}else{$(".checkout-certificate").addClass("d-none")}}$(document).on("change","#is-certificate",function(){showCheckoutCertificate()});showCheckoutCertificate();/* - - - - - - -        collection details slider       - - - - - - - - */$(".js-catalog-collection-slider").slick({infinite:true,slidesToShow:3,slidesToScroll:1,arrows:true,dots:false,swipeToSlide:true,speed:600,responsive:[{breakpoint:1800,settings:{slidesToShow:2}}]});/* - - - - - - -        size tabs       - - - - - - - - */$(document).on("click",".size-tabs li",function(){var $this=$(this);if(!$this.hasClass("active")){$(".size-tabs li").removeClass("active");$this.addClass("active");$(".size-list__box").removeClass("show");$(".size-list__box[data-tabs=\""+$this.attr("data-tabs")+"\"]").addClass("show")}});function toggleSizeCategoryTabs($this){$(".size-category__box").removeClass("show");$(".size-category__box[data-tabs=\""+$this.attr("data-tabs")+"\"]").addClass("show")}$(document).on("change",".size-category__tabs li [type=\"radio\"]",function(){var $this=$(this);toggleSizeCategoryTabs($this)});if($(".size-category__tabs").length){$(".size-category__box").removeClass("show");$(".size-category__box[data-tabs=\""+$(".size-category__tabs li [type=\"radio\"]:checked").attr("data-tabs")+"\"]").addClass("show")};/* - - - - - - -       header rebuild       - - - - - - - - */function rebuildHeader(){var $catalogMenu=$(".catalog-menu").detach();if(window.matchMedia("(max-width: 1199px)").matches){$catalogMenu.prependTo(".modal-menu__box-list")}else{$catalogMenu.prependTo(".header-bottom .container")}}$(window).on("resize",function(){rebuildHeader()});rebuildHeader();function playYoutube($this){var src=$this.attr("data-src"),link=$this.attr("data-link"),vq=typeof $this.attr("data-vq")!=="undefined"&&$this.attr("data-vq")!==""?"&"+$this.attr("data-vq"):"";var matches=/\/\/(?:www\.)youtube\.com\/.*(?:\?|&)v=([^&]*)/i.exec(src);if(!matches){matches=/\/\/(?:www\.)youtu\.be\/([^\?&]*)/i.exec(src)}if(matches){var videoId=matches[1];$this.addClass("show");$this.append($("<iframe>").prop("src","https://www.youtube.com/embed/"+videoId+"?autoplay=1&controls=0&loop=1&mute=1&autohide=1&playsinline=1&border=0"+vq+"&wmode=opaque&enablejsapi=1&rel=0&playlist="+videoId).prop("allow","autoplay"))}if(link!==""&&typeof link!=="undefined"){$this.append("<a href=\""+link+"\"></a>")}}$(".js-youtube").each(function(){var $this=$(this),src=$this.attr("data-src"),img=$this.attr("data-img");if(img!==undefined&&img!==""){$this.css("background-image","url("+img+")")}else{var matches=/\/\/(?:www\.)youtube\.com\/.*(?:\?|&)v=([^&]*)/i.exec(src);if(!matches){matches=/\/\/(?:www\.)youtu\.be\/([^\?&]*)/i.exec(src)}if(matches){var videoId=matches[1];$this.css("background-image","url(http://img.youtube.com/vi/"+videoId+"/hqdefault.jpg)")}}playYoutube($this)})});
//# sourceMappingURL=app.js.map
