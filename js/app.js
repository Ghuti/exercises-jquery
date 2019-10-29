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
    setTimeout(function() {
      $("#video").get(0).pause()
    }, 10000)
  })

  $(".nav-tabs a").click(function() {
    $(this).tab("show")
  })

  $("#showModal").click(function(){
    $("#modal").show()
  })

  $(".close, .blup").click(function () {
    $('#modal').modal('toggle');
  });

  $("#poppop").click(function() {
    $('#poppop').popover();
  })

  var progressBar = $("#progressBar");

  setInterval(function () {
    var width = parseInt(progressBar[0].style.getPropertyValue('width'))
    blyp = Math.floor(Math.random() * 50);
    console.log(blyp);
    if (width >= 100) {
      progressBar.css('width', 0)
    } else {
      progressBar.css('width', width + blyp + '%') // '100%'
    }
  }, 1000)


});
