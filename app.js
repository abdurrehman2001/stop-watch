var milliSeconds = 0;
var seconds = 0;
var minute = 0;
var interval;
var min_heading = document.getElementById("min")
var sec_heading = document.getElementById("sec")
var msec_heading = document.getElementById("msec")

function timer() {
    milliSeconds++
    msec_heading.innerHTML = milliSeconds
    if (milliSeconds >= 100) {
        seconds++
        sec_heading.innerHTML = seconds
        milliSeconds = 0
    }
    else if (seconds >= 60) {
        minute++
        min_heading.innerHTML = minute
        seconds = 0
    }
}

function start() {
    document.getElementById("bn").disabled = true
    interval = setInterval(timer, 10)
}

function stop() {
    document.getElementById("bn").disabled = false
    clearInterval(interval)
}

function reset() {
    minute = 0
    seconds = 0
    milliSeconds = 0
    min_heading.innerHTML = minute
    sec_heading.innerHTML = seconds
    msec_heading.innerHTML = milliSeconds
    document.getElementById("bn").disabled = false
    stop()
}