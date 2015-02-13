
//var questions = {};

$(function(){
  $.getJSON("questions.json", function(data){
    questions = data;
  });

  // screen-title buttons
  $(".go-to-home").on("click",function(){
    $(".screen-title").hide();
    $(".screen-work").hide();
    $(".screen-shop").hide();
    $(".screen-home").show();
  });

  $(".submit-player").on("click", function(){
    var username = $(".player-name").val();
    console.log(username)
    $(".player").html(username);
  });
  
  $(".go-to-work").on("click",function(){
    $(".screen-home").hide();
    var playerDifficulty = $("input[name=player-diff]:checked").val();
    var playerClass = $("input[name=player-class]:checked").val();
    questionText = questions[playerClass][playerDifficulty].question;
    $('.question').html(questionText);
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
