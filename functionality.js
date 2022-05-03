//Get the button:
floatButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    floatButton.style.display = "block";
    floatButton.style.transform = "translateX(0)";
  } else {
    floatButton.style.transform = "translateX(500%)";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


let Gbtn = document.getElementById("Gbtn");
let Gwrapper = document.getElementById("Gwrapper");

function morePhotos() {

  Gwrapper.innerHTML += `<div>
  <img src="../imgs/gimg21.jpg"
      alt="" />
</div>
<div class="wide">
  <img src="../imgs/gimg22.jpg"
      alt="" />
</div>
<div>
  <img src="../imgs/gimg23.jpg"
  alt="" />
</div>
<div>
  <img src="../imgs/gimg24.jpg"
  alt="" />
</div>
<div class="tall">
  <img src="../imgs/gimg25.jpg"
  alt="" />
</div>
<div class="wide">
  <img src="../imgs/gimg26.jpg"
  alt="" />
</div>
<div>
  <img src="../imgs/gimg5.jpg"
  alt="" />
</div>
<div class="wide">
  <img src="../imgs/gimg18.jpg"
  alt="" />
</div>
<div class="tall">
  <img src="../imgs/gimg29.jpg"
  alt="" />
</div>`
}

Gbtn.addEventListener('click', () => {

  morePhotos();
});
