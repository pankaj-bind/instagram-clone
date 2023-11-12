function showLargeImage(imageSrc) {
    var overlay = document.getElementById("overlay");
    var loaderLine = overlay.querySelector(".loader-line");
    loaderLine.style.animation = "loader-animation 10s linear forwards"; // Set animation for 10 seconds
    overlay.style.display = "flex";
    overlay.querySelector("img").src = imageSrc;

    // Hide large image after 10 seconds
    setTimeout(function() {
        hideLargeImage();
    }, 10000); // 10000 milliseconds = 10 seconds
}

function hideLargeImage() {
    var overlay = document.getElementById("overlay");
    var loaderLine = overlay.querySelector(".loader-line");
    loaderLine.style.animation = ""; // Reset animation
    overlay.style.display = "none";
}