var player = {
  name: "",
  job: "",
  difficulty: "",
  chinYen: 0
};

var questions = {
  civilian: {
    easy: {
      question: 'Please input the year in which Blade Runner was released:',
      answer: '1982'
    },
    medium: {
      question: 'Please input the name of the sci-fi novel which Blade Runner is based on:',
      answer: 'do androids dream of electric sheep'
    },
    difficult: {
      question: 'Please input the name of the person who directed Blade Runner:',
      answer: 'ridley scott'
    }
  },

  replicant: {
    easy: {
      question: 'Please input the name of the replicant who lead the rebel band of Nexus-6 replicants:',
      answer: 'roy batty'
    },
    medium: {
      question: 'Please input the name of the Hallmark Holiday on which the replicant Pris was born:',
      answer: 'valentines day'
    },
    difficult: {
      question: 'Please input the name of the device used to detect replicants in Blade Runner:',
      answer: 'voight-kampff'
    }
  },

  bladerunner: {
    easy: {
      question: 'Please input the name of the main character in Blade Runner:',
      answer: 'rick deckard',
    },
    medium: {
      question: 'Please input the telephone number where one could reach Rachel:',
      answer: '555-7583',
    },
    difficult: {
      question: 'Please input the badge number of the Blade Runner;',
      answer: 'br-263-54',
    }
  }
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
