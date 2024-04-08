import React, { useEffect } from 'react';
import moment from "moment";

function MPro() {

// convert(moment().format('DD-MM-YYYY'))
useEffect(()=>{
    afrt()
},[])
const afrt = () =>{
    convert(moment().format('DD-MM-YYYY'))
    const md =  Math.floor(moment().format('D') * 100 / 31 );console.log(moment().format('D'));
    document.querySelector('.gper').innerHTML = md + ' %';
    document.querySelector('.axeos').value = md;
}

    const convert = (date) => {

        fetch(`https://api.aladhan.com/v1/gToH?date=${date}`)
            .then(response => response.json())
            .then(json => {

                let por = Math.floor(json.data.hijri.day * 100 / 29);
                document.querySelector('.exos').innerHTML = por + ' %';
                document.querySelector('.exosa').value = por;
                // console.log(por)
            })
    }

    return (
        <>
            <div className="flex flex-col w-full my-12 lg:space-y-4 space-y-8 p-6">
                <div className="flex lg:flex-row flex-col lg:items-center items-start w-full lg:space-x-4 space-x-0 space-y-2 lg:space-y-0">
                    <h1 className="text-xl font-bold lg:w-2/3 w-full text-cyan-400">Gregorian mounth progress : <strong className="gper"> %</strong></h1 >
                    <progress className="progress progress-info w-full bg-slate-700 axeos" value="40" max="100"></progress>
                </div>
                <div className="flex lg:flex-row flex-col  lg:items-center items-start w-full lg:space-x-4 space-x-0 space-y-2 lg:space-y-0">
                    <h1 className="text-xl font-bold lg:w-2/3 w-full text-cyan-400">Arabic mounth progress : <strong className="exos"> %</strong></h1 >
                    <progress className="progress progress-info w-full bg-slate-700 exosa" value="50" max="100"></progress>
                </div>
            </div>
        </>
    );
}

export default MPro;