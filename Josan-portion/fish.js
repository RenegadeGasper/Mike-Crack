const fishButton = document.getElementById("fish");
const fishFrame = document.getElementById("fish-iframe");

fishButton.addEventListener('click', () => {

    if (fishFrame.style.display == "block") {
        fishFrame.style.display = "none";
    } else {
        fishFrame.style.display = "block";
        fishButton.style.display = "none";
    }

});