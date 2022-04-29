const threeham = document.querySelector(".threeham");
const hammenu = document.querySelector(".hammenu");
const crossham = document.querySelector(".crossham");
const bestselling = document.querySelector(".bestselling")
const latest = document.querySelector(".latest")
const browse = document.querySelector(".browse")
const footer  = document.querySelector(".footer")
const brandname = document.querySelector(".brandname")

height= window.innerHeight + "px";
width = window.innerWidth
console.log(width)

threeham.addEventListener("click", menuopen);
crossham.addEventListener("click", menuclose);

function menuopen() {
    threeham.style.display = "none";
    crossham.style.display = "block";
    hammenu.style.display = "flex";
    hammenu.style.height = height;
    bestselling.style.display = "none";
    latest.style.display = "none";
    browse.style.display = "none";
    footer.style.display = "none";
    


}

function menuclose() {
    threeham.style.display = "block";
    crossham.style.display = "none";
    hammenu.style.display = "none";
    bestselling.style.display = "block";
    latest.style.display = "block";
    browse.style.display = "block";
    footer.style.display = "block";
}

const emailbutton = document.querySelector(".emailbutton");

emailbutton.addEventListener("click", noreload, false);

function noreload() {
    emailbutton.innerHTML = "Joined";
    emailbutton.style.color = "var(--secondarycolor2)";
    emailbutton.style.backgroundColor = "var(--primarycolor1)";
    return false;
}


if (width>=700) {

    
    brandname.innerHTML = "We Star DUst"
}

if (width<700) {

    brandname.innerHTML = "WSD"
}




