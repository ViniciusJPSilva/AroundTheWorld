
const bgMusic = document.querySelector("#bg-music")
const playButton = document.querySelector("#play-music");

playButton.addEventListener('click', function() {
    document.body.style.background = "url(\"img/daft_punk.gif\") no-repeat fixed";
    document.body.style.backgroundSize = "cover";
    playButton.style.display = "none";
    bgMusic.currentTime = 64;
    bgMusic.play();
});