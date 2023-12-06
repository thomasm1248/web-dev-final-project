function toggleMenu() {
    var navList = document.getElementById("nav-list");
    if (navList.style.display === "block") {
        navList.style.display = "none";
    } else {
        navList.style.display = "block";
    }
}

// When the window resizes, hide or show the nav
window.addEventListener('resize', function(event) {
    if(window.innerWidth < 480) {
        document.getElementById("nav-list").style.display = "none";
    } else {
        document.getElementById("nav-list").style.display = "block";
    }
}, true);
