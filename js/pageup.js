// PAGE UP!!!
$(function() {
	var showFlag = false;
	var pageTop = $('#pageup');	
	pageTop.css('bottom', '-52px');
	// スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if (showFlag === false) {
				showFlag = true;
				pageTop.stop().animate({bottom: '20px'}, 500); 
			}
		} else {
			if (showFlag) {
				showFlag = false;
				pageTop.stop().animate({bottom: '-52px'}, 300); 
			}
		}
	});
	
	// スクロールしてトップ
	pageTop.click(function () {
		$('body,html').animate({scrollTop: 0}, 500);
	});
});
