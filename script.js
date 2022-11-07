const slider = document.querySelectorAll('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider[0].addEventListener('mousedown', (e) => {
  isDown = true;
  slider[0].classList.add('active');
  startX = e.pageX - slider[0].offsetLeft;
  scrollLeft = slider[0].scrollLeft;
});
slider[0].addEventListener('mouseleave', () => {
  isDown = false;
  slider[0].classList.remove('active');
});
slider[0].addEventListener('mouseup', () => {
  isDown = false;
  slider[0].classList.remove('active');
});
slider[0].addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider[0].offsetLeft;
  const walk = (x - startX) * 1.1; //scroll-fast
  slider[0].scrollLeft = scrollLeft - walk;
  console.log(walk);
});

slider[1].addEventListener('mousedown', (e) => {
    isDown = true;
    slider[1].classList.add('active');
    startX = e.pageX - slider[1].offsetLeft;
    scrollLeft = slider[1].scrollLeft;
  });
  slider[1].addEventListener('mouseleave', () => {
    isDown = false;
    slider[1].classList.remove('active');
  });
  slider[1].addEventListener('mouseup', () => {
    isDown = false;
    slider[1].classList.remove('active');
  });
  slider[1].addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider[1].offsetLeft;
    const walk = (x - startX) * 1.1; //scroll-fast
    slider[1].scrollLeft = scrollLeft - walk;
    console.log(walk);
  });

  slider[2].addEventListener('mousedown', (e) => {
    isDown = true;
    slider[2].classList.add('active');
    startX = e.pageX - slider[2].offsetLeft;
    scrollLeft = slider[2].scrollLeft;
  });
  slider[2].addEventListener('mouseleave', () => {
    isDown = false;
    slider[2].classList.remove('active');
  });
  slider[2].addEventListener('mouseup', () => {
    isDown = false;
    slider[2].classList.remove('active');
  });
  slider[2].addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider[2].offsetLeft;
    const walk = (x - startX) * 1.1; //scroll-fast
    slider[2].scrollLeft = scrollLeft - walk;
    console.log(walk);
  });

//changing bg on scroll
var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#F1EFED';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 1400) {
        // white
        body.style.backgroundColor = '#F1EFED';
    } else if (scroll >= 1400 && scroll <= 3700) {
        //black
        body.style.backgroundColor = '#151516';
    } else {
        // white
        body.style.backgroundColor = '#F1EFED';
    }
    // console.log(scroll);
}
//reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 300;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("show");
      } else {
        reveals[i].classList.remove("show");
      }
    }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

const image = document.getElementsByClassName("artwork");
const gallery = document.getElementsByClassName("gallery");
//change cursors upon hover
for (var i = 0 ; i < image.length; i++) {
  image[i].addEventListener('mouseover', () => {
    for (var j = 0; j < gallery.length; j++){
      gallery[j].style.cursor = "url('Wireframe/view_cursor.svg') 48 48, pointer";
    } 
  });
}
for (var i = 0 ; i < image.length; i++) {
  image[i].addEventListener('mouseleave', () => {
    for (var j = 0; j < gallery.length; j++){
      gallery[j].style.cursor = "url('Wireframe/drag_cursor.svg') 48 48, pointer";
    } 
  });
}

//i want it to console log the image's information. i should probably find some way to populate the gallery using js first
for (var i = 0; i < image.length; i++) {
  image[i].addEventListener('click', () => {
    console.log(image[i].src.value);
    // console.log(document.querySelector('img').src.split('/').reverse()[0]);
  })
}