let scrollCont = document.querySelector('.gallery')
let prevBtn = document.querySelector('.leftArrow')
let nextBtn = document.querySelector('.rightArrow')
// console.log(scrollCont);
// console.log(prevBtn);
// console.log(nextBtn);
scrollCont.addEventListener("wheel", (evt) => {
    scrollCont.style.scrollBehavior = 'auto';
    evt.preventDefault();
    scrollCont.scrollLeft += evt.deltaY
   
});

nextBtn.addEventListener("click", () => {
    scrollCont.style.scrollBehavior = 'smooth';
    scrollCont.scrollLeft += 900;
});
prevBtn.addEventListener("click", () => {
    scrollCont.style.scrollBehavior = 'smooth';
    scrollCont.scrollLeft -= 900;
});