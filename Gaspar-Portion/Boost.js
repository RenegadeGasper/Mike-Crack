const bbButton = document.getElementById("bb");
const bbFrame = document.getElementById("bb-iframe");

bbButton.addEventListener('click', () => {

    if (bbFrame.style.display == "block") {
        bbFrame.style.display = "none";
    } else {
        bbFrame.style.display = "block";
        bbButton.style.display = "none";
    }

});