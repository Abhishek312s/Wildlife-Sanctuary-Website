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
let Hbtn = document.getElementById("Hbtn");
let Gwrapper = document.getElementById("Gwrapper");
let hotelListing = document.querySelector(".moreHotels");

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

function moreHotels() {
  hotelListing.innerHTML += `<div class="Hcard">
  <div class="Himg">
      <img src="../imgs/hotel2.jpg" alt="Manu Mahrani Resort">
  </div>
  <div class="Hcontent">
      <h3>Bordehi Tusker Trail Resort</h3>
      <label><i class="fa fa-map-marker" aria-hidden="true"></i> Government School, Opppsite
          Sawaldhey, Dhela Rd, shamnagar, Madhya Pradesh 244715, Bordehi</label>
      <div class="Hdetail">
          <h4>Luxury Room <img src="../imgs/people-icon.png" alt="people images"> </h4>
          <span>Jungle side Resort</span>
          <span>Near Safari Gate Jhirna, Dhela</span>
          <ul>
              <li>Air Conditioning</li>
              <li>Wifi</li>
              <li>Dining Area</li>
              <li>Parking</li>
              <li>Living Room</li>
              <li>Bathroom</li>
              <li>Housekeeping</li>
          </ul>
      </div>
  </div>
  <div class="Hpricing">
      <h3>₹ 5200</h3>
      <p>Per Night + Taxes</p>

  </div>
</div><div class="Hcard">
<div class="Himg">
    <img src="../imgs/hotel4.jpg" alt="Manu Mahrani Resort">
</div>
<div class="Hcontent">
    <h3>De Coracao Resort</h3>
    <label><i class="fa fa-map-marker" aria-hidden="true"></i> Dhikuli shamnagar, Naiktail,
        Madhya Pradesh 244715</label>
    <div class="Hdetail">
        <h4>Luxury Room <img src="../imgs/people-icon.png" alt="people images"> </h4>
        <span>Jungle side Resort</span>
        <span>Near Safari Gate Jhirna, Dhela</span>
        <ul>
            <li>Air Conditioning</li>
            <li>Wifi</li>
            <li>Dining Area</li>
            <li>Parking</li>
            <li>Living Room</li>
            <li>Bathroom</li>
            <li>Housekeeping</li>
        </ul>
    </div>
</div>
<div class="Hpricing">
    <h3>₹ 6500</h3>
    <p>Per Night + Taxes</p>

</div>
</div><div class="Hcard">
<div class="Himg">
    <img src="../imgs/hotel3.jpg" alt="Manu Mahrani Resort">
</div>
<div class="Hcontent">
    <h3>Beyond Stay Vasavana Resort</h3>
    <label><i class="fa fa-map-marker" aria-hidden="true"></i> Government School, Opppsite
        Sawaldhey, Dhela Rd, Bodehi, Madhya Pradesh 244715, Bordehi</label>
    <div class="Hdetail">
        <h4>Luxury Room <img src="../imgs/people-icon.png" alt="people images"> </h4>
        <span>River side Resort</span>
        <span>Near Safari Gate Bijrani, Garjiya</span>
        <ul>
            <li>Air Conditioning</li>
            <li>Wifi</li>
            <li>Dining Area</li>
            <li>Parking</li>
            <li>Living Room</li>
            <li>Bathroom</li>
            <li>Housekeeping</li>
        </ul>
    </div>
</div>
<div class="Hpricing">
    <h3>₹ 5400</h3>
    <p>Per Night + Taxes</p>

</div>
</div>`
}

Gbtn?.addEventListener('click', () => {
  morePhotos();
});

Hbtn?.addEventListener('click', () => {
  moreHotels();
});
