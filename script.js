const body = document.getElementById("body");

const colors = ["red", "green", "gray", "pink", "skyblue"];

function changeColor() {
    const position = Math.floor(Math.random() * colors.length);

    body.style.background = colors[position];
}
