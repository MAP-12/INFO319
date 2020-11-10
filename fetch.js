// To fetch local files privacy.file_unique_origin needs to be turned to false
// in mozilla firefox about:config

async function getData(){

    const response = await fetch('./info_extended.csv',{headers: {
      'Access-Control-Allow-Origin': 'info_extended.csv'
    }});
    const data = await response.text();
    //console.log(data);

    const rows = data.split(/\n/);
    rows.forEach(elt =>{
      const row = elt.split(',');
      const lat = row[0];
      const long = row[1];
      const infectionRate = row[2];
      const region = row[3];

      //setTimeout(drawCircle(lat,long,infectionRate), 100);
      try{
      drawCircle(lat,long,infectionRate, region);
      } catch{
        console.log('failed')
      }
    });
    
    return data;
    
  }
