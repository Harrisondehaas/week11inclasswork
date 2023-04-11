"use strict";

// Select the first element that matches the selector
const $ = (selector) => document.querySelector(selector);

// Counter for current image, and references to HTML elements
let imageCounter = 0;
const caption = $("#caption");
const mainImage = $("#main_image");
const prevButton = $("#prev_button");
const nextButton = $("#next_button");

// An array to hold preloaded images
let imageCache = [];

// Function to swap images and captions
const swapImage = () => {
    mainImage.src = imageCache[imageCounter].src;
    mainImage.alt = imageCache[imageCounter].alt;
    caption.textContent = imageCache[imageCounter].alt;
};

// Event listeners for previous and next buttons



nextButton.addEventListener("click", () => {
    imageCounter = (imageCounter + 1) % 5

    console.log(imageCounter)
    swapImage();
});

prevButton.addEventListener("click", () => {
    imageCounter = (imageCounter - 1 ) % 5

    swapImage();
});


// Load images and add them to imageCache array
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#image_list a");

    for (let link of links) {
        let image = new Image();
        image.src = link.href;
        image.alt = link.title;
        imageCache.push(image);
    }

    // Auto cycle through images
    setInterval(swapImage, 4000);
});
