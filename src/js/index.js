import Typed from 'typed.js';
import particles from 'particles.js';

/**
 * For home page animated words
 */
let options = {
    strings: ["Catherine Lev", "Frontend Developer"],
    typeSpeed: 40
};

let typed = new Typed("#typed", options);

/**
 * Navigation
 */

// get all links in nav
let nav = document.querySelectorAll('.links');

nav.forEach(element => {
    element.addEventListener('click', (e) => {
        const sectionClass = e.target.getAttribute("href").replace('#', '');
        document.querySelectorAll('.section').forEach(t => {
            t.classList.remove('active');
        });
        const section = document.querySelector(`.${sectionClass}`);

        if (!section) {
            return;
        }
        section.classList.toggle('active');
    });
});

/**
 * change active nav li
 */
let li = document.querySelectorAll('.li');
for (let i = 0; i < li.length; i++) {
    li[i].onclick = function() {
        let a = 0;
        while (a < li.length) {
            li[a++].className = 'li';
        }
        li[i].className = 'li active-nav';
    };
}

/**
 * particlesJS
 */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


// /* ---- stats.js config ---- */
//
// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);

/**
 * Form validation
 */
let submit = document.getElementById('submit');
let name = document.getElementById('name');
let email = document.getElementById('email');
let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');


submit.addEventListener('click', function validate() {
    let isValid = true;
    let yourName = name.value;
    let yourEmail = email.value;
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    name.classList.remove('is-danger');
    nameError.classList.add('hide');
    email.classList.remove('is-danger');
    emailError.classList.add('hide');

    if (yourName == '' || yourName.length < 2 || yourName > 15 || yourName.typeOf === 'number'){
        name.classList.add('is-danger');
        nameError.classList.remove('hide');
        isValid &=false;
    }

    if (!yourEmail.match(mailformat) || yourEmail == '') {
        email.classList.add('is-danger');
        emailError.classList.remove('hide');
        isValid &=false;
    }
    if (!isValid) {
        event.preventDefault();
    }

    return !isValid;

});

/**
 * Progress bar for skills (todo)
 */
