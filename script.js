function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 105; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#panelbottom").innerHTML = clutter;
}

var score = 0;
var timer = 60;
var hitrn = 0;

function runTimer() {
    var timerInterval = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            document.querySelector("#panelbottom").innerHTML = `<h1>Game over</h1>`;
            clearInterval(timerInterval);
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#panelbottom").addEventListener("click", function(dets) {
    var clickednum = Number(dets.target.textContent);
    console.log(clickednum);
    if (clickednum === hitrn)
        increaseScore();
    makeBubble(); 
    getNewHit(); 
});

makeBubble();
runTimer();
getNewHit();
