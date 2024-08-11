function switchOFF() {
    document.getElementById("bulb").src = ("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png");
    document.getElementById("cat").src = ("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png");
    document.getElementById("switch-status").textContent = "Switched OFF";
    document.getElementById("button1").style.backgroundColor = "#c6cccf";
    document.getElementById("button2").style.backgroundColor = "#17a636";
}

function switchON() {
    document.getElementById("bulb").src = ("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png");
    document.getElementById("cat").src = ("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png");
    document.getElementById("switch-status").textContent = "Switched On";
    document.getElementById("button1").style.backgroundColor = "#e00d0d";
    document.getElementById("button2").style.backgroundColor = "#c6cccf";
}