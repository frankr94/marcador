
let pointH = document.getElementById("score-home");
let countH = 0;
let pointG = document.getElementById("score-guest");
let countG = 0;


function scorePointHome1(){
    countH +=1;
    pointH.textContent = countH;
}

function scorePointHome2(){
    countH +=2;
    pointH.textContent = countH;
}

function scorePointHome3(){
    countH +=3;
    pointH.textContent = countH;
}

function scorePointGuest1(){
    countG +=1;
    pointG.textContent = countG;
}

function scorePointGuest2(){
    countG +=2;
    pointG.textContent = countG;
}

function scorePointGuest3(){
   countG +=3;
   pointG.textContent = countG;
}