import {updateBall, reset} from './ball.js';

let lastRun=null;

function run(time){
  if(lastRun === null){
    lastRun = time;
    reset();
    window.requestAnimationFrame(run);
    return; 
  }
  const delta = time-lastRun;
  if(delta>=15){
    lastRun = time;
    updateBall(delta);
  }
  window.requestAnimationFrame(run);
}

window.requestAnimationFrame(run);



