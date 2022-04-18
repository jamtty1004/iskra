$(function(){
	iskInit();
	iskGnb();

	// 송금 셀렉트 부분
	$('#coin').on("click" , function(){
		$(this).next().toggle();
		$(this).toggleClass('active');
	});
	$('.select_coin li').on("click" , function(){
		var txt = $(this).text();
		$('#coin').val(txt);
		$('.select_coin').hide();
		$('#coin').removeClass('active');
		if($(this).hasClass("klay") === true) {
			$('.coin-layer div').hide();
			$('.coin-klay').show();
		}
		if($(this).hasClass("isk") === true) {
			$('.coin-layer div').hide();
			$('.coin-isk').show();
		}
	});

	// 송금 셀렉트 닫기
	$(document).click(function(e){
		if (!$(e.target).is('#coin')) {
			$('.select_coin').hide();
			$('#coin').removeClass('active');
		}
	});
	
	// 최종 팝업
	$('.popup_close').on("click" , function(){
		$(this).parent().parent().hide();
	});

	// LNB 토글
	$('.lnb ul li button.btn_lnb_toggle').on("click" , function(){
		$(this).toggleClass('active');
		$(this).next('div').toggle();
	});
	
	// GNB 토글
	$('#header .member button').on("click" , function(){
		$(this).toggleClass('active');
		$('#header .member .member_layer').toggle();
	});
	
	// 가입완료 팝업 팝업
	$('#alert_popup_complete .container button.popup_close').on("click" , function(){
		$('#alert_popup_complete').hide();
	});
	
	// 로그인 세션 유효시간 초과 팝업
	$('#alert_popup_Session .container button.popup_close').on("click" , function(){
		$('#alert_popup_Session').hide();
	});
	
	// Password 변경 완료 팝업
	$('#alert_popup_passchange .container button.popup_close').on("click" , function(){
		$('#alert_popup_passchange').hide();
	});

	// Wallet Password 변경 완료 팝업
	$('#alert_popup_wall_passchange .container button.popup_close').on("click" , function(){
		$('#alert_popup_wall_passchange').hide();
	});

	// 셀렉트박스
	$('.select_style').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul ></ul>', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li ></li>', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();

			$('div.select-styled').removeClass('active');
			if($(this).next('ul.select-options').is(':visible') == false ){
				$('ul.select-options').hide();
				$(this).addClass('active').next('ul.select-options').show();
			} else {
				$('ul.select-options').hide();
				$(this).removeClass('active').next('ul.select-options').hide();
			}
		});

		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});

		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	});


	// C-1a. Stake 전체체크
	$("#chk_all").click(function() {
		if($("#chk_all").is(":checked")) {
			$("input[name=chk]").prop("checked", true);
		} else {
			$("input[name=chk]").prop("checked", false);
		}
	});

	$(".leng").click(function() {
		var num = $("input:checkbox[name='chk']:checked").length;
		if(num >= 1) {
			$('.change').attr('disabled', false);
			$('.change').addClass('active');
			$('.change').text('Stake ' + '(' + num + ')');
		} else {
			$('.change').attr('disabled', true);
			$('.change').removeClass('active');
			$('.change').text('Stake');
		}
	});

	// A-2d. NFT List - Hover
	$('.wrap.Pioneer .container .contents ul.ntf_list li .box').hover(function() {
		$(this).children('.hover_mask').show();
	}, function(){
		$(this).children('.hover_mask').hide();
	});

	// 서명 팝업
	$('#signature_popup .container .txt .sign_toggle').on("click" , function(){
		$(this).toggleClass('active');
		$(this).next('#signature_popup .container .txt .sign_area').toggle();
		$('html, body').toggleClass('scroll-hidden');
		
	});
	// 서명 팝업 닫기
	$('#signature_popup .container button.popup_close').on("click" , function(){
		$('#signature_popup').hide();
	});
	// 서명 팝업 취소
	$('#signature_popup .container .popup_cancel').on("click" , function(){
		$('#signature_popup').hide();
	});

	$(window).scroll(function(){
		$("#signature_popup").css("margin-top",Math.max(0,0-$(this).scrollTop()));
	});

	
	// 잔액부족 팝업
	$('#alert_popup_pay .container button.popup_close').on("click" , function(){
		$('#alert_popup_pay').hide();
	});

	// 출금 주소 오류 팝업 팝업
	$('#alert_popup_outaddr .container button.popup_close').on("click" , function(){
		$('#alert_popup_outaddr').hide();
	});

	// A-4b. Claim - hover
	$('.ico_hover').hover(function() {
	  $('.ico_hover_pop').show();
	}, function(){
	  $('.ico_hover_pop').hide();
	});

	// 패스워드 입력 확인
	$(".chk_input").on("propertychange change keyup paste input", function() {
		var val1 = $('input[name=pw]').val();
		var val2 = $('input[name=pw_re]').val();
		if(val1 == '' || val2 == '') {
			$('.change').attr('disabled', true);
			$('.change').removeClass('active');
		} else {
			$('.change').attr('disabled', false);
			$('.change').addClass('active');
		}
	});

	// Secret Recovery Phrases 를 조회하는 섹션 마스크
	$('.wrap.Wallet .container .contents .box.section .mask').on("click" , function(){
		$(this).hide();
		$('.change').attr('disabled', false);
		$('.change').addClass('active');
	});

	// Text Card 클릭
	$('.wrap.Wallet .container .contents .select_area div').on("click" , function(){
		var txt = $(this).text();
		var id = $(this).attr('data-id');
		var chk_id = $('.wrap.Wallet .container .contents .drag_area div').attr('id');

		$(this).toggleClass('active');
		
		if($(this).hasClass("active") === true) {
			$('.wrap.Wallet .container .contents .drag_area').append("<div id=" + id + ">" + txt + "</div>");
		} else {
			$('.wrap.Wallet .container .contents .drag_area').children('#'+id).remove();
		}

		if($('.wrap.Wallet .container .contents .drag_area div').length == 12) {
			$('.change').attr('disabled', false);
			$('.change').addClass('active');
		} else {
			$('.change').attr('disabled', true);
			$('.change').removeClass('active');
		}

	});

	// Text Card 드래그 정렬
	$("#drag_area").sortable();
	$("#drag_area").disableSelection();

});

/* iskInit */
function iskInit() {
	AOS.init();
}

/* iskGnb */
function iskGnb(){
	// gnb button
	$('.gnb-open').on('click', function() {
		$('html').css('overflow-y', 'hidden');
		$('#header').addClass('is-gnb');
		$('.mask').show();
	});
	$('.gnb-close, .mask').on('click', function() {
		$('html').removeAttr('style');
		$('#header').removeClass('is-gnb');
		$('.mask').hide();
	});
	// scroll effect
	$(window).on('scroll', function(){
		const posTop = $(this).scrollTop();
		if (posTop > 0){
			$('#header').addClass('is-fixed');
		} else {
			$('#header').removeClass('is-fixed');
		}
	});
}