
//var questions = {};

$(function(){

  $.getJSON("instructions.json", function(info){
    instructions = info;
  });

  $.getJSON("questions.json", function(data){
    questions = data;
  });

  // screen-title buttons
  $(".go-to-home").on("click",function(){
    $(".screen-title").hide();
    $(".screen-work").hide();
    $(".screen-shop").hide();
    var homeInstructions = instructions.instruction.home;
    $('.instruct').html(homeInstructions);
    $(".screen-home").show();
  });

  $(".submit-player").on("click", function(){
    var username = $(".player-name").val();
    $(".player").html(username);
  });
  
  $(".go-to-work").on("click",function(){
    $(".screen-home").hide();
    var workInstructions = instructions.instruction.work;
    $('.instruct').html(workInstructions);
    var playerDifficulty = $("input[name=player-diff]:checked").val();
    var playerClass = $("input[name=player-class]:checked").val();
    questionText = questions[playerClass][playerDifficulty].question;
    $('.question').html(questionText);
    $(".screen-work").show();
  });

  $(".go-to-shop").on("click",function(){
    $(".screen-home").hide();
    var shopInstructions = instructions.instruction.shop
    $(".instruct").html(shopInstructions);
    $(".screen-shop").show();
  });

  $(".go-to-title").on("click",function(){
    $(".screen-home").hide();
    $(".screen-title").show();
  });

});
