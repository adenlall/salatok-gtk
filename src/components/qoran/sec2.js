import React, { useState, useEffect } from 'react';
import Player from './player';
import Vers from './vers';
import axios from 'axios';



function Sec2() {
  // let num = Math.random(1, 6236);
  // let num = Math.floor((Math.random() * 6236) + 1);

  // https://api.quran.com/api/v4/verses/random?language=ar&words=false


  const [load, setLoad] = useState(true);
  const [run, setRun] = useState(0);
  
 

  function qakl () {
    var raan = Math.floor(Math.random()*100); 
    var bar = "/"
  for (let i = 0; i < raan; i++) {
    bar = bar+"/"   
  }
    axios.get(`https://api.quran.com/api/v4/verses/random${bar}`)
      .then((response) => {
        setRun(response.data.verse.verse_key); 
        // console.log(response.data.verse.verse_key); 
        setLoad(false);
      })
      .catch((error) => {
        setLoad('err')
        console.log(error);
      })

  }
  useEffect(() => {
    qakl()
  }, [])


  if (load === true) {
    return 'Loading...';
  }
  
  if (load === 'err') {
    return 'A Fatal Error!';
  } 

  if (load === false) {
    return (
      <>
        <Player num={run} />
        <Vers num={run} />
      </>
    );
  }

}

export default Sec2;

