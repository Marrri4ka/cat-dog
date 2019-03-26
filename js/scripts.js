$(document).ready(function() {
  $("button#meow").click(function() {
    $(".cat").prepend("<li>Meow!</li>");
    $(".dog").prepend("<li>Bark!</li>");

    $('.cat').children('li').first().css('background-color', 'green');
    $('.dog').children('li').first().css('background-color', 'blue');




  });

  $("button#bark").click(function() {
    $(".cat").prepend("<li>Meow!</li>");
    $(".dog").prepend("<li>Bark!</li>");
    $('.cat').children('li').first().css('background-color', 'pink');
    $('.dog').children('li').first().css('background-color', 'yellow');




  });

});
