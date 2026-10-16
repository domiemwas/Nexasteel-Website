/* =========================
   LIGHT / DARK THEME
   ========================= */

const themeToggle =
    document.getElementById("theme-toggle");

const mobileThemeToggle =
    document.querySelector(".mobile-theme-toggle");

const savedTheme =
    localStorage.getItem("nexasteel-theme");


/* Load saved theme */

if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

    if (themeToggle) {
        themeToggle.checked = true;
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.checked = true;
    }
}


/* Change theme from desktop switch */

if (themeToggle) {

    themeToggle.addEventListener("change", function () {

        const darkModeOn = themeToggle.checked;

        updateTheme(darkModeOn);

    });

}


/* Change theme from mobile switch */

if (mobileThemeToggle) {

    mobileThemeToggle.addEventListener("change", function () {

        const darkModeOn =
            mobileThemeToggle.checked;

        updateTheme(darkModeOn);

    });

}


/* Keep both switches synchronized */

function updateTheme(darkModeOn) {

    if (darkModeOn) {

        document.body.classList.add("dark-theme");

        localStorage.setItem(
            "nexasteel-theme",
            "dark"
        );

    } else {

        document.body.classList.remove("dark-theme");

        localStorage.setItem(
            "nexasteel-theme",
            "light"
        );

    }

    if (themeToggle) {
        themeToggle.checked = darkModeOn;
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.checked = darkModeOn;
    }

}

/* =========================
   RESET MOBILE MENU ON RESIZE
   ========================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 900) {

        const navigation =
            document.querySelector(".navigation");

        const menuToggle =
            document.getElementById("menu-toggle");

        if (navigation) {
            navigation.classList.remove("mobile-open");
        }

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    }

});

/* =========================
   ACTIVE NAVIGATION LINK
   ========================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const navigationLinks =
    document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});

const quoteForm = document.getElementById("quote-form");

if (quoteForm) {

    quoteForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const email =
            document.getElementById("email").value;

        const projectType =
            document.getElementById("project-type").value;

        const location =
            document.getElementById("location").value;

        const message =
            document.getElementById("message").value;


        const whatsappMessage =
`Hello NexaSteel, I would like to request a quote.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Project Type: ${projectType}
Project Location: ${location || "Not provided"}

Project Details:
${message}`;


        const encodedMessage =
            encodeURIComponent(whatsappMessage);


        const whatsappURL =
            `https://wa.me/254746654938?text=${encodedMessage}`;


        window.open(whatsappURL, "_blank");

    });

}
/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuToggle =
    document.getElementById("menu-toggle");

const mobileNavigation =
    document.querySelector(".navigation");


if (menuToggle && mobileNavigation) {

    menuToggle.addEventListener("click", function () {

        mobileNavigation.classList.toggle("mobile-open");

        const menuIsOpen =
            mobileNavigation.classList.contains("mobile-open");

        menuToggle.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

    });

}
/* =========================
   HOMEPAGE PROJECT GALLERY
   ========================= */

const homepageProjectGallery =
    document.getElementById("homepage-project-gallery");

const projectImages = [

    "IMG-20260903-WA0003.jpg",
    "IMG-20260903-WA0041.jpg",
    "IMG-20260903-WA0049.jpg",
    "IMG-20260903-WA0056.jpg",
    "IMG-20260903-WA0061.jpg",
    "IMG-20260903-WA0064.jpg",
    "IMG-20260903-WA0079.jpg",
    "IMG-20260903-WA0098.jpg",
    "IMG-20260903-WA0099.jpg",
    "IMG-20260903-WA0102.jpg",
    "IMG-20260903-WA0105.jpg",
    "IMG-20260903-WA0108.jpg",
    "IMG-20260903-WA0119.jpg",
    "IMG-20260903-WA0122.jpg",
    "IMG-20260903-WA0123.jpg",
    "IMG-20260903-WA0144.jpg",
    "IMG-20260903-WA0146.jpg",
    "IMG-20260903-WA0148.jpg",
    "IMG-20260903-WA0151.jpg",

    "IMG-20260904-WA0002.jpg",
    "IMG-20260904-WA0003.jpg",
    "IMG-20260904-WA0004.jpg",
    "IMG-20260904-WA0005.jpg",
    "IMG-20260904-WA0006.jpg"

];


