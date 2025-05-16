// Navigate to the home page when the home button is clicked
document.getElementById("homeButton").addEventListener("click", function() {
    window.location.href = "index.html";
});


// Select the sound button and background music elements
const soundButton = document.getElementById("soundButton");
const backgroundMusic = document.getElementById("backgroundMusic");
let isPlaying = true; // Track whether music is playing

// Define image URLs for sound on/off states
const soundOnIcon = "./images/volume.png";  // Replace with image URL
const soundOffIcon = "./images/mute.png";  // Replace with image URL

// Toggle background music and update the icon
soundButton.addEventListener("click", function() {
    if (isPlaying) {
        backgroundMusic.pause(); // Pause music
        soundButton.src = soundOffIcon; // Change to sound off icon
    } else {
        backgroundMusic.play(); // Play music
        soundButton.src = soundOnIcon; // Change to sound on icon
    }
    isPlaying = !isPlaying; // Toggle state
});


// When the user clicks anywhere on the screen, fade out the text and show the character
document.body.addEventListener("click", function() {
    document.getElementById("content").style.opacity = "0"; // Fade out text
    setTimeout(() => {
        document.getElementById("content").style.display = "none"; // Hide text
        document.getElementById("hiddenContent").style.display = "block"; // Show character and message
    }, 1000); // Delay for smooth transition
});

// Navigate to the next page when the start button is clicked
document.getElementById("startButton").addEventListener("click", function() {
    window.location.href = "nextpage.html";
});



const car = document.getElementById("car"); 
let isScrolling; 

window.addEventListener("scroll", function () { 
    clearTimeout(isScrolling); // Clear previous timeout
    car.src = "./images/mini-car (1).gif"; // Change to GIF when scrolling

    isScrolling = setTimeout(() => { 
        car.src = "./images/mini-car.png"; // Revert to PNG after scrolling stops
    }, 500); // Wait 500ms after scrolling stops
});



