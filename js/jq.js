$(document).ready(function () {
$("div").click(function(){
$(this).toggleClass("x");
if($(this).hasClass("x")){
    $("body").css("background-color","#3d3b3d");
    $("section").css("background-color","#4b494b");
    $("span").animate({
        left : 25
    },300);
    $(this).css("background-color","#4493ee");
}else{
    $("body").css("background-color","#fff");
    $("section").css("background-color","#edeaed");
    $("span").animate({
        left : 0
    },300);
    $(this).css("background-color","#ccc");

}
});
});