if (homepageProjectGallery) {

    projectImages.forEach(function (imageName) {

        const image =
            document.createElement("img");

        image.src =
            "images/projects/" +
            imageName.replace(".jpg", ".webp");

        image.alt =
            "NexaSteel advertising and fabrication project";

        image.loading = "lazy";
        image.decoding = "async";

        homepageProjectGallery.appendChild(image);

    });

}
/* =========================
   PROJECT IMAGE LIGHTBOX
   ========================= */

const projectLightbox =
    document.getElementById("project-lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxClose =
    document.getElementById("lightbox-close");


/* Open clicked project image */

if (homepageProjectGallery && projectLightbox) {

    homepageProjectGallery.addEventListener(
        "click",
        function (event) {

            if (event.target.tagName === "IMG") {

                lightboxImage.src =
                    event.target.src;

                lightboxImage.alt =
                    event.target.alt;

                projectLightbox.classList.add("open");

                projectLightbox.setAttribute(
                    "aria-hidden",
                    "false"
                );

                document.body.style.overflow =
                    "hidden";
            }

        }
    );

}


/* Close lightbox */

function closeProjectLightbox() {

    projectLightbox.classList.remove("open");

    projectLightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    lightboxImage.src = "";

    document.body.style.overflow = "";

}


/* Close using X button */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeProjectLightbox
    );

}


/* Close by clicking dark background */

if (projectLightbox) {

    projectLightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === projectLightbox) {
                closeProjectLightbox();
            }

        }
    );

}


/* Close using Escape key */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            projectLightbox &&
            projectLightbox.classList.contains("open")
        ) {
            closeProjectLightbox();
        }

    }
);
/* =========================
   LIGHTBOX IMAGE NAVIGATION
   ========================= */

const lightboxPrevious =
    document.getElementById("lightbox-prev");

const lightboxNext =
    document.getElementById("lightbox-next");

let currentProjectIndex = 0;


/* Find which image is currently open */

if (homepageProjectGallery) {

    homepageProjectGallery.addEventListener(
        "click",
        function (event) {

            if (event.target.tagName === "IMG") {

                const galleryImages =
                    Array.from(
                        homepageProjectGallery.querySelectorAll("img")
                    );

                currentProjectIndex =
                    galleryImages.indexOf(event.target);
            }

        }
    );

}


/* Display selected image */

function showProjectImage(index) {

    resetLightboxZoom();

    const galleryImages =
        Array.from(
            homepageProjectGallery.querySelectorAll("img")
        );

    if (galleryImages.length === 0) {
        return;
    }


    /* Loop from last image back to first */

    if (index >= galleryImages.length) {
        index = 0;
    }


    /* Loop from first image to last */

    if (index < 0) {
        index = galleryImages.length - 1;
    }


    currentProjectIndex = index;

    lightboxImage.src =
        galleryImages[index].src;

    lightboxImage.alt =
        galleryImages[index].alt;
}


/* Next image */

if (lightboxNext) {

    lightboxNext.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            showProjectImage(
                currentProjectIndex + 1
            );

        }
    );

}


/* Previous image */

if (lightboxPrevious) {

    lightboxPrevious.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            showProjectImage(
                currentProjectIndex - 1
            );

        }
    );

}
/* =========================
   LIGHTBOX KEYBOARD CONTROLS
   ========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !projectLightbox ||
            !projectLightbox.classList.contains("open")
        ) {
            return;
        }

        if (event.key === "ArrowRight") {

            showProjectImage(
                currentProjectIndex + 1
            );

        }

        if (event.key === "ArrowLeft") {

            showProjectImage(
                currentProjectIndex - 1
            );

        }

    }
);

/* =========================
   MOBILE / TABLET SWIPE
   ========================= */

