
$(function(){
  $(".footbar").mouseenter(function() {
    $(".footbar").fadeTo('slow', .8);
  });

  $(".footbar").mouseleave(function(){
    $(".footbar").fadeTo('slow', 1);
  });

  $(".go-to-who").on("click",function(){
    $(".screen-title").fadeOut("slow", function(){
      $(".screen-who").fadeIn();
    }); 
  });

  $(".go-to-home").on("click",function(){
    $(".screen-who").hide();
    $(".screen-shop").hide();
    $(".screen-work").hide();
    $(".screen-home").show();
  });
  
  $(".go-to-work").on("click",function(){
    $(".screen-home").hide();
    $(".screen-work").show();
  });

  $(".go-to-shop").on("click",function(){
    $(".screen-home").hide();
    $(".screen-shop").show();
  });

  $(".go-to-title").on("click",function(){
    $(".screen-home").hide();
    $(".screen-title").show();
  });


});
