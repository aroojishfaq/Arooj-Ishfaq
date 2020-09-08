$(function() {
    $(".red-box").fadeOut(2000);
    $(".blue-box").fadeOut(2000);
    $(".green-box").fadeTo(2000,0.5);
    $(".red-box").show(1000);
    $(".blue-box").fadeIn(1000);
    $(".blue-box").fadeTo(2000,0.2)
    $(".blue-box").fadeToggle();
    $(".blue-box").fadeToggle();
    $(".yellow-box").hide(2000);
    $("p").slideDown(1000);
    $(".yellow-box").slideDown(2000);
   // $("div").find("li").css("background-color","yellow");
   // $(".content2").children("li").css("background-color","yellow");
   //$("div").parents().css("background-color","yellow")
   //$("div").parent("div").css("background-color","yellow")
   //$(".content2").find("li").filter(":odd").css("background-color","yellow")
   $(".content2").find("li:odd").css("background-color","yellow");
   $(".blue-box").after("<div class='blue-box'>blue2</div>");      //this way clones a block
   $(".red-box").before($(".yellow-box"));         //this way only changes the blocks position wdout cloning it
   $("ul ").append("<li>its the last list item</li>");
   //$(".red-box,.blue-box,.yellow-box").replaceWith("<div class='green-box'>More Green</div>");
  // $("<div class='green-box'>More Green</div>").replaceAll(".red-box, .yellow-box, .blue-box");
   $("li").replaceWith(function(){
     return "<li>Replaced</li>";
   });
   //event handlers
   $(".blue-box").click(function(){
     alert("blue box is clicked")
   });

   $(".green-box").hover(function(){
    $(this).text("i was hovered")
     });

     $(".green-box").hover(function(){
      $(this).text("i was hovered");
       },function(){
        $(this).text("Green")

       });
  });