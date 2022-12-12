const slider = document.querySelectorAll('.gallery');
let isDown = false;
let startX;
let scrollLeft;

// butter.init({
//   wrapperId: 'butter',
//   wrapperDamper: 0.1,
//   cancelOnTouch: true
// });
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
  });

var client = contentful.createClient({
  space: 'pgx49zgg3n2i',
  accessToken: 'sZ0JO2BCZ2u71n8maUd_CzUiH2WMZrkmY-h-L0E36u0',
});

client.getEntries().then(function (entries) {
  var ceramicCount = 1;
  var cCount = 1;
  var inkCount = 1;
  var iCount = 1;
  var oilCount = 1;
  var oCount = 1;

  //loading static images
  document.getElementById('oil').src = entries.includes.Asset[3].fields.file.url;
  document.getElementById('oil2').src = entries.includes.Asset[2].fields.file.url;
  document.getElementById('ink').src = entries.includes.Asset[37].fields.file.url;
  document.getElementById('ceramic').src = entries.includes.Asset[15].fields.file.url;
  
  entries.items.forEach(function (entry) {
    let ceramicGallery = document.getElementById('ceramicGallery');
    let inkGallery = document.getElementById('inkGallery');
    let oilGallery = document.getElementById('oilGallery');

    let title = entry.fields.titleAndDescription;
    let size = entry.fields.size;
  
    if(entry.metadata.tags[0].sys.id == "ceramic" && cCount <= 7){
      let artwork = document.createElement('img');
      artwork.src = entry.fields.artwork.fields.file.url;
      artwork.classList.add('artwork');
      artwork.classList.add('pos'+ceramicCount);
      ceramicGallery.append(artwork);
      ceramicCount++;
      cCount++;
      console.log("hi");
      if (ceramicCount == 5){
        ceramicCount = 1;
      }
      artwork.addEventListener("click", e => {
        document.getElementById("full-image").src=entry.fields.artwork.fields.file.url;
        document.getElementById("image-title").innerHTML=title;
        document.getElementById("image-size").innerHTML=size;
        document.getElementById("imgBox").classList.add("shown");
      })
    }
    if(entry.metadata.tags[0].sys.id == "ink" && iCount <= 7){
      let artwork = document.createElement('img');
      artwork.src = entry.fields.artwork.fields.file.url;
      artwork.classList.add('artwork');
      artwork.classList.add('pos'+inkCount);
      inkGallery.append(artwork);
      inkCount++;
      iCount++;
      if (inkCount == 5){
        inkCount = 1;
      }
      artwork.addEventListener("click", e => {
        document.getElementById("full-image").src=entry.fields.artwork.fields.file.url;
        document.getElementById("image-title").innerHTML=title;
        document.getElementById("image-size").innerHTML=size;
        document.getElementById("imgBox").classList.add("shown");
      })
    }
    if(entry.metadata.tags[0].sys.id == "oil" && oCount <= 7){
      let artwork = document.createElement('img');
      artwork.src = entry.fields.artwork.fields.file.url;
      artwork.classList.add('artwork');
      artwork.classList.add('pos'+oilCount);
      oilGallery.append(artwork);
      oilCount++;
      oCount++;
      if (oilCount == 5){
        oilCount = 1;
      }
      artwork.addEventListener("click", e => {
        document.getElementById("full-image").src=entry.fields.artwork.fields.file.url;
        document.getElementById("image-title").innerHTML=title;
        document.getElementById("image-size").innerHTML=size;
        document.getElementById("imgBox").classList.add("shown");
      })
    }
    
  });
});

const overlay = document.getElementById("imgBox");
overlay.addEventListener("click", e => {
  document.getElementById("imgBox").classList.remove("shown");
})


//changing bg on scroll
var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#F1EFED';
//media queries
var mobile = window.matchMedia("(min-width: 320px) and (max-width: 599px)");
var tablet = window.matchMedia("(min-width: 600px) and (max-width: 1024px)");
var computer = window.matchMedia("(min-width: 1025px) and (max-width: 1280px)");

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    console.log(scroll);
    if (mobile.matches) {
      if (scroll < 1250) {
        // white
        body.style.backgroundColor = '#F1EFED';
      } else if (scroll >= 1250 && scroll <= 3800) {
          //black
          body.style.backgroundColor = '#151516';
      } else {
          // white
          body.style.backgroundColor = '#F1EFED';
      }
    } else if (tablet.matches) {
      if (scroll < 1220) {
          // white
          body.style.backgroundColor = '#F1EFED';
      } else if (scroll >= 1220 && scroll <= 3800) {
          //black
          body.style.backgroundColor = '#151516';
      } else {
          // white
          body.style.backgroundColor = '#F1EFED';
      }
    } else if (computer.matches) {
      if (scroll < 1360) {
        // white
        body.style.backgroundColor = '#F1EFED';
      } else if (scroll >= 1360 && scroll <= 4000) {
          //black
          body.style.backgroundColor = '#151516';
      } else {
          // white
          body.style.backgroundColor = '#F1EFED';
      }
    } else {
      if (scroll < 1360) {
          // white
          body.style.backgroundColor = '#F1EFED';
      } else if (scroll >= 1360 && scroll <= 4000) {
          //black
          body.style.backgroundColor = '#151516';
      } else {
          // white
          body.style.backgroundColor = '#F1EFED';
      }
    }
}

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

const cursor = document.querySelector('.cursor');
const image = document.getElementsByClassName("artwork");
const gallery_list = document.querySelectorAll(".images");

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 48) + "px; left: " + (e.pageX - 48) + "px;");
})
document.addEventListener('click', e => {
  cursor.classList.add("expand");
  setTimeout(() =>{
    cursor.classList.remove("expand");
  }, 400)
})

for (let i = 0; i < gallery_list.length; i++) {
  gallery_list[i].addEventListener('mouseenter', e => {
    cursor.classList.add("hovering");
    for (let j = 0; j < image.length; j++) {
      image[j].addEventListener('mouseenter', e => {
        document.getElementById('cursor-swap').src="./Wireframe/view_cursor.svg";
      })
      image[j].addEventListener('mouseleave', e => {
        document.getElementById('cursor-swap').src="./Wireframe/drag_cursor.svg";
      })
    }
  })
  gallery_list[i].addEventListener('mouseleave', e => {
    cursor.classList.remove("hovering");
  })
  gallery_list[i].addEventListener('mousedown', e => {
    cursor.classList.add("expand");
  })
  gallery_list[i].addEventListener('mouseup', e => {
    cursor.classList.remove("expand");
  })
}