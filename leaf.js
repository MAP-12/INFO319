//Test funksjon 
var i = 0;
function writingCircles(){
    if(i==0){
      setTimeout(drawCircle(55,12,499),500);
      i++;
    }else if(i==1){
      setTimeout(drawCircle(21.9,-159.4,1000), 1000);            
      i++;
    }else if(i==2){
      setTimeout(drawCircle( 34.6, -81.9, 1000), 1500);
      i++;
    }else if(i==3){
      setTimeout(drawCircle(35, -4, 2000), 2000);            
      i++;
    }else if(i==4){
      setTimeout(drawCircle(30 -6, 2000), 2500);
      i++;
    }else if(i==5){
      setTimeout(drawCircle(38, 9, 5000), 3000);
      i++;
    }
  }
  

function drawCircle(lat, long, infectionRate){
   if(lat == null && long == null && infectionRate == null){ 
    var lat = 60.392;
    var long = 5.353;
    var infectionRate = 499; 
  }

if(infectionRate <= 500){

    var circle = L.circle([lat,long], {
    color: 'orange',
    fillColor: 'f03',
    fillOpacity: 0.5, 
    radius: 1000}).addTo(mymap);

}else if(infectionRate <= 1000){
    
    var circle = L.circle([lat,long], {
    color: 'red',
    fillColor: 'f03',
    fillOpacity: 0.5, 
    radius: 5000}).addTo(mymap);

}else{
    
    var circle = L.circle([lat,long], {
    color: 'red',
    fillColor: 'f03',
    fillOpacity: 0.5, 
    radius: 10000}).addTo(mymap);
    }
}  
