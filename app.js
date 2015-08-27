// Globals
// Grabs the id's for digits
var hour = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    miliseconds = document.getElementById('miliseconds'),

// Grabs the id's for the buttons
    startButton = document.getElementById('startButton'),
    pauseButton =  document.getElementById('pauseButton'),
    stopButton = document.getElementById('stopButton'),
    resetButton = document.getElementById('resetbutton'),

    setTime,
    currentTime,
    difference,
    timer = 0,
    interval;

// Gets current time and sets the interval
var start = function() {
  setTime = Date.now();
  interval = setInterval(update, 10);
};

// This cancel the setInterval when called
var pause = function() {
  clearInterval(interval);
};

// This cancels & sets the timer to 0
var stop = function() {
  clearInterval(interval);
  timer = 0;
};

// This sets timer to 0 then calls updateScreen() to show a new time
var reset = function() {
  timer = 0;
  updateScreen();
};

// Updates the current time
var update = function() {
  currentTime = Date.now();
  difference = currentTime - setTime;
  timer += difference;

  updateScreen();
  setTime = currentTime;
};

// Sets all digit value to be double digits even when under 10
var doubleDigit = function(num) {
  var numString = num.toString();

  if (numString.length < 2) {
    return '0' + numString;
  } else {
    return numString;
  }
};

// Converts the current time to miliseconds
var updateScreen = function() {
  var time = timer/1000,
      timeMiliSeconds = parseInt((time % 1) * 100);
      timeSeconds = Math.floor(time);
      timeMinutes = Math.floor(timeSeconds/60);
      timeHours = Math.floor(timeMinutes/60);

  miliseconds.innerText = doubleDigit(timeMiliSeconds);
  seconds.innerText = doubleDigit(timeSeconds);
  minutes.innerText = doubleDigit(timeMinutes);
  hours.innerText = doubleDigit(timeHours);
};

// Fires the start() when the #startButton is clicked
startButton.addEventListener('click', start);
// Fires the pause() when the #pauseButton is clicked
pauseButton.addEventListener('click', pause);
// Fires the stop() when the #stopButton is clicked
stopButton.addEventListener('click', stop);
// Fires the reset() when the #stopButton is clicked
resetButton1.addEventListener('click', reset);
