import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Vers(props) {
    

    const [ayah, setAyah] = useState(0);

    
    const getQrn = () => {
        axios.get(`https://api.quran.com/api/v4/quran/verses/imlaei?verse_key=${props.num}`)
            .then((response) => {
                // handle success
                setAyah(response.data.verses[0].text_imlaei)
                //   console.log(response);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })


    }
    const fontType = (para) => {
        axios.get(`https://api.quran.com/api/v4/quran/verses/${para}?verse_key=${props.num}`)
            .then((response) => {
                // handle success
                setAyah(response.data['verses'][0][`text_${para}`])
                // console.log(`https://api.quran.com/api/v4/quran/verses/${para}?verse_key=${props.num}`);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })

    }
    const trans = (para) => {
        axios.get(`https://api.quran.com/api/v4/quran/translations/${para}?verse_key=${props.num}`)
            .then((response) => {
                // handle success
                setAyah(response.data['translations'][0][`text`])
                // console.log(`https://api.quran.com/api/v4/quran/verses/${para}?verse_key=${props.num}`);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }
    
    useEffect(() => {
        getQrn()
    }, [])

    return (
        <div className="lg:w-1/2 w-full shadow-xl flex justify-between items-center p-4 rounded-lg bg-slate-100 dark:bg-gray-800 dark:text-slate-100 text-gray-800">
            <div className="flex w-full flex-col items-start justify-center content-center space-y-4 ">
                    <div id='ayyah' className='overflow-scroll h-48 max-h-48'>
                      <div className='text-2xl' dangerouslySetInnerHTML={{__html:ayah}} />
                    </div>
               
                <div>
                    {/* <p className="text-xl">{surah.englishName + ' - ' + surah.englishNameTranslation }<p className='text-lg'>{'ayah : '+snum}</p></p> */}
                </div>
                <div className='w-full p-1 rounded-lg bg-slate-200 flex flex-col dark:bg-gray-900'>
                    <h1 className='pl-2 text-lg'>Select <strong>Ayah</strong> font format</h1>
                    <div className='w-full p-2 rounded-lg space-x-2 space-y-4 lg:space-y-0'>
                        <button onClick={() => { fontType('indopak') }} className='badge badge-accent hover:text-black badge-outline'>indopak</button>
                        <button onClick={() => { fontType('uthmani') }} className='badge badge-accent hover:text-black badge-outline'>uthmani</button>
                        <button onClick={() => { fontType('uthmani_simple') }} className='badge badge-accent hover:text-black badge-outline'>simple</button>
                        <button onClick={() => { fontType('imlaei') }} className='badge badge-accent hover:text-black badge-outline'>imlaei</button>
                        <button onClick={() => { trans(20) }} className='badge bg-cyan-300 text-gray-800 badge-outline'>english</button>
                        <button onClick={() => { trans(136) }} className='badge bg-cyan-300 text-gray-800 badge-outline'>french</button>
                        <button onClick={() => { trans(78) }} className='badge bg-cyan-300 text-gray-800 badge-outline'>russian</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vers;