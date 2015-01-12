var player = {
  name: "",
  job: "",
  difficulty: ""
};

var civilian = {
  easyQuestion: 'Please input the year in which ‘Blade Runner’ was released:',
  easyAnswer: '1982',
  mediumQuestion: 'Please input the name of the sci-fi novel which ‘Blade Runner’ is based on:',
  mediumAnswer: 'do androids dream of electric sheep',
  difficultQuestion: 'Please input the name of the person who directed ‘Blade Runner’:',
  difficultAnswer: 'ridley scott'
};

var replicant = {
  easyQuestion: 'Please input the name of the replicant who lead the rebel band of Nexus-6 replicants:',
  easyAnswer: 'roy batty',
  mediumQuestion: 'Please input the name of the “Hallmark Holiday” on which the replicant Pris was born:',
  mediumAnswer: 'valentines day',
  difficultQuestion: 'Please input the name of the device used to detect replicants in ‘Blade Runner’:',
  difficultAnswer: 'voight-kampff'
};

var bladerunner = {
  easyQusetion: 'Please input the name of the main character in ‘Blade Runner’:',
  easyAnswer: 'deckard cain',
  mediumQuestion: 'Please input the telephone number where one could reach Rachel',
  mediumAnswer: '555-7583',
  difficultQuestion: 'Please input the badge number of the Blade Runner',
  difficultAnswer: 'br-263-54'
};

$(function(){
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
