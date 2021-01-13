$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#catSez").prepend("<li>meow</li>");
    $("ul#dogSez").prepend("<span> BARK </span>");
});

  $("button#dog").click(function() {
    $("ul#dogSez").prepend("<span> BARK </span>");
    $("ul#catSez").prepend("<li>meow</li>");
  });
});
