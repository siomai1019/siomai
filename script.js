// Get the modal
var popup = document.getElementById("popup");

// Get the button that opens the modal
var submitBtn = document.getElementById("submitBtn");

// When the user submits the form, open the modal
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
    popup.style.display = "block"; // Show the pop-up
}

// Get the redirect button
var redirectBtn = document.getElementById("redirectBtn");

// When the user clicks the redirect button, go to the home page
redirectBtn.onclick = function() {
    window.location.href = "index.html"; // Change this to your desired home page
}