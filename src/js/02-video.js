import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// var throttle = require('lodash.throttle');

const currentTime_Key = `videoplayer-current-time`;
const iframe = document.querySelector(`iframe`);
const player = new Player(iframe, {
    loop: true,
    fullscrean: true,
    quality: `1080p`,
})

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(currentTime_Key, JSON.stringify(seconds));
};

player.on(`timeupdate`, throttle(getCurrentTime, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(currentTime_Key)) || 0);


