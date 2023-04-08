"use strict";

// Select the first element that matches the selector
const $ = (selector) => document.querySelector(selector);

// Counter for current image, and references to HTML elements
let imageCounter = 0;
const caption = $("#caption");
const mainImage = $("#main_image");
const prevButton = document.getElementById("prev_button");
const nextButton = document.getElementById("next_button");

// An array to hold preloaded images
let imageCache = ['DirtBike.jpg', 'DirtBike2.jpg', 'DirtBike3.jpg', 'DirtBike4.jpg', 'DirtBike5.jpg' ];

// Function to swap images and captions
const swapImage = () => {
    mainImage.src = imageCache[imageCounter].src;
    mainImage.alt = imageCache[imageCounter].alt;
    caption.textContent = imageCache[imageCounter].alt;
};

// Event listeners for previous and next buttons



nextButton.addEventListener("click", () => {
    imageCounter = (imageCounter + 1) 
    swapImage();
});
prevButton.addEventListener("click", () => {
    imageCounter = (imageCounter - 1 )
    swapImage();
});


// Load images and add them to imageCache array
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    for (let link of links) {
        let image = new Image();
        image.src = link.href;
        image.alt = link.title;
        imageCache.push(image);
    }

    // Auto cycle through images
    setInterval(swapImage, 4000);
});
