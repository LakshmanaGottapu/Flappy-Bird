let PIPE_SPEED = 0.015;
// const pipes = document.querySelectorAll('.pipe');
const app = document.getElementById('app');
const pipes = [];
export function updatePipe(delta){
    // const pipe = document.createElement('div');
    // pipe.classList.add('pipe');
    // PIPE_SPEED += 0.0001
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
    // const bottomPipe = document.createElement('div');
    topPipe.classList.add('top');
    // bottomPipe.classList('bottom');
    topPipe.style.setProperty('--hole-height', randomeHeight());
    pipe.appendChild(topPipe);
    // bottomPipe.style.setProperty('--hole-height', randomeHeight());
    app.appendChild(pipe);
    pipes.push(pipe);
}
function randomeHeight(){
    const min = 0.3;
    const max = 0.6;
    return (min+(max-min)*Math.random())*window.innerHeight;
}
function setPipePosition(pipe, position){
    pipe.style.setProperty('--pipe-right', position) ;
}

function getPipePosition(pipe){
    return parseFloat(getComputedStyle(pipe).getPropertyValue('--pipe-right'));
}