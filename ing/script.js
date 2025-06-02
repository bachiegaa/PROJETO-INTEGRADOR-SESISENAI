const audio = document.getElementById('podcast-audio');
const playButton = document.querySelector('.play-btn');
const forwardButton = document.querySelector('.forward-btn');
const backwardButton = document.querySelector('.backward-btn');
const progressBar = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const timeDisplay = document.querySelector('.time');
const playButtonIcon = document.getElementById('icon');
const icon = document.getElementById('icon');
const audio1 = document.getElementById('audio1');
const playBotao1 = document.getElementById('playBotao1');
const audio2 = document.getElementById('audio2');
const playBotao2 = document.getElementById('playBotao2');


function togglePlay() {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function updateProgress() {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percentage}%`;

    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}`;
}

function seekAudio(event) {
    const width = progressContainer.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function skipForward() {
    audio.currentTime += 10; 
}

function skipBackward() {
    audio.currentTime -= 10; 
}

playButton.addEventListener('click', togglePlay);
forwardButton.addEventListener('click', skipForward);
backwardButton.addEventListener('click', skipBackward);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', seekAudio);



function Audio1() {
    if (audio1.paused) {
        audio2.pause();
        playBotao2.innerHTML = '<i class="fas fa-play"></i>';
        audio1.play();
        playBotao1.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
        audio1.pause();
        playBotao1.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function Audio2() {
    if (audio2.paused) {
        audio1.pause();
        playBotao1.innerHTML = '<i class="fas fa-play"></i>';
        audio2.play();
        playBotao2.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
        audio2.pause();
        playBotao2.innerHTML = '<i class="fas fa-play"></i>';
    }
}


