// To fetch local files privacy.file_unique_origin needs to be turned to false
// in mozilla firefox about:config

async function getData(){

    const response = await fetch('./test-clean.csv',{headers: {
      'Access-Control-Allow-Origin': 'test-clean.csv'
    }});
    const data = await response.text();
    //console.log(data);

    const rows = data.split(/\n/);
    rows.forEach(elt =>{
      const row = elt.split(',');
      const lat = row[0];
      const long = row[1];
      const infectionRate = row[2];

      //setTimeout(drawCircle(lat,long,infectionRate), 100);
      drawCircle(lat,long,infectionRate);
    });
    
    return data;
    
  }
