// YES button redirect
function goYes() {
    window.location.href = "yes.html";
}

// NO button run away
function moveNo() {
    let button = document.getElementById("noBtn");

    let maxX = window.innerWidth - button.offsetWidth;
    let maxY = window.innerHeight - button.offsetHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    button.style.left = x + "px";
    button.style.top = y + "px";
}

// Auto redirect after 5 seconds (yes page)
function autoRedirect() {
    setTimeout(function () {
        window.location.href = "letters.html";
    }, 5000);
}

// Show letters tab
function showTab(num) {
    let contents = document.querySelectorAll(".content");
    contents.forEach(c => c.style.display = "none");

    document.getElementById("c" + num).style.display = "block";
}
