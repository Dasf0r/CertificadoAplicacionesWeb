document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });
    
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

