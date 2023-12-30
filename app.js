$(".card").flip({
  axis: 'x',
  speed: 300
});

var correctBuzzer = document.createElement('audio');
correctBuzzer.setAttribute('src', 'http://www.qwizx.com/gssfx/usa/ff-clang.wav');

var wrongBuzzer = document.createElement('audio');
wrongBuzzer.setAttribute('src', 'http://www.qwizx.com/gssfx/usa/ff-strike.wav')

$(".card").click(function () {
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

$(".multiplier").click(function () {
  $(".multiplier").removeClass("active");
  $(this).addClass("active");
});

$("#flip-all").click(function () {
  $(".card").flip(true);
});

$("#unflip-all").click(function () {
  $(".card").flip(false);
  $("#score").text(0);
});

$("#wrong-answer").click(function () {
  $("h1").prepend("<div id=\"red-x\">X</div>")
  setTimeout(function () {
    $("#red-x").remove()
    $("#red-x").remove()
  }, 2000);
  wrongBuzzer.play();
});

$("#ihmiset").click(function () {
  changeTo("ihmiset", "Finland results category: Ihmiset!")
});

$("#kuinka").click(function () {
  changeTo("kuinka", "Finland results category: Kuinka ...?!")
});

$("#miksi").click(function () {
  changeTo("miksi", "Finland results category: Miksi ...?!")
});

$("#mitä").click(function () {
  changeTo("mitä", "Finland results category: Mitä ...?!")
});
$("#viihde").click(function () {
  changeTo("viihde", "Finland results category: Viihde!")
});
$("#musiikki").click(function () {
  changeTo("musiikki", "Finland results category: Musiikki!")
});
$("#ruokareseptit").click(function () {
  changeTo("ruokareseptit", "Finland results category: Ruokareseptit!")
});
$("#news").click(function () {
  changeTo("news", "Global results category: News!")
});
$("#people").click(function () {
  changeTo("people", "Global results category: People!")
});
$("#movies").click(function () {
  changeTo("movies", "Global results category: Movies!")
});
$("#passings").click(function () {
  changeTo("passings", "Global results category: Passings!")
});
$("#tvshows").click(function () {
  changeTo("tvshows", "Global results category: Tv Shows!")
});
$("#games").click(function () {
  changeTo("games", "Global results category: Games!")
});

const data = {
  ihmiset: ["Käärijä",
  "Loreen",
  "Riikka Purra",
  "Severi Lahtinen",
  "Marjatta Leppänen",
  "Marko Ahtisaari"],
  kuinka: ["syvällä Titanic on","monta hukkui juhannuksena 2023","nopeasti antibiootti vaikuttaa","usein eduskuntavaalit pidetään","paljon proteiinia päivässä","pitkä Käärijä on"],
  miksi: ["liputetaan 1.10.","pörssisähkö on kallista","Reppu-Heppu kuoli","Venäjä toimii niin kuin se toimii","lippu puolitangossa tänään","liputetaan 10.11."],
  mitä: ["tarkoittaa NPC","tarkoittaa slay","tarkoittaa uwu","tarkoittaa sigma","tapahtuu jos hallitus kaatuu","tarkoittaa veija"],
  musiikki: ["Käärijä","Coldplay","Loreen","Pate Mustajärvi","Sara Siipola","Rammstein Helsinki"],
  viihde: ["Oppenheimer","Hogwarts Legacy","Barbie movie","Pentulive","Amazing Race Suomi","The Last of Us"],
  ruokareseptit: ["Mustatorvisieni","Pina Colada","Karvarousku","Sienirisotto","Pulmupuolukat","Quesadilla"],
  news: ["War in Israel and Gaza","Titanic submarine","Turkey earthquake","Hurricane Hilary","Hurricane Idalia","Hurricane Lee"],
  people: ["Damar Hamlin","Jeremy Renner","Andrew Tate","Kylian Mbappé","Travis Kelce","Jenna Ortega"],
  movies: ["Barbie","Oppenheimer","Jawan","Sound of Freedom","John Wick: Chapter 4","Avatar: The Way of Water"],
  passings: ["Matthew Perry","Tina Turner","Sinéad O'Connor","Ken Block","Jerry Springer","Angus Cloud"],
  tvshows: ["The Last of Us","Wednesday","Ginny & Georgia","One Piece","Kaleidoscope","King the Land"],
  games: ["Hogwarts Legacy","The Last of Us","Connections","Battlegrounds Mobile India","Starfield","Baldur's Gate 3"],
}
var changeTo = function (category, title) {
  console.log(category)
  $(".card").flip(false);
  $("#score").text(0);
  $("#title").text(title);
  console.log(data[category])
  $("#a1").text(data[category][0]);
  $("#a2").text(data[category][1]);
  $("#a3").text(data[category][2]);
  $("#a4").text(data[category][3]);
  $("#a5").text(data[category][4]);
  $("#a6").text(data[category][5]);
}
