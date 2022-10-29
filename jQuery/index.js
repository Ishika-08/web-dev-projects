$(document).keypress(function(event) {
  $("h1").text(event.key);
});

$("h1").addClass("big-title");
