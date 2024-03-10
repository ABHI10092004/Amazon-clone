let slides = document.querySelectorAll(".ig1");
let con = 0;
console.log(con)
slides.forEach(function (slides, index) {
    slides.style.left = `${index * 100}%`;
})
function slideimg() {
    slides.forEach(function (ig1) {
        ig1.style.transform = `translateX(${con * 100}%)`
    })
}
function slideprev() {
    if (con == -4) {
        con = con

    }
    else {
        con = con - 1;
        // console.log(con);
        slideimg();

    }
}
function slidenext() {
    // console.log(con);
    if (con == 0) {
        con = con
    }
    else {
        con = con + 1;
        slideimg();

    }
}