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
  
  $( "#henkilot" ).click(function() {
    changeTo("henkilot", "Finland results category: Henkilöt!")
});

  $( "#kysymykset" ).click(function() {
    changeTo("kysymykset", "Finland results category: Kysymykset!")
});

$( "#puheenaiheet" ).click(function() {
    changeTo("puheenaiheet", "Finland results category: Puheenaiheet!")
});

  var data = {
      henkilot: ["Vesa-Matti Loiri","Iivo Niskanen","Putin","Ilkka Kanerva","Yona","Queen Elizabeth"],
      kysymykset: ["Miksi Venäjä hyökkää Ukrainaan?","Milloin virvotaan?","Mitä mursu syö?","Mitä tarkoittaa NPC?","Miksi sähkön hinta nousee?","Mitä tarkoittaa slay?"],
      puheenaiheet: ["Ukraina","Wordle","olympialaiset ohjelma","Vesa-Matti Loiri","ruplan kurssi","Jeffrey Dahmer"]   
  }

  var changeTo = function( category, title ) {
    console.log(category)
    $(".card").flip(false);
    $("#score").text(0);
    $("#title").text(title);
    $("#a1").text(data[category][0]);
    $("#a2").text(data[category][1]);
    $("#a3").text(data[category][2]);
    $("#a4").text(data[category][3]);
    $("#a5").text(data[category][4]);
    $("#a6").text(data[category][5]);
  }
