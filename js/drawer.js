// JavaScript Document
$(function(){
//ドロワーナビの表示・非表示
$(".hamburger").click(function(){
$(".gnav").toggleClass("show");
$(this).toggleClass("close");
});
//メニュークリック時にドロワーナビを閉じる
$(".gnav ul li a").click(function(){
$(".gnav").removeClass("show");
$(".hamburger").toggleClass("close");
});
});