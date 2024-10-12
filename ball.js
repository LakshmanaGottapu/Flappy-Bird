import {pipes} from './pipes.js'
// import { lastRun, lastPipeCreated } from './main.js'
import {app} from './pipes.js';
const ball = document.querySelector('.ball');
const BALL_SPEED = 0.25;
let timeLastJump = Number.POSITIVE_INFINITY;
const JUMP_DURATION = 150;
const JUMP_SPEED = 3;
export function updateBall(delta){
    const rect = ball.getBoundingClientRect();
    if(gameOver() || rect.bottom >= window.innerHeight){
        reset();
        window.alert('game over! click OK to play one more');
        return;
    }
    if(rect.top <= 10){
        setPosition(10);
    }
    if(timeLastJump <= JUMP_DURATION){
        setPosition(getPosition()-BALL_SPEED*delta*JUMP_SPEED);
        timeLastJump += delta;
    }
    else{
        setPosition(getPosition()+BALL_SPEED*delta);
    }
}
export function reset(){
    setPosition(5);
    // lastRun=Number.NEGATIVE_INFINITY;
    // lastPipeCreated=null;
    window.removeEventListener('keydown', handleJump);
    window.addEventListener('keydown', handleJump);
    pipes.splice(0,pipes.length);
    app.innerHTML = ''
    // pipes.forEach((pipe, index) => {
    //     app.removeChild(pipe);
    //     pipes.splice(index,1);
    //     // setPipePosition(pipe, getPipePosition(pipe)+delta*PIPE_SPEED);
    // })
}
function handleJump(e){
    if (e.code !== 'Space') return;
    else {
        timeLastJump = 0;
    }
}
function gameOver(){
    const ballRect = ball.getBoundingClientRect();
    for(let pipe of pipes){
        const pipeRect = pipe.getBoundingClientRect();
        if(ballRect.left+ballRect.width>=pipeRect.left && ballRect.left<=pipeRect.left+pipeRect.width){
            const segmentTop = pipe.querySelector('.segment.top').getBoundingClientRect();
            const segmentBottom = pipe.querySelector('.segment.bottom').getBoundingClientRect();
            if(ballRect.top<=segmentTop.top+segmentTop.height || ballRect.top+ballRect.height>=segmentBottom.top)
                return true;
        }
    }
    return false;
}
function setPosition(position){
    ball.style.setProperty('--ball-top', position) ;
}

function getPosition(){
    return parseFloat(getComputedStyle(ball).getPropertyValue('--ball-top'));
}