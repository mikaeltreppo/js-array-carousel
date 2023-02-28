const imageList = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]
console.log(imageList)

// entro in html su imgSpace

let imgSpaceDom = document.querySelector(".imgSpace");

let slider = "";
// creo un creatore di img su js
for( let i = 1; i < imageList.length +1 ; i++){
     let sliderDone = `<img class="image" src="img/0${i}.webp" alt="img">`;
     slider += sliderDone;
}
// stampo le img su html
imgSpaceDom.innerHTML = slider;
//

