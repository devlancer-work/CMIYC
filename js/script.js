const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const turtle = document.getElementById('turtle');
const number = document.querySelector('.number');
const modal = document.getElementById('modal');
const result = document.getElementById('result');


let timeStamp = 0;


startBtn.addEventListener('click', () => {

    startBtn.classList.add('hidden');
    shownum();
});

const shownum = () => {
    number.classList.remove('hidden');
    let counter = 3;

    function reduceNum() {
        counter--;
        if(counter <= 0){
            exitInterval();
            number.classList.add('hidden');
            turtleRun();
        }
        number.textContent = counter;

    }

    const numInterval = setInterval(reduceNum, 1000);
    function exitInterval (){
        clearInterval(numInterval);
    }
}

const turtleRun = () => {
    turtle.classList.remove('hidden');

    // to run turtle
    function gameOn(){
        let top = Math.floor(Math.random() * 90);
        let left = Math.floor(Math.random() * 90);
        turtle.style.top = `${top}%`;
        turtle.style.left = `${left}%`;
    }


    turtle.addEventListener('click', () => {
        exitGame();
        result.textContent = `Turtle Caught!!`;
    });

    stopBtn.addEventListener('click', () => {
        exitGame();
        result.textContent = `Stopped!!`;
        document.querySelector('.compliment').textContent = `-- Don't Give Up --`;
    });

    // to calculate time

    function runTime(){
        timeStamp++;
        let minutes = Math.floor(timeStamp / 60);
        let seconds = (timeStamp - minutes);
        if(minutes < 10){
            minutes = `0${minutes}`;
        }
        if(seconds < 10){
            seconds = `0${seconds}`;
        }
        
        document.getElementById('time').textContent =  `${minutes}:${seconds}`;
        document.querySelector('.time-period').textContent = `${minutes}:${seconds}`;
    
    }

    const gameInterval = setInterval(gameOn, 500);
    const timeInterval = setInterval(runTime, 1000);

    function exitGame(){
        clearInterval(gameInterval);
        clearInterval(timeInterval);
        endGame();
    }
}

const endGame = () => {
    modal.classList.remove('hidden');


}




