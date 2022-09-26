const bButton = document.getElementById("b");
const bFrame = document.getElementById("b-iframe");

bButton.addEventListener('click', () => {

    if (bFrame.style.display == "block") {
        bFrame.style.display = "none";
    } else {
        bFrame.style.display = "block";
        bButton.style.display = "none";
    }

});