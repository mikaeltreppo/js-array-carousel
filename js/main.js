const imageList = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]
console.log(imageList)

// entro in html su imgSpace e button
let buttonNextDom = document.getElementById("next")
let buttonPrevDom = document.getElementById("prev")
let imgSpaceDom = document.querySelector(".imgSpace");

let slider = "";
// creo un creatore di img su js
for (let i = 1; i < imageList.length + 1; i++) {
    let sliderDone = `<img class="image" src="img/0${i}.webp" alt="img">`;
    slider += sliderDone;
}
// stampo le img su html
imgSpaceDom.innerHTML = slider;
//creo array di classe e creo variabile con numeraione per incrementare in for
const callImg = document.getElementsByClassName("image");

let start = 0;

callImg[start].classList.add("show");

buttonNextDom.addEventListener('click', function () {

    if (start < imageList.length - 1) {
        callImg[start].classList.remove("show");
        start++;
        callImg[start].classList.add("show");

    }
   
})




//creo un add event su button



