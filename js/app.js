$(function() {
  $("#navbarDropdown").click(function(){
    $(".dropdown-menu").toggle();
  });

  $(".nav-link").removeClass("disabled");

  $("#search").keyup(function(){
    $("#searchResult").html($("#search").val())
  });

  $("#btn").click(function(){
    $("#blop").text("Web Developer " + Math.floor(Math.random()*10));
  });

  $(".list-group-item").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $("#playVideo").click(function (){
    $('#video').trigger("play")
  })


});
