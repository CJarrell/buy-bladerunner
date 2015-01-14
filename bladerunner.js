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
    $(".screen-title").fadeOut("slow", function(){
      $(".screen-who").fadeIn();
    }); 
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
