//Function that displays the delay in the timer
function simpleTimeout(consoleTimer){
    console.timeEnd(consoleTimer);
}

//Creating 2 seconds timeout
console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");

//Creating a 1 second timeout
console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");

//Creating a 5 seconds timeout
console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");

//Creating a 50 millisecond timeout
console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");