console.log("Script started");

// Variable to track the number of clicks.
let clicks = 0;

// Variable to store the click display element. 
let clickDisplay = document.getElementById("click-display");

// Set the initial of click display.
clickDisplay.innerText = "Clicks: " + clicks;

// Called each time the image is clicked.
function handleClick() {
    console.log("click");

    // Count the click.
    clicks = clicks + 1;

    // Update display with the new value.
    clickDisplay.innerText = "Clicks: " + clicks;
}