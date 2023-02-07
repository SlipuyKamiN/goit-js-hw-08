import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

const updateCurrentTime = data => {
  localStorage.setItem(CURRENT_TIME, data.seconds);
};
const recoveryTime = () => {
  const timeToRecover = localStorage.getItem(CURRENT_TIME);
  if (timeToRecover) {
    player.setCurrentTime(timeToRecover);
  }
};

player.on('timeupdate', throttle(updateCurrentTime, 1000));
recoveryTime();
