$(document).ready(function() {
  $("#flip").click(function(){
      $("#panel").slideDown("slow");
  });

  $("#apple").click(function(){
      $("#pineapple").slideDown("slow");
  });

  $("#minsoo").click(function(){
      $("#park").slideDown("slow");
  });

  $(".button").click(function(){
      $("#low").fadeOut("slow");
      $("#nnr").fadeOut("slow");
  });

  $(".button2").click(function(){
      $("#low").fadeIn("slow");
      $("#nnr").fadeIn("slow");

  });
});
