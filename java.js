document.getElementById('burger-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
    const autoText = document.getElementById("auto-text");
    const text = "I Present time learning Computer Engineering in DSEU.";
    let index = 0;

    function writeText() {
        autoText.innerHTML += text[index];
        index++;

        if (index === text.length) {
            index = 0;
            setTimeout(() => {
                autoText.innerHTML = "";
                setTimeout(writeText, 30);
            }, 18000); // Display for 180 seconds (180000 milliseconds)
            return;
        }

        setTimeout(writeText, 30);
    }

    writeText();
});

document.addEventListener("DOMContentLoaded", function () {
    const autoText = document.getElementById("auto-text1");
    const text = "Complete Bachelors Degree in B.A Program from DU in 2023 year.";
    let index = 0;

    function writeText() {
        autoText.innerHTML += text[index];
        index++;

        if (index === text.length) {
            index = 0;
            setTimeout(() => {
                autoText.innerHTML = "";
                setTimeout(writeText, 20);
            }, 18000); // Display for 180 seconds (180000 milliseconds)
            return;
        }

        setTimeout(writeText, 20);
    }

    writeText();
});

document.addEventListener("DOMContentLoaded", function () {
    const autoText = document.getElementById("auto-text2");
    const text = "Complete 10th from CBSE in 2018 year.Complete 12th from CBSE in 2020 year.";
    let index = 0;

    function writeText() {
        autoText.innerHTML += text[index];
        index++;

        if (index === text.length) {
            index = 0;
            setTimeout(() => {
                autoText.innerHTML = "";
                setTimeout(writeText, 20);
            }, 18000); // Display for 180 seconds (180000 milliseconds)
            return;
        }

        setTimeout(writeText, 20);
    }

    writeText();
});

