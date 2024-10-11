let PIPE_SPEED = 0.15;
// const pipes = document.querySelectorAll('.pipe');
const app = document.getElementById('app');
const pipes = [];
export function updatePipe(delta){
    // const pipe = document.createElement('div');
    // pipe.classList.add('pipe');
    PIPE_SPEED += 0.0001
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
    app.appendChild(pipe);
    pipes.push(pipe);
}
function setPipePosition(pipe, position){
    pipe.style.setProperty('--pipe-right', position) ;
}

function getPipePosition(pipe){
    return parseFloat(getComputedStyle(pipe).getPropertyValue('--pipe-right'));
}