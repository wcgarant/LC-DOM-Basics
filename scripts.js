/*** DOM BASICS ***/

/*
    Here are a couple basic exercises on the same page to give you a little practice before proceeding to the A5 prep exercises.
*/

// Event listener for page load
window.addEventListener("load", function() {
    console.log('Page loaded.');
    init();
});

// DOM code for page elements
function init() {

    /*** STEP 1: CHANGE THE BORDER COLOR ***/

    // TODO: Declare objects to gain access to element properties.
    let redButton = document.getElementById("red");
    let yellowButton = document.getElementById("yellow");
    let blueButton = document.getElementById("blue");

    // TODO: Create listeners to change color of border to same hex values as buttons.
    // Note: DOM can't access style sheets, so just hard-code the hex codes here for now.
    document.addEventListener("click", function(event){
        redButton.style.border = "red"
    });

    document.addEventListener("click", function(event){
        yellowButton.style.borderColor = "yellow"
    });

    document.addEventListener("mouseover", function(event){
        blueButton.style.border = "blue"
    });



    /*** STEP 2: CHANGE THE BORDER THICKNESS ***/

    // TODO: Declare objects to gain access to element properties.
    let fourPix = document.getElementById("4");
    let eightPix = document.getElementById("8");
    let twelvePix = document.getElementById("12");

    // TODO: Create listeners to change thickness of box border.



    /*** STEP 3: CHANGE THE BORDER STYLE ***/

    // TODO: Declare objects to gain access to element properties.
 

    // TODO: Create listeners to change style of box border.


}