const loadPage = document.querySelector('.load-page'),
    prgBarEmpty = document.querySelector('.progress-bar-empty'),
    prgBarFill = document.querySelector('.progress-bar-fill'),
    wlcmText = document.querySelector('.welcome-text');

let i = 0,
    throttle = 0.8;




// prgBarFill.style.width = '10%';
// prgBarFill.style.transform = 'translateX(5%)';

function draw() {
  if(i <= 101) {
    var r = Math.random();
    
    requestAnimationFrame(draw);  
    // prgBarFill.style.width = i + '%';
    prgBarFill.style.width = i + '%';
    // counter.innerHTML = Math.round(i) + '%';
    
    if(r < throttle) { // Simulate d/l speed and uneven bitrate
      i = i + r;
    }
  } else {;
    // prgBarFill.className += " done";
    prgBarFill.classList.add('done-a');
    setTimeout( () => {
      prgBarFill.classList.add('hidden');
      prgBarEmpty.classList.add('hidden');
    }, 200)
    setTimeout( () => {
      wlcmText.classList.add('reveal');
    }, 500)
    // counter.style.opacity = '0';
    setTimeout( () => {
      // prgBarFill.className += " hidden";
      prgBarFill.classList.add('hidden');
      loadPage.classList.add('hidden');
      wlcmText.classList.remove('reveal');
      wlcmText.classList.add('hidden');
      // counter.className += " hidden";
      // TEST.className += ' hidden';

    }, 2500);
  }
}

draw();




/* function drawProgressBar() {
  if (i <= 100) {
    let r = Math.random();

    requestAnimationFrame(drawProgressBar);
    prgBarFill.getElementsByClassName.width = i + '%';

    if (r < throttle) {
      i = i + r;
    } else {
      prgBarFill.classList.add('done');
      setTimeout( () => {
        prgBarFill.classList.add('hidden');
      }, 1000);
    }

  }
}

drawProgressBar(); */

/* var body = document.querySelector('body'),
    TEST = document.getElementById('butt'),
    bar = document.querySelector('.progress-bar'),
    counter = document.querySelector('.count'),
    i = 0,
    throttle = 0.7; // 0-1

(function draw() {
  if(i <= 100) {
    var r = Math.random();
    
    requestAnimationFrame(draw);  
    bar.style.width = i + '%';
    counter.innerHTML = Math.round(i) + '%';
    
    if(r < throttle) { // Simulate d/l speed and uneven bitrate
      i = i + r;
    }
  } else {;
    bar.className += " done";
    counter.style.opacity = '0';
    setTimeout( () => {
      bar.className += " hidden";
      counter.className += " hidden";
      TEST.className += ' hidden';

    }, 1000);
  }
}) (); */