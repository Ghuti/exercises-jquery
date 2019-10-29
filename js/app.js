$(function() {
  $("#navbarDropdown").click(function(){
    $(".dropdown-menu").toggle();
  })

  $(".nav-link").removeClass("disabled");

  $("#search").keyup(function(){
    $("#searchResult").html($("#search").val())
  })

  $("#btn").click(function(){
    console.log("ok");
    $("#blop").text("Web Developer " + Math.floor(Math.random()*10));
  })
});
