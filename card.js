let scrolll = document.querySelector(".scrolll");
let scrollr = document.querySelector(".scrollr");
// console.log(scrolll);
// console.log(scrollr);
let img = document.querySelector(".img");
// console.log(img);
scrolll.onclick = () => {
    img.scrollBy(-1535,0);
    // console.log(-1000);
};
scrollr.onclick = () => {
    img.scrollBy(1535,0);
    // console.log(1000);g
};
