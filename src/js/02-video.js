import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);

const updateCurrentTime = data => {
  localStorage.setItem(CURRENT_TIME, data.seconds);
};

player.on('timeupdate', throttle(updateCurrentTime, 1000));
