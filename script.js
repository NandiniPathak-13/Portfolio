document.addEventListener("DOMContentLoaded", function () {
    const logoBtn = document.getElementById("logoBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");

    logoBtn.addEventListener("click", function () {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!logoBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});

// About Me Section को Scroll पर Show करने के लिए
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("about-section");

    function checkScroll() {
        let sectionPos = aboutSection.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            aboutSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", checkScroll);
});
