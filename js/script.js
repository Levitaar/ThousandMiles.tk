var degrees = 0;

$(".crystal").each(function() {
    degrees += 180/$(".crystal").length;
    var rotation = "rotate(" + degrees + "deg)";
   $(this).css("transform", rotation);
});