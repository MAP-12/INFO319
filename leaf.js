
function initMap(){
    const mymap = L.map('covidMap').setView([60.392, 5.335], 13);
}
//window.onload = initMap();

function tileMap(){
    const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);
} 
//window.onload = tileMap();

function onLoad(){
    initMap();
    //setTimeout(initMap(), 5);
    setTimeout(tileMap(), 5000);
}

/* var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap); 
  */
H
/* function drawCircle(lat,long){
    var circle = L.circle([lat,long], {
      color: 'red',
      fillColor: 'f03',
      fillOpacity: 0.5, 
      radius: 500}).addTo(mymap)
  } */