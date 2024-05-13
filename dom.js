
// function hom(){
//     document.getElementById("homepage").style.visibility="visible";
//     document.getElementById("industries").style.display="none";
//     document.getElementById("insights").style.display="none";
//     document.getElementById("about").style.display="none";
//     document.getElementById("careers").style.display="none";
//     document.getElementById("contact").style.display="none";
// }
// function ind(){
//     document.getElementById("industries").style.visibility="visible";
//     document.getElementById("homepage").style.display="none";
//     document.getElementById("insights").style.display="none";
//     document.getElementById("about").style.display="none";
//     document.getElementById("careers").style.display="none";
//     document.getElementById("contact").style.display="none";
// }
// function ins(){
//     document.getElementById("insights").style.visibility="visible";
//     document.getElementById("homepage").style.display="none";
//     document.getElementById("industries").style.display="none";
//     document.getElementById("about").style.display="none"
//     document.getElementById("careers").style.display="none";
//     document.getElementById("contact").style.vdisplay="none";
// }
// function abo(){
//     document.getElementById("about").style.visibility="visible";
//     document.getElementById("homepage").style.display="none";
//     document.getElementById("industries").style.display="none";
//     document.getElementById("insights").style.display="none";
//     document.getElementById("careers").style.display="none";
//     document.getElementById("contact").style.display="none";
// }
// function car(){
//     document.getElementById("careers").style.visibility="visible";
//     document.getElementById("homepage").style.display="none";
//     document.getElementById("industries").style.display="none";
//     document.getElementById("insights").style.display="none";
//     document.getElementById("about").style.display="none";
//     document.getElementById("contact").style.display="none";
// }
// function con(){
//     document.getElementById("contact").style.visibility="visible";
//     document.getElementById("homepage").style.display="none";
//     document.getElementById("industries").style.display="none";
//     document.getElementById("insights").style.display="none";
//     document.getElementById("about").style.display="none";
//     document.getElementById("careers").style.display="none";
// }
// function showSection(sectionId) {
//     var sections = document.querySelectorAll('.main > div');
//     for (var i = 0; i < sections.length; i++) {
//         sections[i].style.display = 'none';
//     }
//     var section = document.getElementById(sectionId);
//     if (section) {
//         section.style.display = 'block';
//         section.scrollIntoView({ behavior: 'smooth' });
//     }
//     return false; // Prevent the default behavior of the anchor tag
// }

function hom() {
    document.getElementById("homepage").style.display = "block";
    document.getElementById("industries").style.display = "none";
    document.getElementById("insights").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("careers").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
function ind() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("industries").style.display = "block";
    document.getElementById("insights").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("careers").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
function ins() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("industries").style.display = "none";
    document.getElementById("insights").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("careers").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
function abo() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("industries").style.display = "none";
    document.getElementById("insights").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("careers").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
function car() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("industries").style.display = "none";
    document.getElementById("insights").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("careers").style.display = "block";
    document.getElementById("contact").style.display = "none";
}
function con() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("industries").style.display = "none";
    document.getElementById("insights").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("careers").style.display = "none";
    document.getElementById("contact").style.display = "block";
}
