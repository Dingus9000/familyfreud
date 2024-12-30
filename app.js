$(".card").flip({
  axis: 'x',
  speed: 300
});

var correctBuzzer = document.createElement('audio');
correctBuzzer.setAttribute('src', 'https://cdn.freesound.org/previews/476/476178_6101353-lq.mp3');

var wrongBuzzer = document.createElement('audio');
wrongBuzzer.setAttribute('src', 'https://cdn.freesound.org/previews/476/476177_6101353-lq.mp3')

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
$("#musicians").click(function () {
  changeTo("musicians", "Global results category: Musicians!")
});

const data = {
  ihmiset: ["Alexander Stubb","Pekka Haavisto","Olli Rehn","Jussi Halla-aho","Windows95Man","Rolf Nordmo"],
  kuinka: ["kauan mykoplasma tarttuu","monta päivää on jouluun","usein jalkapallon EM kisat järjestetään","monta äänioikeutettua Suomessa","korkea on Kebnekaise","pitkä on Suomen pisin puu"],
  miksi: ["putket jäätyy kun lauhtuu","tänään liputetaan","nyt lakkoillaan","Alankomaat diskattiin Euroviisuista","Mobilepay ei toimi","kaikki vihaa Hämeenlinnaa"],
  mitä: ["tarkoittaa skibidi","tarkoittaa norjalainen puu","tarkoittaa vox populi","on henkilötiedustelu","tarkoittaa womp womp","tarkoittaa pookie"],
  musiikki: ["Windows95Man","Sara Siipola","Harmonikka","Joost Klein","Metallica Helsinki","Isaac Sene"],
  viihde: ["Pottukoira kick","Windows95Man","Myrskyluodon Maija","Kick","Sara Siipola","Futistietäjä"],
  ruokareseptit: ["Crumbl cookies","Pihlajanmarja","Kurkkusalaatti","Paahtopaisti","Sukiyaki","Bao bun"],
  news: ["U.S. Election","Excessive heat","Olympics","Hurricane Milton","台風 気象 情報 台風 第 10 号","Iran Rafah"],
  people: ["Donald Trump","Catherine, Princess of Wales","Kamala Harris","Imane Khelif","Joe Biden","Mike Tyson"],
  movies: ["Inside Out 2","Deadpool & Wolverine","Saltburn","Beetlejuice Beetlejuice","Dune: Part Two","It Ends with Us"],
  passings: ["Liam Payne","Toby Keith","O.J. Simpson","Shannen Doherty","Akira Toriyama","Ratan Tata"],
  tvshows: ["Baby Reindeer","Fallout","House of the Dragon","Heeramandi","Shōgun","The Perfect Couple"],
  games: ["Connections","Palworld","Infinite Craft","Sprunki","Helldivers 2","Wuthering Waves"],
  musicians: ["Diddy","Usher","Linkin Park","Sabrina Carpenter","Justin Timberlake","Ángela Aguilar"]
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
