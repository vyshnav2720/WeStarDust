const threeham = document.querySelector(".threeham");
const hammenu = document.querySelector(".hammenu");
const crossham = document.querySelector(".crossham");

height= window.innerHeight + "px";
console.log(height);

threeham.addEventListener("click", menuopen);
crossham.addEventListener("click", menuclose);

function menuopen() {
    threeham.style.display = "none";
    crossham.style.display = "block";
    hammenu.style.display = "flex";
    hammenu.style.height = height;


}

function menuclose() {
    threeham.style.display = "block";
    crossham.style.display = "none";
    hammenu.style.display = "none";
}

const emailbutton = document.querySelector(".emailbutton");

emailbutton.addEventListener("click", noreload);

function noreload() {
    emailbutton.innerHTML = "Joined";
    emailbutton.style.color = "var(--secondarycolor2)";
    emailbutton.style.backgroundColor = "var(--primarycolor1)";
}