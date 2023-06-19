const mainNav = document.querySelector('.main-navigation');
const mainNavToggle = document.querySelector('.main-navigation__toggle');

mainNavToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-navigation__closed')){
    mainNav.classList.remove('main-navigation__closed');
    mainNav.classList.add('main-navigation__opened');
  } else {
    mainNav.classList.add('main-navigation__closed');
    mainNav.classList.remove('main-navigation__opened');
  }
}
);


function initMap() {
  const locationPin = { lat: 42.0570074, lng: -88.0205829};
  const allianceMoving = {
    center: { lat: 42.0570074, lng: -88.0205829},
    zoom: 15.5,
  };
  const map = new google.maps.Map(document.getElementById("map"), allianceMoving);
  const marker = new google.maps.Marker({
    position: locationPin,
    map: map,
    icon: src='./images/map-location-pin.svg'
  });
}