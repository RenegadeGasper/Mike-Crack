
// let audio = new Audio("song.mp3");
// audio.play();

let button = document.getElementById("josan-button");
let josan = document.getElementById("josan-container");
let audio = document.getElementById("auto");
let body = document.getElementById("container")

button.addEventListener("click", () => {
    body.style.backgroundImage = 'url("./spongebob-background.avif")';
    button.style.display = "none";
    josan.style.display = "flex";
    auto.play();
}); 