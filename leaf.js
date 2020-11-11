//getData draws the John Hopkins covid-19 data
function drawCircle(lat,long,infectionRate, region){
  var circle = L.circle([lat,long], {
    color: 'red',
    fillColor: 'f03',
    fillOpacity: '0.5',
    radius: infectionRate/4
  })

  //Adds a popup to show the region and confirmed active cases
  circle.bindPopup('Region: ' + '"' + region + '"' + ' Infection rate: ' + Math.floor(infectionRate));
  circle.addTo(mymap);
};

//drawCircleAlt draws the twitter data. 
//it is a seperate function cause it requires less parameters
function drawCircleAlt(lat,long){
  var circle = L.circle([lat,long], {
    color: 'purple',
    fillColor: 'f03',
    fillOpacity: '0.5',
    radius: 1
  })

  circle.addTo(mymap);
};

//function to clear the map by reloading it
function reloadPage(){
  location.reload();
};
