import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = 'videoplayer-current-time';

const updateCurrentTime = data => {
  localStorage.setItem(currentTime, data.seconds);
};
player.on('timeupdate', throttle(updateCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem(currentTime));
