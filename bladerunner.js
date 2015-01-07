
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

    //typewriter effect init
    $('#target').teletype({
      text: [
      'Welcome to the work screen. Here you can earn Chin-Yen to take to the shop.',
      ]
    });

    $('#cursor').teletype({
      text: ['_', ' '],
      delay: 0,
      pause: 500,
      autoDelete: true
    });
  });

  $(".go-to-shop").on("click",function(){
    $(".screen-who").hide();
    $(".screen-shop").show();
  });

  $(".go-to-title").on("click",function(){
    $(".screen-who").hide();
    $(".screen-title").show();
  });

  //Typewriter Effect Plugin

  (function ($) {
    //writes the string
    function typeString($target, str, cursor, delay, cb) {
      $target.html(function (_, html) {
        return html + str[cursor];
      });

      if(cursor < str.length - 1) {
        setTimeout(function () {
          typeString($target, str, cursor + 1, delay, cb);
        }, delay);
      }
      else {
        cb();
      }
    }
    //clears the string
    function deleteString($target, delay, cb) {
      var length;

      $target.html(function (_, html) {
        length = html.length;
        return html.substr(0, length - 1);
      });

      if (length > 1) {
        setTimeout(function () {
          deleteString($target, delay, cb);
        }, delay);
      }
      else {
        cb();
      }
    }
    //jQuery hook
    $.fn.extend({
      teletype: function (opts) {
        var settings = $.extend({}, $.teletype.defaults, opts);

        return $(this).each(function () {
          (function loop($tar, idx) {
            //type
            typeString($tar, settings.text[idx], 0, settings.delay, function () {
              //delete
              if(settings.autoDelete)  {
                setTimeout(function () {
                  deleteString($tar, settings.delay, function () {
                    loop($tar, (idx + 1) % settings.text.length);
                  });
                }, settings.pause);
              }
            });

          }($(this), 0));
        });
      }
    });

    //plugin defaults
    $.extend({
      teletype: {
        defaults: {
          delay: 100,
          pause: 5000,
          text: [],
          autoDelete: false
        }
      }
    });
  }(jQuery));


});
