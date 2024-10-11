import {updateBall, reset} from './ball.js';
import { updatePipe, createPipe } from './pipes.js';

let lastRun=Number.NEGATIVE_INFINITY;
let lastPipeCreated=null;
function run(time){
  if(lastPipeCreated === null){
    lastPipeCreated = time;
    createPipe();
    window.requestAnimationFrame(run);
    return;
  }
  const theta = time-lastPipeCreated;
  const delta = time-lastRun;
  if(theta >= 3000){
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



