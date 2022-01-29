   $('.header-slider').slick();  

if($(window).width() <=800){
$(document).ready(function(){
   $('.slider').slick();
});
$("#mobile-contacts").appendTo("#main-contacts");
$("#menu-icons-box").appendTo("#menu-icons-box-mobile")
$("#mail").appendTo("#contacts-mobile");
$("#phone").appendTo("#contacts-mobile");
$("#snippets").prependTo("#footer");
$("#main-links-first").appendTo("#drop-down-link-menu");
$("#main-links-second").appendTo("#drop-prod");
$("#links-comp").appendTo("#drop-comp");
$("#conversation").prependTo("#right");
$("#equal").appendTo("#left");
$("#difficult").appendTo("#left");
$("#operative").appendTo("#right");
$("#thirty-two").prependTo("#numbers")


   $('.product-slider').slick({
      infinite: true,
      arrows: true,
      dots: true
    });

};

var menuButton = document.querySelectorAll(".dropdown-link");

for (let k = 0; k < menuButton.length; k++) {
    if (k >= 0) {
  menuButton[k].onclick = function(){
  menuButton[k].classList.toggle("dropdown-link-active");
  console.log("dsfdfs")
  }
}
}

console.log("dfsdfs")

console.log("dfsdfs")

var button = document.querySelector(".burger");
var menu = document.querySelector(".header-menu");

button.onclick = function(){
menu.classList.toggle("hidden");
};


var product = document.querySelectorAll(".caces-block");

for (i = 0; i < product.length; i++) {
    if(i !== 0) {
      product[i].addEventListener('mouseenter', function(e){ 
        e.target.classList.toggle("caces-block-active");
      });
      product[i].addEventListener('mouseleave', function(e){ 
        e.target.classList.remove("caces-block-active");
      });
  }
}


document.addEventListener("DOMContentLoaded", function(){
  for (let k = 0; k < product.length; k++) {

    if(k === 0 ) {
      product[k].classList.add('caces-block-active');
      product[k].classList.add('caces-steal-companies');
    }

    if (k % 2 == 1) {
      if(k !== 0) {    
        product[k].classList.add('caces-firms');
      }
    }
  }
});






// var playButton = document.querySelector(".play-box");
// var playContainer = document.querySelector(".play-button-arrow");
// playButton.onclick = function(){
// console.log("hohoho");
// };


//  playButton.addEventListener('click', function(){
//     playContainer.style.display = "none";
// });