let touchStartX = 0;
let touchEndX = 0;


if (projectLightbox) {

    projectLightbox.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    projectLightbox.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].screenX;

            handleLightboxSwipe();

        },
        {
            passive: true
        }
    );

}


function handleLightboxSwipe() {
        /* Do not change photos while zoomed */

    if (lightboxScale > 1) {
        return;
    }

    const swipeDistance =
        touchEndX - touchStartX;

    const minimumSwipeDistance = 50;


    /* Swipe left = next image */

    if (
        swipeDistance <
        -minimumSwipeDistance
    ) {

        showProjectImage(
            currentProjectIndex + 1
        );

    }


    /* Swipe right = previous image */

    if (
        swipeDistance >
        minimumSwipeDistance
    ) {

        showProjectImage(
            currentProjectIndex - 1
        );

    }

}
/* =========================
   LIGHTBOX ZOOM
   ========================= */

let lightboxScale = 1;
let initialPinchDistance = 0;
let initialScale = 1;


/* Apply zoom */

let panX = 0;
let panY = 0;

function updateLightboxZoom() {

    if (!lightboxImage) {
        return;
    }

    lightboxImage.style.transform =
        `translate(${panX}px, ${panY}px) scale(${lightboxScale})`;
}
function limitLightboxPan() {

    if (!lightboxImage || lightboxScale <= 1) {
        panX = 0;
        panY = 0;
        return;
    }

    const imageRect =
        lightboxImage.getBoundingClientRect();

    const lightboxRect =
        projectLightbox.getBoundingClientRect();

    /*
       Maximum distance the enlarged image
       is allowed to move.
    */

    const maxPanX =
        Math.max(
            0,
            (imageRect.width - lightboxRect.width) / 2
        );

    const maxPanY =
        Math.max(
            0,
            (imageRect.height - lightboxRect.height) / 2
        );


    /* Limit horizontal movement */

    panX =
        Math.min(
            Math.max(panX, -maxPanX),
            maxPanX
        );


    /* Limit vertical movement */

    panY =
        Math.min(
            Math.max(panY, -maxPanY),
            maxPanY
        );
}


/* Reset zoom whenever image changes */

function resetLightboxZoom() {

    lightboxScale = 1;

    panX = 0;
    panY = 0;

    if (lightboxImage) {

        lightboxImage.style.transform =
            "translate(0px, 0px) scale(1)";
    }
}
/* =========================
   DESKTOP MOUSE-WHEEL ZOOM
   ========================= */

if (lightboxImage) {

    lightboxImage.addEventListener(
        "wheel",
        function (event) {

            event.preventDefault();

            if (event.deltaY < 0) {

                lightboxScale += 0.2;

            } else {

                lightboxScale -= 0.2;

            }

            lightboxScale =
                Math.min(
                    Math.max(lightboxScale, 1),
                    4
                );
            if (lightboxScale === 1) {
                panX = 0;
                panY = 0;
            }

            updateLightboxZoom();

            requestAnimationFrame(function () {

                limitLightboxPan();

            updateLightboxZoom();

        });

        },
        {
            passive: false
        }
    );

}
/* =========================
   MOBILE PINCH TO ZOOM
   ========================= */

function getTouchDistance(touches) {

    const x =
        touches[0].clientX -
        touches[1].clientX;

    const y =
        touches[0].clientY -
        touches[1].clientY;

    return Math.sqrt(
        x * x + y * y
    );

}


