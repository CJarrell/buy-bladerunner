var player = {
  name: "",
  job: "",
  difficulty: "",
  chinYen: 0
};

var questions = {};

$(function(){
  $.getJSON("questions.json", function(data){
    questions = data;
  });

  $(".footbar").mouseenter(function() {
    $(".footbar").fadeTo('slow', .8);
  });

  $(".footbar").mouseleave(function(){
    $(".footbar").fadeTo('slow', 1);
  });

  $(".go-to-who").on("click",function(){
    $(".screen-work").hide();
    $(".screen-shop").hide();
    $(".screen-title").hide();
    $(".screen-who").show();
  });

  $(".submit-player").click(function(){
    player.name = $("input[name=player-name]").val();
    console.log(player.name);
  });
  
  $(".go-to-work").on("click",function(){
    $(".screen-who").hide();
    var playerDifficulty = $("input[name=player-diff]:checked").val();
    var playerClass = $("input[name=player-class]:checked").val();
    questionText = questions[playerClass][playerDifficulty].question;
    $('.question').html(questionText);
    $(".screen-work").show();
  });

  $(".go-to-shop").on("click",function(){
    $(".screen-who").hide();
    $(".screen-shop").show();
  });

  $(".go-to-title").on("click",function(){
    $(".screen-who").hide();
    $(".screen-title").show();
  });

});
