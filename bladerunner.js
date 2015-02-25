
//var questions = {};

$(function(){
  // Access instructions
  $.getJSON("instructions.json", function(info){
    instructions = info;
  });

  // Access trivia questions
  $.getJSON("questions.json", function(data){
    questions = data;
  });

  // screen-title buttons
  $(".go-to-home").on("click",function(){
    // Hide all other screens besides home screen
    $(".screen-title").hide();
    $(".screen-work").hide();
    $(".screen-shop").hide();

    // Find instructions for this screen
    var homeInstructions = instructions.instruction.home;
    $('.instruct').html(homeInstructions);

    // Show home screen
    $(".screen-home").show();
  });

  // Store player name
  $(".submit-player").on("click", function(){
    var username = $(".player-name").val();
    $(".player").html(username);
  });
  
  // Work screen
  $(".go-to-work").on("click",function(){
    // Hide home screen
    $(".screen-home").hide();

    // Find instructions for this screen
    var workInstructions = instructions.instruction.work;
    $('.instruct').html(workInstructions);

    // Find trivia question based on player class and difficulty.
    var playerDifficulty = $("input[name=player-diff]:checked").val();
    var playerClass = $("input[name=player-class]:checked").val();
    questionText = questions[playerClass][playerDifficulty].question;
    $('.question').html(questionText);

    // Display screen
    $(".screen-work").show();
  });

  // Add to player score when correct answer is submitted
  $(".submit-trivia").on("click", function(){
    var playerAnswer = $(".trivia-answer").val();
    console.log(playerAnswer);
  });

  // Shop screen
  $(".go-to-shop").on("click",function(){
    // Hide home screen
    $(".screen-home").hide();

    // Find instructions for this screen
    var shopInstructions = instructions.instruction.shop
    $(".instruct").html(shopInstructions);

    // Show this screen
    $(".screen-shop").show();
  });

  // Navigate back to title screen
  $(".go-to-title").on("click",function(){
    $(".screen-home").hide();
    $(".screen-title").show();
  });

});
