$(document).ready(function(){
  $(".btn1").click(function(){
    $(".first").css("display","none");
    $(".second").css("display","block");
  });
  $(".btn2").click(function(){
    $(".second").css("display","none");
    $(".first").css("display","block");
  });
  $(".list_tb6").click(function(){
    $("#popup").addClass("open");
  });
  $("#popup #close").click(function(){
    $("#popup").removeClass("open");
  });
    $('#popup input:checkbox').screwDefaultButtons({
      width: 35,
      height:35
    });
});
