
const bgMusic = document.querySelector("#bg-music")
const playButton = document.querySelector("#play-music");

playButton.addEventListener("click", function() {
    changeBackground();
    playButton.style.display = "none";
    bgMusic.currentTime = 64;
    bgMusic.play();
});

addEventListener("resize", function() {
    changeBackground();
});

function changeBackground() {
    document.body.style.background = "url(\"img/daft_punk.gif\") no-repeat";
    document.body.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";
};
