let video = document.getElementById("myVideo");

let playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", function(){
    video.play();

});

let pauseBtn = document.getElementById("pauseBtn");
pauseBtn.addEventListener("click", function(){

});

let freezeBtn = document.getElementById("freezeBtn");
freezeBtn.addEventListener("mousedown", function(){
    video.pause();
});
freezeBtn.addEventListener("mouseup", function(){
    video.play();
});

let seekBar = document.getElementById("seekBar");
seekBar.addEventListener("change", function(){
    let time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
});

seekBar.addEventListener("timeupdate", function(){
    let vale = (100 / video.duration) * video.currentTime;
    seekBar.value;
});