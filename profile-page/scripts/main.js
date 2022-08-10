const navBtnsArray = document.getElementById('main-nav-buttons').getElementsByTagName('button'); //
const contentHdrsArray = document.getElementsByClassName('content-header');
const contentMainArray = document.getElementsByClassName('content-main');

let resizeTimer;

window.addEventListener('resize', () => {                               // This function stops transitions and animations from firing when the window is resized.
    document.body.classList.add('stop-animations');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('stop-animations');
    }, 300);
});

for (let btn = 0; btn < navBtnsArray.length; btn++) {                   // Applies default styles to all buttons in the main navigation container on page load.
    navBtnsArray[btn].classList.add('nav-btn-unfocused');
};

navBtnsArray[0].classList.add('nav-btn-focused');                       // Adds focused styling to the About Me button after loading.   
contentHdrsArray[0].style.opacity = '1';                                // Adds opacity and zIndex styling to headers; this ensures that upon switching the first -->
contentHdrsArray[0].style.zIndex = '1';                                 // >-- page that the header animation will properly fire.

for (let cnt = 1; cnt < contentHdrsArray.length; cnt++) {               // Hides all headers and main content containers except the first "About Me" page (note; the index -->
    contentHdrsArray[cnt].style.opacity = '0';                          // >-- starts at 0, not 1, so "0"th index items remains visible).
    contentHdrsArray[cnt].style.zIndex = '-1';

    contentMainArray[cnt].style.opacity = '0';
    contentMainArray[cnt].style.zIndex = '-1';
};

for (let a = 0; a < navBtnsArray.length; a++) {                         // Adds Event Listeners to all navigation buttons that control style changes and ensures that styles -->
    navBtnsArray[a].addEventListener('click', () => {                   // >-- applied DO NO CHANGE when a click occurs elsewhere. The first "if" check removes focus -->
        for (let b = 0; b < navBtnsArray.length; b++) {                 // >-- styling if another button is clicked.
            if (navBtnsArray[b].classList.contains('nav-btn-focused')) {
                navBtnsArray[b].classList.remove('nav-btn-focused')
            };
        };
        navBtnsArray[a].classList.add('nav-btn-focused');
        for (let c = 0; c < navBtnsArray.length; c++) {
            if (navBtnsArray[c].classList.contains('nav-btn-focused')) {
                contentMainArray[c].style.opacity = '1';
                contentMainArray[c].style.zIndex = '1';
                
                setTimeout( () => {
                    contentHdrsArray[c].style.opacity = '1';
                    contentHdrsArray[c].style.zIndex = '1';
                }, 300);

            } else {
                contentHdrsArray[c].style.opacity = '0';
                contentHdrsArray[c].style.zIndex = '-1';
                contentMainArray[c].style.opacity = '0';
                contentMainArray[c].style.zIndex = '-1';
            }
        }
    });
};

function hdrDispBugCheck() {                                               // This function checks to make sure that multiple headers are not displayed at the same time.
    for (let d = 0; d < navBtnsArray.length; d++) {
        setTimeout( () => {
            if (!navBtnsArray[d].classList.contains('nav-btn-focused') && contentHdrsArray[d].style.opacity == '1') {
                contentHdrsArray[d].style.opacity = '0';
                contentHdrsArray[d].style.zIndex = '-1';
            }  
        }, 300)
    };
};