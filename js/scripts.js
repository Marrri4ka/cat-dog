$(document).ready(function() {
  $("button#meow").click(function() {

    $('.cat').css('background-color', 'green');
    $('.dog').css('background-color', 'blue');
    $(".cat").prepend("<li>Meow!</li>");
    $(".dog").prepend("<li>Bark!</li>");

  });

  $("button#bark").click(function() {
    
    $('.cat').css('background-color', 'pink');
    $('.dog').css('background-color', 'yellow');
    $(".cat").prepend("<li>Meow!</li>");
    $(".dog").prepend("<li>Bark!</li>");
  });

});
