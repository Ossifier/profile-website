const loadPage = document.querySelector('.load-page'),
    prgBarEmpty = document.querySelector('.progress-bar-empty'),
    prgBarFill = document.querySelector('.progress-bar-fill'),
    wlcmText = document.querySelector('.welcome-text');

let i = 0,
    Throttle = 0.8; // Decrease this number for slower simulated loadtime, or vice versa.

function draw() {
  if(i <= 101) {
    var r = Math.random();
    
    requestAnimationFrame(draw);  
    prgBarFill.style.width = i + '%';
    
    if(r < throttle) { // Simulates d/l speed and uneven bitrate.
      i = i + r;
    }
  } else {;
    prgBarFill.classList.add('done-a');
    setTimeout( () => {
      prgBarFill.classList.add('hidden');
      prgBarEmpty.classList.add('hidden');
    }, 200);
          
    setTimeout( () => {
      wlcmText.classList.add('reveal');
    }, 500);
          
    setTimeout( () => {
      prgBarFill.classList.add('hidden');
      loadPage.classList.add('hidden');
      wlcmText.classList.remove('reveal');
      wlcmText.classList.add('hidden');
    }, 2500);
          
  }
}

draw();
