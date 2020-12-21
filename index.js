let fillbar = document.querySelector('.fill')
let audios =  ['audio_one.mp3','audio_two.mp3']
let covers = ['cover1.jpg','cover2.jpg']
let currentTime = document.querySelector('.time')
let pp = document.querySelector('.play-pause')
let nextTrack = document.querySelector('.nextAudio')
let prevTrack = document.querySelector('.prevAudio')
let cover = document.querySelector('.img').firstElementChild
let currentCover = 0;
//
 let audio = new Audio()
let currentSong = 0;

window.onload = playSong;
function playSong() {
    audio.src = audios[currentSong]
    audio.play();

}
function togglePlayPause(){
    if (audio.paused ){
        audio.play()
        let playBtn = document.querySelector('.play-pause');
        playBtn.innerHTML = '<i class="fa fa-pause"></i>'
        playBtn.style.paddingLeft = '30px'
    }
    else {
        audio.pause()
        let playBtn = document.querySelector('.play-pause');
        playBtn.innerHTML = '<i class="fa fa-play"></i>'
        playBtn.style.paddingLeft = '33px'

    }
}


//dinamic fillbar;
audio.addEventListener('timeupdate',function (){
    let position = audio.currentTime / audio.duration;
    fillbar.style.width =position * 100 + '%'   ;
    convertTime(Math.round(audio.currentTime))

})
function convertTime(seconds){
    let min = Math.floor(seconds/60);
    let sec = seconds % 60;
    if (min <10){
        min = '0' + min ;
    }
    if (sec <10){
        sec = '0' + sec ;
    }
    currentTime.textContent = min +':'+ sec;
    totalTime(Math.round(audio.duration));

}
function totalTime(seconds){
    let min = Math.floor(seconds/60);
    let sec = seconds % 60;
    if (min <10){
        min = '0' + min ;
    }
    if (sec <10){
        sec = '0' + sec ;
    }
    currentTime.textContent += ' & ' + min+':'+sec;
}

function nextAudio(){
    currentSong++;
    if (currentSong >1){
        currentSong = 0;
        }
    playSong()
    cover.src = `cover${currentSong+1}.jpg`
    // alert(`<img src = "cover${currentSong+1}.jpg">`)

}



function prevAudio(){
    currentSong--;

    if (currentSong <0){
        currentSong = 1;
    }
    playSong()
    // alert(currentSong)
    cover.outerHTML=''
    cover.src = `cover${currentSong+1}.jpg`
    // alert(`<img src = "cover${currentSong+1}.jpg">`)
}
pp.onclick = togglePlayPause;
nextTrack.onclick = nextAudio;
prevTrack.onclick = prevAudio;

