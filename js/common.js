
/* ==============================
ver : 1.00
============================== */



/***********************************************
	* onload
	* 화면 로드 후 onload 함수 실행
************************************************/


$(function(){
	//개발단 화면 로드후 실행
	onload();
});


/***********************************************
	* 온로드 실행 함수
************************************************/
function onload(){
	
	__fn_namephonenumopen();
	__fn_toggleBtn();
	__fn_activeBtn();
	__fn_selectstyle();
	__fn_starRateHalf();
	__fn_timeselect();
	__fn_pcquickboxOpen();
	__fn_pcquickboxClose();
	__fn_quickboxOpen();
	__fn_quickboxClose();
	__fn_chkboxAll();
	__fn_selectBank();
	__fn_resultoverlapcheck();
	__fn_selectCategoryMain();
	__fn_selectCategoryMiddle();
}
 
// 지인이 차량검사 동행 선택
function __fn_namephonenumopen() {
	$target = $(".fn_namephonenum");
	$openitem = $(".item_namephonenum");

	$target.on("click", function(){
		$openitem.toggle("fast")
	})
}

// 버튼 토글
function __fn_toggleBtn() {
	var $target = $('.btnToggle');
	$target.each(function () {
		$(this).off().on('click', function (event) {
			$target.removeClass("active");
			// 이벤트 버블링 방지
			event.stopPropagation();
			$(this).toggleClass('active')
		})
	});
}

// 버튼 중복 선택 active 
function __fn_activeBtn() {
	var $target = $('.btnActive');
	$target.each(function () {
		$(this).off().on('click', function (event) {
			// 이벤트 버블링 방지
			event.stopPropagation();
			$(this).toggleClass('active')
		})
	});
}

// 차량검사 시간선택
function __fn_timeselect(){
	var $target = $('.area_timeselect .btn');
	$target.each(function () {
		$(this).off().on('click', function (event) {
			$target.removeClass("active");
			// 이벤트 버블링 방지
			event.stopPropagation();
			$(this).toggleClass('active');
		})
	});
}

// 셀렉트박스 스타일적용
function __fn_selectstyle() {
	$('.selectstyle select').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;
	
		$this.addClass('select-hidden'); 
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());
	
		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);
	
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
			//if ($this.children('option').eq(i).is(':selected')){
			//  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
			//}
		}
	
		var $listItems = $list.children('li');
	
		$styledSelect.on("click", function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});
	
		$listItems.on("click", function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});
	
		$(document).on("click", function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});
}

// 서비스 이용 후기 별점 5개 : 클릭 방식
function __fn_starRateHalf(){
	var $starElm = $('.star_rate .star'),
		total = $('.star_rate .star').length,
		$currentCount = $('.bx_score .tit strong'),
		$totalCount = $('.bx_score .tit strong');

	$starElm.on('click mouseenter focusin ',function(){
		$(this).parent().children('.star').removeClass('on');
		$(this).addClass('on').prevAll('.star').addClass('on');
		return false;
	})

	$totalCount.text(total);
	$currentCount.text('1');

	$starElm.on('click ', function () {
		var current = $(this).index() + 1;
		$currentCount.text(current)
	})							
}


// pc quick menu
function __fn_pcquickboxOpen(){
	var $target = $(".quick_box_open"),
		$pcitem = $(".quick_menu_open"),
		$target2 = $(".quick_menu");

	$target.on("click", function(){
		$pcitem.stop().animate({"left":"-57px"}, 300).show();
		$target2.stop().animate({"margin-left":"-10px"}, 200).fadeOut();
	})
}

function __fn_pcquickboxClose(){
	var $target = $(".quick_box_close"),
		$pcitem = $(".quick_menu_open"),
		$target2 = $(".quick_menu");

	$target.on("click", function(){
		$pcitem.stop().animate({"left":"-40px"}, 200).fadeOut();
		$target2.stop().animate({"margin-left":"0"}, 200).show();
	})
}

// mobile quick menu
function __fn_quickboxOpen(){
	var $target = $(".quickbox_open"),
		$moitem = $(".quickmenu");

	$target.on("click", function(){
		$moitem.stop().animate({"right":"0"}).show();
	})
}

function __fn_quickboxClose(){
	var $target = $(".quickbox_close"),
		$moitem = $(".quickmenu");

	$target.on("click", function(){
		$moitem.stop().animate({"right":"-1000%"}).fadeOut();
	})
}

// 전체 약관 동의
function __fn_chkboxAll(){
	$('#authcheck_all').on('click', function(){
		if($('#authcheck_all').prop('checked')){
			$("input[name=authcheck]:checkbox").prop("checked", true);
			$(this).siblings("label").addClass("active");
		} else{
			$("input[name=authcheck]:checkbox").prop("checked", false);
			$(this).siblings("label").removeClass("active");
		}
	});
}

// 환불은행선택
function __fn_selectBank() {
	var $target = $(".wrap_bankitem a"),
		$selitem = $(".selectbank option");

	$target.on("click", function(){
		var item = $(this).find(".bankname").text();
		$selitem.text(item);
	});
}

// 검사결과입력폼 선택
function __fn_resultoverlapcheck(){
	var $target = $('.btnToggle2');
	$target.on('click', function (event) {
		event.stopPropagation();
		$(this).toggleClass('active');
		if($(this).hasClass("active")){
			$(this).find("input[name=resultcheck]:checkbox").prop("checked", true);
			$(this).find("button").removeClass("btn_type1_2_sm").addClass("btn_type1_3_sm");
			return false;
		} else{
			$(this).find("input[name=resultcheck]:checkbox").prop("checked", false);
			$(this).find("button").removeClass("btn_type1_3_sm").addClass("btn_type1_2_sm");
			return false;
		}
	});
}

// 대분류선택
function __fn_selectCategoryMain() {
	var $target = $(".wrap_selectItemMain a"),
		$selitem = $(".selectItemMain option");

	$target.on("click", function(){
		var item = $(this).text();
		$selitem.text(item);
	});
}
// 중분류선택
function __fn_selectCategoryMiddle() {
	var $target = $(".wrap_selectItemMiddle a"),
		$selitem = $(".selectItemMiddle option");

	$target.on("click", function(){
		var item = $(this).text();
		$selitem.text(item);
	});
}