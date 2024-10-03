document.addEventListener("DOMContentLoaded", function() {
    // Initialize particles.js
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 100, // Adjust number of particles
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#ffffff", // Particle color
            },
            shape: {
                type: "circle", // Particle shape
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: "img/github.svg", // Optional, if you want to use an image
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.5, // Particle opacity
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 5, // Particle size
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff", // Line color
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6, // Speed of particles
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 6000,
                    rotateY: 12000,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });
});


// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30, // Space between slides
    effect: 'slide', // Effect type (slide, fade, cube, etc.)
    loop: true, // Infinite loop mode
    autoplay: {
        delay: 2500, // Time interval between slides
        disableOnInteraction: false, // Don't disable autoplay on user interactions
    },
    pagination: {
        el: '.swiper-pagination', // Pagination element
        clickable: true, // Make pagination bullets clickable
    },
    navigation: {
        nextEl: '.swiper-button-next', // Next button
        prevEl: '.swiper-button-prev', // Previous button
    },
});


const images = document.querySelectorAll('.zoomable-image');

images.forEach((img) => {
    let zoomed = false; // Track if zoomed in or out
    img.addEventListener('click', () => {
        if (!zoomed) {
            img.style.transform = 'scale(2)'; // Zoom in
            img.style.cursor = 'zoom-out';
        } else {
            img.style.transform = 'scale(1)'; // Zoom out
            img.style.cursor = 'zoom-in';
        }
        zoomed = !zoomed; // Toggle zoom state
    });
});
