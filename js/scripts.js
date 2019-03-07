//business logic
//user interface logic
//this.hideClass = hideClass;
//  function Page(hideClass, showClass){
//  this.showClass = showClass;
//  this.hideClass = hideClass;
//  //this.clicked = function(){
//  //    hideClass.faceOut(100);
//  //    showClass.fadeIn(1000);
//  //}
//}
//Page.prototype.showhide = function(){
//  hideClass.fadeOut(100);
//  showClass.fadeIn(1000);
//}
//var faqOne = new Page($('#faq'), $('#landing-page'))
//
///$(document).ready(function() {
//  $('.btn-three').click(function() {
//    faqOne.showhide()
//		//$('#faq').fadeIn(100);
//		//$('#landing-page').hide(10);
//  });  
//})  

//functional programing
function Navigate(hideClass, showClass){
  this,hideClass = hideClass;
  this.showClass = showClass;
  hideshow = function(){
    hideClass.hide();
    showClass.show();
  }
}
var one = new Navigate()