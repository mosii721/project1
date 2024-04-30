document.addEventListener("DOMContentLoaded", function() {
    // Get all close buttons
    var closeButtons = document.querySelectorAll(".close-btn");

    // Add click event listener to each close button
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Find the parent alert element and remove it from the DOM
            var alert = button.parentElement;
            alert.remove();
        });
    });
});