if (lightboxImage) {

    lightboxImage.addEventListener(
        "touchstart",
        function (event) {

            if (event.touches.length === 2) {

                initialPinchDistance =
                    getTouchDistance(
                        event.touches
                    );

                initialScale =
                    lightboxScale;

            }

        },
        {
            passive: true
        }
    );


    lightboxImage.addEventListener(
        "touchmove",
        function (event) {

            if (event.touches.length === 2) {

                event.preventDefault();

                const currentDistance =
                    getTouchDistance(
                        event.touches
                    );

                const scaleChange =
                    currentDistance /
                    initialPinchDistance;

                lightboxScale =
                    initialScale *
                    scaleChange;

                lightboxScale =
                    Math.min(
                        Math.max(
                            lightboxScale,
                            1
                        ),
                        4
                    );
                if (lightboxScale === 1) {
                    panX = 0;
                    panY = 0;
                }

                updateLightboxZoom();

                requestAnimationFrame(function () {

                    limitLightboxPan();

                    updateLightboxZoom();

                });

            }

        },
        {
            passive: false
        }
    );

}
/* =========================
   PAN ZOOMED LIGHTBOX IMAGE
   ========================= */

let isPanning = false;

let panStartX = 0;
let panStartY = 0;

let startingPanX = 0;
let startingPanY = 0;


/* Start dragging */

if (lightboxImage) {

    lightboxImage.addEventListener(
        "pointerdown",
        function (event) {

            if (lightboxScale <= 1) {
                return;
            }

            isPanning = true;

            panStartX = event.clientX;
            panStartY = event.clientY;

            startingPanX = panX;
            startingPanY = panY;

            lightboxImage.setPointerCapture(
                event.pointerId
            );

            lightboxImage.classList.add(
                "is-panning"
            );

        }
    );


    /* Move image */

    lightboxImage.addEventListener(
        "pointermove",
        function (event) {

            if (!isPanning) {
                return;
            }

            const movementX =
                event.clientX - panStartX;

            const movementY =
                event.clientY - panStartY;

            panX =
                startingPanX + movementX;

            panY =
                startingPanY + movementY;

            limitLightboxPan();

            updateLightboxZoom();

            updateLightboxZoom();

        }
    );


    /* Stop dragging */

    lightboxImage.addEventListener(
        "pointerup",
        stopLightboxPan
    );

    lightboxImage.addEventListener(
        "pointercancel",
        stopLightboxPan
    );

}


function stopLightboxPan() {

    isPanning = false;

    if (lightboxImage) {

        lightboxImage.classList.remove(
            "is-panning"
        );
    }
}


/* =====================================
   NEXASTEEL CONTINUOUS VIDEO PLAYLIST
===================================== */

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("background-video");

    if (!video) return;

    const playlist = [
        "videos/index-bg.mp4",
        "videos/billboard-bg.mp4",
        "videos/nexasteel-workshop.mp4",
        "videos/contact-us-bg.mp4"
    ];

    const storageKey = "nexasteel-video-playlist";

    let savedState = {};

    try {
        savedState = JSON.parse(
            sessionStorage.getItem(storageKey) || "{}"
        );
    } catch (error) {
        savedState = {};
    }

    let currentIndex = Number.isInteger(savedState.index)
        && savedState.index >= 0
        && savedState.index < playlist.length
        ? savedState.index
        : 0;

    const savedTime = Number.isFinite(savedState.time)
        ? Math.max(0, savedState.time)
        : 0;

    video.muted = true;
    video.loop = false;

    function saveProgress() {
        sessionStorage.setItem(
            storageKey,
            JSON.stringify({
                index: currentIndex,
                time: video.currentTime
            })
        );
    }

    function playVideo(index, startTime = 0) {
        currentIndex = index;
        video.src = playlist[currentIndex];
        video.load();

        video.addEventListener("loadedmetadata", function restoreTime() {
            video.removeEventListener("loadedmetadata", restoreTime);

            if (startTime < video.duration) {
                video.currentTime = startTime;
            }

            video.play().catch(() => {
                // Browser may restrict autoplay.
            });
        });
    }

    video.addEventListener("ended", () => {
        const nextIndex = (currentIndex + 1) % playlist.length;
        playVideo(nextIndex);
    });

    video.addEventListener("timeupdate", saveProgress);
    window.addEventListener("pagehide", saveProgress);

    playVideo(currentIndex, savedTime);
});
