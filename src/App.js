import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Axios from 'axios';

import NextSalat from './components/Section1/NextSalat';
import SlideDiv from './components/Section1/SideDiv';
import Sec2 from './components/qoran/sec2';
import MPro from './components/tips/month';
import Support from './components/secLast/support';
import SelectByUser from './components/AdblockCase/selectByUser';
import InformUser from './components/AdblockCase/informUser';



function App() {


  const [tat, setTat] = useState(false);
  const [err, setErr] = useState(false);


  useEffect(() => {
    document.title = "Home - Salatok.App - Muslim Day Manager";
  }, []);



  const getData = async () => {
    if (!localStorage.getItem("city") || !localStorage.getItem("country")) {

      await Axios.get('https://api.ipify.org?format=json').then(res => {
        // console.log(res.data);
        Axios.post(`https://iptwist.com`, { ip: `${res.data.ip}` }, {
          headers: {
            'Content-Type': 'application/json',
            'X-IPTWIST-TOKEN': 'Xpy1YphN5bu10XqVYDASedcCt2AJJnDTTIRQcaTLgOstdTIcg5HEAwPYU9fzjKjN'
          },
        }).then(res => {
          console.log(res.data);
          localStorage.setItem("city", `${res.data.city}`);
          localStorage.setItem("country", `${res.data.country}`);
          localStorage.setItem("timezone", res.data.timezone);
          localStorage.setItem("lat",res.data.latitude);
          localStorage.setItem("long", res.data.longitude);
          setErr(false);
          setTat(true);
        }).catch(erro => {
          console.log(erro)
          // config
          setErr(true);
          setTat(true);
        })

      }).catch(error => { console.error('App.js : ' + error); setErr(true); setTat(true); })

    } else {
      setErr(false);
      setTat(true);
    }
  }

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, [tat])
  if (err === false && tat === false) {
    return (
      <>
        <div className='bg-gradient-to-tr from-teal-800  to-cyan-800 w-screen h-screen m-0 p-2 flex flex-col items-center content-center justify-center'>

          <div className="loader">
            <div className="outer"></div>
            <div className="middle"></div>
            <div className="inner"></div>
          </div>

        </div>
      </>
    )

  } else {


    return (
      <>
        <div className='w-full flex lg:flex-row flex-col items-stretch justify-center content-center space-y-4 space-x-0 lg:space-y-0 lg:space-x-4 p-4'>
          {(err === true && tat === true) ?
            <>
              <InformUser />
              <SelectByUser />
            </>
            :
            <>
              <NextSalat />
              <Routes>
                <Route path='/setting' element={<SelectByUser />} />
                <Route path='*' element={<SlideDiv />} />
              </Routes>
            </>
          }
        </div>
        <div className='w-full flex lg:flex-row flex-col items-stretch justify-center content-center space-y-4 space-x-0 lg:space-y-0 lg:space-x-4 p-4'>
          <Sec2 />
        </div>
        <div className='w-full flex lg:flex-row flex-col items-stretch justify-center content-center space-y-4 space-x-0 lg:space-y-0 lg:space-x-4 p-4'>
          {/* <Holiday/> */}
        </div>
        <div className='w-full flex lg:flex-row flex-col items-stretch justify-center content-center space-y-4 space-x-0 lg:space-y-0 lg:space-x-4 p-4'>
          <MPro />
        </div>
        {/* <div className='w-full flex lg:flex-row flex-col items-stretch justify-center content-center space-y-4 space-x-0 lg:space-y-0 lg:space-x-4 p-4'>
          <Calendar />
        </div> */}
        <div className='w-full flex lg:flex-row mt-20 flex-col items-stretch justify-center content-center space-y-4 space-x-0 lg:space-y-0 lg:space-x-4 p-4'>
          <Support />
        </div>

      </>
    );
  }


};

export default App
