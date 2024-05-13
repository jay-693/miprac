document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".menu ul li a");
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 
            var targetId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                var allContentSections = document.querySelectorAll(".content");
                allContentSections.forEach(function(section) {
                    section.style.display = "none"; 
                });
                targetSection.style.display = "block";
                targetSection.scrollIntoView({ behavior: "smooth" }); 
            }
        });
    });
});
