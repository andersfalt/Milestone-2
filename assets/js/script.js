// http://michalsnik.github.io/aos/ For Animate on Scroll Library

//jshint esversion: 6

AOS.init();

AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Nav-bar background colour change on scroll
// Code taken from https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 90) {
            $(".navbar").css("background-color", "#0C0409");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    });
});

//Store original carousel title text
const destinationsOriginalText = {
    auckland: "Auckland",
    queenstown: "Queenstown",
    wellington: "Wellington",
    kaikoura: "Kaikōura",
    rotorua: "Rotorua"
};

const topAttractionsOriginalText = {
    fiordland: "Fiordland National Park",
    franz: "Franz Josef Glacier",
    abel: "Abel Tasman Coast Track",
    waiheke: "Waiheke Vineyards",
    nevis: "Nevis Bungy Jump"
};

function changeText(text) {
    text.innerHTML = "Click to Explore More";
}

// Function to change image carousel title
function defaultText() {
    document.getElementById("auckland").innerHTML = destinationsOriginalText.auckland;
    document.getElementById("queenstown").innerHTML = destinationsOriginalText.queenstown;
    document.getElementById("wellington").innerHTML = destinationsOriginalText.wellington;
    document.getElementById("kaikoura").innerHTML = destinationsOriginalText.kaikoura;
    document.getElementById("rotorua").innerHTML = destinationsOriginalText.rotorua;
    document.getElementById("fiordland").innerHTML = topAttractionsOriginalText.fiordland;
    document.getElementById("franz").innerHTML = topAttractionsOriginalText.franz;
    document.getElementById("abel").innerHTML = topAttractionsOriginalText.abel;
    document.getElementById("waiheke").innerHTML = topAttractionsOriginalText.waiheke;
    document.getElementById("nevis").innerHTML = topAttractionsOriginalText.nevis;
}

////Send website an email informing of a new subscriber & send automatic response
//Original code taken from CI learning material and customised for this project
(function () {
    emailjs.init("user_7Zuhihp6HZgdp93yn7Cpc");
})();

function subMail(subForm) {
    emailjs.send("service_vg6mnxa", "subscriber", {
            "from_email": subForm.newsletter_email.value,
        })
        .then(
            function success() {
                const success = document.getElementById("newsletter-success");
                success.style.display = "block";
                event.preventDefault();
            }
        );
    document.getElementById("newsletter-form").reset();
    return false;
}

//Toggle Destinations Content 
//Code taken from https://dev.to/mohdhussein/how-to-show-the-clicked-element-only-and-hide-others-in-vanilla-javascript-1ip2 and customised for this project
let buttons = document.querySelectorAll(".destinations-content-wrapper .destinations-btn");
for (const button of buttons) {
    button.addEventListener('click', (e) => {
        let allContent = document.querySelectorAll(".destinations-text-wrapper");
        for (let content of allContent) {
            if (content.getAttribute('data-number') === button.getAttribute('data-number')) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }
    });
}