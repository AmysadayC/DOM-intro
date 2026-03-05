console.log("Script started");

// Variable to track the number of clicks.
let clicks = 0;

// Click value
let clickValue = 1;

// Variable to store the click display element. 
let clickDisplay = document.getElementById("click-display");

//VAriable for level display.
let levelDisplay = document.getElementById("level-display");

// Set the initial of click display.
clickDisplay.innerText = "Clicks: " + clicks;

// Called each time the image is clicked.
function handleClick() {
    console.log("click");

    // Count the click.
    clicks = clicks + clickValue;

    // Update display with the new value.
    clickDisplay.innerText = "Clicks: " + clicks;

    if (clicks == 10) {
        alert("Congrats on making it to Level two!")
        levelDisplay.innerText = "Level 2";
        clickValue = 2;
    }
    
}