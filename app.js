$(".card").flip({
    axis: 'x',
    speed: 300
  });
  
  var correctBuzzer = document.createElement('audio');
  correctBuzzer.setAttribute('src', 'http://www.qwizx.com/gssfx/usa/ff-clang.wav');
  
  var wrongBuzzer = document.createElement('audio');
  wrongBuzzer.setAttribute('src', 'http://www.qwizx.com/gssfx/usa/ff-strike.wav')
  
  $(".card").click(function() {
    $(this).flip(true);
    correctBuzzer.play();
    var toAdd = $(this).find(".score").text();
    //  alert(toAdd);
    if ($("#double").hasClass("active"))
      toAdd = toAdd * 2;
    else if ($("#triple").hasClass("active"))
      toAdd = toAdd * 3;
    //  alert(toAdd);
    $("#score").text(
      parseInt($("#score").text()) + parseInt(toAdd)
    );
  });
  
  $(".multiplier").click(function() {
    $(".multiplier").removeClass("active");
    $(this).addClass("active");
  });
  
  $("#flip-all").click(function() {
    $(".card").flip(true);
  });
  
  $("#unflip-all").click(function() {
    $(".card").flip(false);
    $("#score").text(0);
  });
  
  $("#wrong-answer").click(function() {
    $("h1").prepend("<div id=\"red-x\">X</div>")
    setTimeout(function() {
      $("#red-x").remove()
    }, 2000);
    wrongBuzzer.play();
  });
  