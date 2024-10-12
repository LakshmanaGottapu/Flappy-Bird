let PIPE_SPEED = 0.25;
const HOLE_HEIGHT = 200;
const app = document.getElementById('app');
const pipes = [];
export function updatePipe(delta){
    pipes.forEach((pipe, index) => {
        if(getPipePosition(pipe)>window.innerWidth){
            app.removeChild(pipe);
            pipes.splice(index,1);
        }
        setPipePosition(pipe, getPipePosition(pipe)+delta*PIPE_SPEED);
    })
}
export function createPipe(){
    const pipe = document.createElement('div');
    pipe.classList.add('pipe');
    const topPipe = document.createElement('div');
    const bottomPipe = document.createElement('div');
    topPipe.classList.add('segment', 'top');
    bottomPipe.classList.add('segment', 'bottom');
    const height = randomeHeight();
    topPipe.style.setProperty('--hole-height', height);
    bottomPipe.style.setProperty('--hole-height', window.innerHeight-height-HOLE_HEIGHT);
    pipe.appendChild(topPipe);
    pipe.appendChild(bottomPipe);
    app.appendChild(pipe);
    pipes.push(pipe);
}
function randomeHeight(){
    const min = 0.1;
    const max = 0.7;
    return (min+(max-min)*Math.random())*window.innerHeight;
}
function setPipePosition(pipe, position){
    pipe.style.setProperty('--pipe-right', position) ;
}

function getPipePosition(pipe){
    return parseFloat(getComputedStyle(pipe).getPropertyValue('--pipe-right'));
}