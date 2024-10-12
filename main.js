import {updateBall, reset} from './ball.js';
import { updatePipe, createPipe } from './pipes.js';

let lastRun=Number.NEGATIVE_INFINITY;
let lastPipeCreated=null;
let thetaLimit = 2000;
function run(time){
  thetaLimit -= 0.1;
  if(lastPipeCreated === null){
    lastPipeCreated = time;
    createPipe();
    window.requestAnimationFrame(run);
    return;
  }
  const theta = time-lastPipeCreated;
  const delta = time-lastRun;
  if(theta >= thetaLimit){
    lastPipeCreated = time;
    createPipe();
  }
  if(delta>=15){
    lastRun = time;
    updateBall(delta);
    updatePipe(delta);
  }
  window.requestAnimationFrame(run);
}

window.requestAnimationFrame(run);



