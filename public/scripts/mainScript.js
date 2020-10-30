
let menuState = 1; // to determine whether to delay class toggle; 1 means box is expanded, 0 is collapsed. delay on 0
let ddaState = 0;
let dd6State = 0;
let dd5State = 0;


let map, marker;
const mapDiv = document.querySelector('#map');
const modal = document.querySelector('#modal');

function initMap(){ 
  map = new google.maps.Map(mapDiv, {zoom: 18, mapTypeId: 'satellite', disableDefaultUI: true, center: {lat: 39.5210, lng: -76.6461}})
}
function moveMap(lat, lng, zoom){
  map = new google.maps.Map(mapDiv, {zoom: zoom, mapTypeId: 'satellite', disableDefaultUI: true, center: {lat: lat, lng: lng}})
  hamburger();
}

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}


function hamburger(){
  const menu = document.querySelector('#menu');
  menu.classList.toggle('collapsed');
  menu.classList.toggle('expanded');

  const menuContent = document.querySelector('#menuContent');
  let swap = async function(){
    menuContent.classList.toggle('collapsed')
    menuContent.classList.toggle('expanded')
  }
  if(menuState){ //Checking to see if menu is open
    menuState = 0;
    swap();
  } else {
    menuState = 1;
    setTimeout(swap, 200);
  }
  document.querySelector('#box').classList.toggle('open');
}

function drop1(){
  if(ddaState){
    document.querySelector('#allWondersDD').classList.toggle('showDisplay');
    setTimeout(function(){document.querySelector('#allWondersDD').classList.toggle('showDisplayOpacity')}, 500)
    ddaState = 0;
  } else {
    document.querySelector('#allWondersDD').classList.toggle('showDisplay');
    document.querySelector('#allWondersDD').classList.toggle('showDisplayOpacity');
    ddaState = 1;
  }
}

function drop2(){
  if(dd6State){
    document.querySelector('#c6WondersDD').classList.toggle('showDisplay');
    setTimeout(function(){document.querySelector('#c6WondersDD').classList.toggle('showDisplayOpacity')}, 500)
    dd6State = 0;
  } else {
    document.querySelector('#c6WondersDD').classList.toggle('showDisplay');
    document.querySelector('#c6WondersDD').classList.toggle('showDisplayOpacity');
    dd6State = 1;
  }
}

function drop3(){
  if(dd5State){
    document.querySelector('#c5WondersDD').classList.toggle('showDisplay');
    setTimeout(function(){document.querySelector('#c5WondersDD').classList.toggle('showDisplayOpacity')}, 500)
    dd5State = 0;
  } else {
    document.querySelector('#c5WondersDD').classList.toggle('showDisplay');
    document.querySelector('#c5WondersDD').classList.toggle('showDisplayOpacity');
    dd5State = 1;
  }
}