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

$( "#urheilu" ).click(function() {
    changeTo("urheilu", "Finland results category: Urheilu!")
});
$( "#uutiset" ).click(function() {
    changeTo("uutiset", "Finland results category: Uutiset!")
});
$( "#viihde" ).click(function() {
    changeTo("viihde", "Finland results category: Viihde!")
});
$( "#searches" ).click(function() {
    changeTo("searches", "Global results category: Searches!")
});
$( "#news" ).click(function() {
    changeTo("news", "Global results category: News!")
});
$( "#people" ).click(function() {
    changeTo("people", "Global results category: People!")
});
$( "#actors" ).click(function() {
    changeTo("actors", "Global results category: Actors!")
});
$( "#movies" ).click(function() {
    changeTo("movies", "Global results category: Movies!")
});
$( "#passings" ).click(function() {
    changeTo("passings", "Global results category: Passings!")
});
$( "#tvshows" ).click(function() {
    changeTo("tvshows", "Global results category: Tv Shows!")
});
$( "#songs" ).click(function() {
    changeTo("songs", "Global results category: Songs!")
});
$( "#culturallandmarks" ).click(function() {
    changeTo("culturallandmarks", "Global results category: Cultural land marks!")
});
$( "#pets" ).click(function() {
    changeTo("pets", "Global results category: Pets!")
});
$( "#games" ).click(function() {
    changeTo("games", "US results category: Games!")
});
$( "#howtopronounce" ).click(function() {
    changeTo("howtopronounce", "US results category: How To Pronounce!")
});
$( "#shortages" ).click(function() {
    changeTo("shortages", "US results category: Shortages!")
});
$( "#definitions" ).click(function() {
    changeTo("definitions", "US results category: Definitions!")
});

  var data = {
      henkilot: ["Vesa-Matti Loiri","Iivo Niskanen","Putin","Ilkka Kanerva","Yona","Queen Elizabeth"],
      kysymykset: ["Miksi Venäjä hyökkää Ukrainaan?","Milloin virvotaan?","Mitä mursu syö?","Mitä tarkoittaa NPC?","Miksi sähkön hinta nousee?","Mitä tarkoittaa slay?"],
      puheenaiheet: ["Ukraina","Wordle","olympialaiset ohjelma","Vesa-Matti Loiri","ruplan kurssi","Jeffrey Dahmer"],
      urheilu: ["olympialaiset ohjelma","Iivo Niskanen","olympia jääkiekko","em kisat yleisurheilu","Mikael Granlund","Valtteri Filppula"],
      uutiset: ["Ukraina","ruplan kurssi","mursu","enterorokko","aluevaalit","pörssisähkön hinta"],
      viihde: ["Wordle","Finnkino","pentulive","Stranger Things","Flow festival","Ruisrock"],
      searches: ["Wordle","India vs England","Ukraine","Queen Elizabeth","Ind vs SA","World Cup"],
      news: ["Ukraine","Queen Elizabeth passing","Election results","Powerball numbers","Monkeypox","Hurricane Ian"],
      people: ["Johnny Depp","Will Smith","Amber Heard","Vladimir Putin","Chris Rock","Novak Djokovic"],
      actors: ["Johnny Depp","Will Smith","Amber Heard","Chris Rock","Jada Pinkett Smith","Joseph Quinn"],
      movies: ["Thor: Love and Thunder","Black Adam","Top Gun: Maverick","The Batman","Encanto","Brahmāstra: Part One – Shiva"],
      passings: ["Queen Elizabeth","Betty White","Anne Heche","Bob Saget","Aaron Carter","Olivia Newton-John"],
      tvshows: ["Euphoria","House of the Dragon","Moon Knight","The Watcher","Inventing Anna","Dahmer"],
      songs: ["Tak Ingin Usai - Keisya Levronka","Pasoori - Ali Sethi and Shae Gill","Glimpse of Us - Joji","Satru 2 - Denny Caknan and Happy Asmara","ミックスナッツ -  Official Hige Dandism","新 時代 - Ado"],
      culturallandmarks: ["Buckingham Palace, London","Big Ben, London","Pyramid of Giza"," Christ the Redeemer, Brazil","Royal Palace of Brussels","Chiang Kai-shek Memorial Hall, Taipei"],
      pets: ["cat","cat","cat","Aspin","Labrador Retriever","Pit bull"],
      games: ["Wordle and all spinoffs","Elden Ring","God of War Ragnarök","Lost Ark","Overwatch 2","still wordle"],
      shortages: ["Diesel shortage","Baby formula shortage","Tampon shortage","Adderall shortage","Sriracha shortage","Food shortage"],
      howtopronounce: ["Qatar","Kyiv","puzzle","Omicron","Encanto","Xochitl"],
      definitions: ["Rupee","Oligarch","Cacao","Homer","Recession","Canny"]
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
