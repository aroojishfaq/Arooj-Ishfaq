$(function(){
$(".1img").delay(1000).hide(2000);
$(".2img").delay(1000).fadeTo(1000,0.5);
$(".2img").delay(1000).fadeToggle();
$(".2img").fadeToggle();

$(".lead").slideDown(1000);
$("p").slideDown(5000);

$(".monospace").animate({
fontSize:"20px",
},1000);

$("html").on("click keyup", function(){
alert ("clicked or key up is pressed")
});
//modularized func
function call(){
    $(this).css("color","aqua")
}

//delegated events
$("body").on("click","p",call);
$("body").append("<p>DYNAMCALLY ADDED PARA</p>")
});