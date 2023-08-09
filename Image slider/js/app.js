let slides = document.querySelectorAll(".slide");
let counter = 0;
console.log(slides);
slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`
})

console.log(slides.length)

let slideImg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

let goNext = () => {
    counter++;
    if (counter >= slides.length){
        counter = 0;
    }
    slideImg();
}

let goPrev = () => {
    counter--;
    if(counter < 0){
        counter = slides.length - 1;
    }
    slideImg();

}