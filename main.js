let currentMusic = 0;
const music = document.querySelector("#audio");
const seekBar = document.querySelector(".seek-bar");
const songName = document.querySelector(".music-name");
const artist = document.querySelector(".artist-name");
const disc = document.querySelector(".disc");
// const image=document.querySelector("#image");
const currentTime = document.querySelector(".current-time");
const durationTime = document.querySelector(".song-duration-time");
const backwardBtn = document.querySelector(".backward-btn");
const playBtn = document.querySelector(".play-btn");
const forwardBtn = document.querySelector(".forward-btn");

let timer;
let autoplay = 1;

playBtn.addEventListener("click", () => {
  if (playBtn.className.includes("pause")) {
    music.play();
  } else {
    music.pause();
  }
  playBtn.classList.toggle("pause");
  disc.classList.toggle("play");
});
//song list
let song = (All_song = [
  {
    name: "first",
    path: "songs/song1.mp3",
    img: "image/Beast1.jpg",
    artist: "Ilayaraja",
  },
  {
    name: "second",
    path: "songs/song2.mp3",
    img: "image/Cobra.jpg",
    artist: "AR rahuman",
  },
  {
    name: "third",
    path: "songs/song3.mp3",
    img: "image/Vaali.jpg",
    artist: "Ilayaraja",
  },
  {
    name: "four",
    path: "songs/song4.mp3",
    img: "image/img2.jpg",
    artist: "karthick",
  },
]);

//setmusic
const setMusic = (i) => {
  seekBar.value = 0; //range of slide
  let song = All_song[i];
  currentMusic = i;
  music.src = song.path;
  songName.innerHTML = song.name;
  artist.innerHTML = song.artist;
  image.src = song.img;
  disc.style.backgroundImage = `url('${song.cover}')`;
  currentTime.innerHTML = "00:00";
  setTimeout(() => {
    seekBar.max = music.duration;

    durationTime.innerHTML = formatTime(music.duration);
  }, 300);
};
setMusic(0);
//formattime min &sec;

const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10);
  {
    min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  {
    if (sec < 10) {
      sec = `0${sec}`;
    }
  }
  return `${min} : ${sec}`;
};

//seekbar running
setInterval(() => {
  seekBar.value = music.currentTime;
  currentTime.innerHTML = formatTime(music.currentTime);
  if (Math.floor(music.currentTime) == Math.floor(seekBar.max)) {
    forwardBtn.click();
  }
}, 500);

seekBar.addEventListener("change", () => {
  music.currentTime = seekBar.value;
});

const playMusic = () => {
  music.play();
  playBtn.classList.remove("pause");
  disc.classList.add("play");
};

//forward btn
forwardBtn.addEventListener("click", () => {
  if (currentMusic >= song.length - 1) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }
  setMusic(currentMusic);
  playMusic();
});
//backward
backwardBtn.addEventListener("click", () => {
  if (currentMusic <= 0) {
    currentMusic = song.length - 1;
  } else {
    currentMusic--;
  }
  setMusic(currentMusic);
  playMusic();
});
