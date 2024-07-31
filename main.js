const display = document.getElementById("watch");
let secondElapsed= 0;
let interval = null;


const setpad = (val) =>{
    // let val_= string(val);
    return String(val).padStart(2, "0");
}


function setTime () {

    const sec = secondElapsed % 60;
    const min = Math.floor(secondElapsed/60);

    display.innerHTML = `${setpad(min)}:${setpad(sec)}`;

}
function timer () {
    
    secondElapsed++;

    setTime();
}

function start() {

    if(interval) reset();

    interval = setInterval(timer, 1000);

    // setTime();
}

function stop_(){
    clearInterval(interval);
}

function reset () {
    stop_();
    secondElapsed = 0 ;
    interval = null;
    setTime();
}