// PAGE UP!!!
//$(function() {
//	var showFlag = false;
//	var pageTop = $('#pageup');	
//	pageTop.css('bottom', '-52px');
//	// スクロールが100に達したらボタン表示
//	$(window).scroll(function () {
//		if ($(this).scrollTop() > 100) {
//			if (showFlag === false) {
//				showFlag = true;
//				pageTop.stop().animate({bottom: '20px'}, 500); 
//			}
//		} else {
//			if (showFlag) {
//				showFlag = false;
//				pageTop.stop().animate({bottom: '-52px'}, 300); 
//			}
//		}
//	});
//	
//	// スクロールしてトップ
//	pageTop.click(function () {
//		$('body,html').animate({scrollTop: 0}, 500);
//	});
//});
$(function(){
  var topBtn=$('#pagetop');
  topBtn.hide();
 
  //ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      //---- 画面を800pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      //---- 画面が800pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    } 
  });
 
  //ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
});