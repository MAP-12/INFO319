// To fetch local files privacy.file_unique_origin needs to be turned to false
// in mozilla firefox about:config

var confirmed = "./useddata/confirmed_24mar.csv";
var confirmedAcc = "confirmed_24mar.csv";
var twitter = "./useddata/march_tweets_gps.csv";
var twitterAcc = "march_tweets_gps.csv";
var activeDate = "24. of March";

async function changeDate(date){

  if(date == 0){
   
    document.getElementById('metainfo').innerHTML = "Active date: 24. of March | Red dots: Active cases | Purple dots: Geotagged tweets about covid-19"
    confirmed = "./useddata/confirmed_24mar.csv"; 
    confirmedAcc = "confirmed_24mar.csv";
    twitter = "./useddata/march_tweets_gps.csv";
    twitterAcc = "march_tweets_gps.csv";

  } else if(date == 1){

    document.getElementById('metainfo').innerHTML = "Active date: 08. of July | Red dots: Active cases | Purple dots: Geotagged tweets about covid-19"
    confirmed = "./useddata/confirmed_08jul.csv"; 
    confirmedAcc = "confirmed_08jul.csv";
    twitter = "./useddata/july_tweets_gps.csv";
    twitterAcc = "july_tweets_gps.csv";

  } else if(date == 2){

    document.getElementById('metainfo').innerHTML = "Active date: 15. of October | Red dots: Active cases | Purple dots: Geotagged tweets about covid-19"
    confirmed = "./useddata/confirmed_15oct.csv"; 
    confirmedAcc = "confirmed_15oct.csv";
    twitter = "./useddata/october_tweets_gps.csv";
    twitterAcc = "october_tweets_gps.csv";

  }
};


async function getConfData(confFile, confAcc){

    const response = await fetch(confFile ,{headers: {
      'Access-Control-Allow-Origin': confAcc
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

async function getTweetData(tweetFile, tweetAcc){

    const response = await fetch(tweetFile,{headers: {
      'Access-Control-Allow-Origin': tweetAcc
    }});
    const data = await response.text();
    //console.log(data);

    const rows = data.split(/\n/);
    rows.forEach(elt =>{
      const row = elt.split(',');
      const lat = row[0];
      const long = row[1];
     
      //setTimeout(drawCircle(lat,long,infectionRate), 100);
      try{
      drawCircleAlt(lat,long);
      } catch{
        console.log('failed')
      }
    });
    
    return data;
    
  }