import React, { useState, useEffect } from 'react';
    import moment from 'moment'
    import axios from 'axios';
    
    
function Ahkam() {
    // const topics = ['رمصان', "مبطلات_الصوم"]
    
        const [state, setState] = useState(true);
        const [body, setBody] = useState(0);
        const [Title, setTitle] = useState(0);
    

        const fetchDatta = async (topic) => {
    
            axios.get(`https://ar.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${topic}`).then(res => {
                setBody(res.data.query['pages']['2383']['extract']);
                setTitle(res.data.query['pages']['2383']['title']);
                setState(false);
            }).catch(err => window.alert('Ttst' +err))
    
        }
    

    return (
        <>
            <div className="w-full flex bg-slate-100 dark:bg-gray-800 dark:text-slate-100 text-gray-800">
                <div className="flex items-center w-1/4 flex-col space-y-4 px-6 py-3 m-2 h-full max-h-80 overflow-scroll">
                    <h1 onClick={() => {fetchDatta('رمضان')}} className="bg-slate-200 w-full dark:bg-gray-700 px-6 py-3 rounded-lg text-xl font-bold">Aham AL salat</h1>
                    <h1 onClick={() => {fetchDatta('مبطلات_الصوم')}} className="bg-slate-200 w-full dark:bg-gray-700 px-6 py-3 rounded-lg text-xl font-bold">Aham AL salat</h1>
                    <h1 onClick={() => {fetchDatta('الإفطار_في_رمضان')}} className="bg-slate-200 w-full dark:bg-gray-700 px-6 py-3 rounded-lg text-xl font-bold">Aham AL salat</h1>
                    {/* {names} */}
                </div>
                <div className="w-3/4 p-4">
                    <header className="text-2xl font-bold">{Title}</header>
                    <p className="text-xl font-bold">{body}</p>
                </div>
            </div>
        </>
    );
}

export default Ahkam;