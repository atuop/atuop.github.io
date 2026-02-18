var splash_value=Math.floor(Math.random()*19);
var splash_texts=[
    "Made by me!",
    "Deltarune!",
    "-_-",
    "[ insert text ]",
    "Asriel is the knight!",
    "Yellow minercaft text",
    "Auf der Heide blüht ein kleines Blümelein!",
    "subscribe to Atuop!",
    "ink sans",
    "hxbhnqjcdqschb",
    "frisk = mona lisa 2",
    "If art school says nein , Europe will be mein!",
    "Error",
    "Refresh the page",
    "Kris is sigma",
    "Name the fallen human!",
    "Clover gun hat",
    "I remember you're genocides!",
    "MR (ant) TENNA's T! V! TIME",
    "your taking to long!"
];
var final=splash_texts[splash_value];
document.getElementById("splash").textContent=final;
const link=document.getElementById("rick2");
link.addEventListener("click", function(){
    document.getElementById("rick").textContent="Haha got rick rolled in 2026 lol";
})

