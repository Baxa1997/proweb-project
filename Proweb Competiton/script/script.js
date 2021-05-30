window.addEventListener('load', function() {
   
    // Navbar Burger
let navBurger = document.querySelector('.navbar-burger'),
navMenu = document.querySelector('.nav-menu'),
logoStyle = document.querySelector('.header .logo span'),
hasActive;

navBurger.addEventListener('click', function(e) {
if (!hasActive) {
    navBurger.classList.toggle('active');
    navMenu.classList.toggle('active');
    logoStyle.style.color = 'green';
    if (!navMenu.classList.contains('active')){
        logoStyle.style.color = '#f25822';
    }
} 

});



// Slider

class Slider {
    constructor(data) {
        this.sliderClass = data.sliderClass;
        this.dots = data.dots;
        this.arrows = data.arrows;
        this.leftArrow = data.leftArrow;
        this.nextArrow = data.nextArrow;
        this.sliderItems = data.sliderItems;
        
        this.sliderItems = document.querySelectorAll(`${data.sliderClass} .feedback-items`);
        this.nextArrow = document.querySelector(`${data.sliderClass} .next`);
        this.leftArrow = document.querySelector(`${data.sliderClass} .left`);
        this.dots = document.querySelectorAll(`${data.sliderClass} .round-btns`);
        this.nextArrow.addEventListener('click', this.next.bind(this));
        this.leftArrow.addEventListener('click', this.left.bind(this));
        
        this.leftArrow.style.display = 'none';
        this.nextArrow.style.display = 'none';
        for (let i = 0; i < this.dots.length; i++) {
            this.dots[i].addEventListener('click', this.indicattorBtn.bind(this));
        }
    }
    
    next() {
       for (let i = 0; i < this.sliderItems.length;i++) {
          if (this.sliderItems[i].classList.contains('active')) {
              this.sliderItems[i].classList.remove('active');
              this.dots[i].classList.remove('active');
              i++;
              if (i == this.sliderItems.length) {
                i = 0;
            }
              this.sliderItems[i].classList.add("active");
              this.dots[i].classList.add('active');

          } 
       } 
    }
    left() {
       for (let i = 0; i < this.sliderItems.length;i++) {
          if (this.sliderItems[i].classList.contains('active')) {
              this.sliderItems[i].classList.remove('active');
              this.dots[i].classList.remove('active');
              i--;
              if (i < 0) {
                i = this.dots.length - 1;
            }
              this.sliderItems[i].classList.add("active");
              this.dots[i].classList.add('active');

          } 
       } 
    }
    indicattorBtn(e) {
     if (e.target.classList.contains('round-btns')) {
         for (let i = 0; i < this.dots.length; i++) {
             this.dots[i].classList.remove('active');
            this.sliderItems[i].classList.remove('active');
         }
         e.target.classList.add('active');
         this.sliderItems[e.target.getAttribute('slide-to')].classList.add('active');
         
       }
    }
    
    
    
    
}





const slider1 = new Slider({
  sliderClass: '.slider1'  
});  

const slider2 = new Slider({
   sliderClass: '.slider2' 
   
});
    




// Target Btn move
    
let targetMove = document.querySelector('.targetMove'),
    topTimer;

window.addEventListener('scroll', function(e) {
   if (pageYOffset > 800) {
       targetMove.style.display = 'block';
   } else {
       targetMove.style.display = 'none';
   }
  
});

targetMove.addEventListener('click', moveUp);

function moveUp() {
    if (pageYOffset > 0) {
        let scrolled = pageYOffset;
        window.scrollTo(0, scrolled - 120);
        topTimer = setTimeout(moveUp, 20);
    } 
}
window.addEventListener('mousewheel', function() {
   clearTimeout(topTimer); 
});




// Form

let formSpeed = document.querySelector('.search-form'),
    inputSpeed = document.querySelectorAll('.check-input');

formSpeed.addEventListener('submit', function(e) {
    for (let i = 0; i < inputSpeed.length; i++) {
        if (inputSpeed[i].value == '') {
            e.preventDefault();
            inputSpeed[i].classList.add('active-input');
        }
    }
});

for (let i = 0; i < inputSpeed.length; i++) {
    inputSpeed[i].addEventListener('input', function() {
       inputSpeed[i].classList.remove('active-input'); 
    });
}
    
    
});