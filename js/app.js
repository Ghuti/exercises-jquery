$(function() {
  $("#navbarDropdown").click(function(){
    $(".dropdown-menu").toggle();
  });

  $("#navbarSupportedContent .nav-link").removeClass("disabled");

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
  /*
  $('#buttonVideo').click(function() {
  var video = $('video').get(0);

  video.play();

  setTimeout(fuction() {
  videopause();
  })
}, 1000)
*/

  $(".nav-tabs a").click(function() {
    $(this).tab("show")
  })
  /*
  var tabs =$('tabs');

  tabs.find('.nav-link').click(function(){
    var name = $(this).getAttribute('href');

    $('#' + name).show();
})
  */
  $("#showModal").click(function(){
    $("#modal").show()
  })

  $(".close, .blup").click(function () {
    $('#modal').modal('toggle');
  });
  /*
  $('#buttonModal').click(fuction () {
  var modal = $('modal');
  modal.show();
  modal.find ('[data-dismiss='modal']').one('click', )
  modal.hide();
})
  */
  $("#poppop").click(function() {
    $('#poppop').popover();
  })

  var progressBar = $("#progressBar");

  setInterval(function () {
    var width = parseInt(progressBar[0].style.getPropertyValue('width'))
    blyp = Math.floor(Math.random() * 10);
    console.log(blyp);
    if (width >= 100) {
      progressBar.css('width', 0)
    } else {
      progressBar.css('width', width + blyp + '%') // '100%'
    }
  }, 1000)

  var isPlayed = true;
  setInterval(function(){
    if(isPlayed){

    $('#spinner').css('animation-play-state', 'paused');
    isPlayed = false;
    }
    else{

    $('#spinner').css('animation-play-state', 'running');
    isPlayed = true;
    }
  }, 3333)

});
