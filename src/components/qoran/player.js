import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Player(props) {

    const [play, setPlay] = useState(false);
    const [seek, setSeek] = useState(0);
    const [load, setLoad] = useState(true);
    
    const player = document.getElementById('music_player');

    const recico = {
        '8' : ['Mohamed Siddiq al-Minshawi', 'محمد صديق المنشاوي', 'Mujawwad'],
        '2' : ['AbdulBaset AbdulSamad', 'عبد الباسط عبد الصمد', 'Murattal'],
        '10': ['Sa`ud ash-Shuraym', 'سعود الشريم', 'undifined'],
        '12': ['Mahmoud Khalil Al-Husary', 'محمود خليل الحصري', 'Muallim'],
        '5' : ['Hani ar-Rifai', 'هاني الرفاعي', 'undifined'],
        '7' : ['Mishari Rashid al-`Afasy', 'مشاري راشد العفاسي', 'undifined'],
        '3' : ['Abdur-Rahman as-Sudais', 'عَبْدُ ٱلرَّحْمَٰنِ بْنُ عَبْدِ ٱلْعَزِيزِ', 'Murattal']
    }
    
    function qakl() {
        setLoad(true)
        axios.get(`https://api.quran.com/api/v4/recitations/8/by_ayah/${props.num}`)
            .then((response) => {
                document.querySelector('#srslp').src = `https://verses.quran.com/${response.data.audio_files[0].url}`;
                document.querySelector('#music_player').load();
                setLoad(false)
            })
            .catch((error) => {
                setLoad('err')
                console.log(error);
            })
    }

    useEffect(() => {
        qakl()
    }, [])

    function ggd(rec) {
        setLoad(true)
        for (let i = 0; i < document.querySelectorAll(`.avatar`).length; i++) {
            const element = document.querySelectorAll(`.avatar`)[i];
            element.classList.remove('online');
        }
        document.querySelector(`#rec${rec}`).classList.add('online');
        document.querySelector('#bbs').innerHTML = recico[`${rec}`][0];
        player.pause();
        axios.get(`https://api.quran.com/api/v4/recitations/${rec}/by_ayah/${props.num}`)
            .then((response) => {
                document.querySelector('#srslp').src = `https://verses.quran.com/${response.data.audio_files[0].url}`;
                document.querySelector('#music_player').load();
                setLoad(false)
            })
            .catch((error) => {
                setLoad('err')
                console.log(error);
            });
    }

    const handlePlay = () => {
        if (play === false) {
            player.play();
            setPlay(true);
            document.querySelector(".playbtn").classList.add("hidden");
            document.querySelector(".pausebtn").classList.remove("hidden");
        } else {
            player.pause();
            setPlay(false);
            document.querySelector(".pausebtn").classList.add("hidden");
            document.querySelector(".playbtn").classList.remove("hidden");
        }
    };

    const stop = (soft) => {
    	if(!soft){
		    player.pause();
		    player.currentTime = 0;
		    setPlay(false);
    	}
        setSeek(0);
        document.querySelector(".pausebtn").classList.add("hidden");
        document.querySelector(".playbtn").classList.remove("hidden");
    }

    function volChange() {
        player.volume = document.getElementById("change_vol").value;
    }

    const mutePlayer = () => {
		player.volume = player.volume === 0 ? 1 : 0;
		document.getElementById("change_vol").value = player.volume;
    }

    const logseek = () => {
        const audio = document.querySelector('#music_player');
        if(audio.duration===audio.currentTime){
            stop();
            return;
        }
        setSeek(String(audio.currentTime * (100 / audio.duration)));
        document.querySelector('#ct').innerHTML = `${setct(audio.currentTime)}`;
        document.querySelector('#tt').innerHTML = `${setct(audio.duration)}`;
    }

    const handelSeek = () => {
        const audio = document.querySelector('#music_player');
        const seek = document.querySelector('#seekSlider');
        let duration = audio.duration;
        audio.currentTime = seek.value * duration / 100;
        let current = audio.currentTime * (100 / duration);
        setSeek(String(current));
        document.querySelector('#ct').innerHTML = `${setct(audio.currentTime)}`;
        document.querySelector('#tt').innerHTML = `${setct(duration)}`;
    }

    const setct = (time) => {
        time = String(time);
        if (isNaN(time) === true) {
            time = '00';
        }
        var mins = Math.floor(time / 60);
        if (mins < 10) {
            mins = '0' + String(mins);
            mins = String(mins)
        }
        var secs = Math.floor(time % 60);
        if (secs < 10) {
            secs = '0' + String(secs);
            secs = String(secs)
        }
        return mins + ':' + secs;
    }

    useEffect(() => {
        if (load === 'err') {
            console.error('ERROR!! in PLAYER.JS please report a bug on website github page!');
        } else {
            setPlay(false)
            stop(true);
        }
    }, [load]);

    useEffect(() => {
        let timerID = setInterval(() => {
            logseek();
        }, 1000)
        return () => {
            clearInterval(timerID)
        }
    });

    return (
        <>
            <div className="lg:w-1/2 w-full shadow-xl flex flex-col justify-center space-y-4 items-center p-4 rounded-lg bg-slate-100 dark:bg-gray-800 dark:text-slate-100 text-gray-800">
                <div className="flex w-full items-center justify-between content-center space-y-4  p-3 dark:text-slate-100 text-gray-00">
                    {/* <h1 className='font-bold text-4xl'>{suraha.name}</h1> */}
                    <div>
                        {/* <p>Number of Ayahs : {suraha.numberOfAyahs}</p> */}
                        {/* <p>Revelation type : {suraha.revelationType}</p> */}
                    </div>
                </div>
                <div className="flex items-center w-full justify-center content-center py-6 px-2 sm:py-3 sm:px-3 rounded-lg dark:bg-gray-700 bg-[linear-gradient(20deg,#67e8f9,#22d3ee)] text-slate-100">
                    <audio id="music_player">
                        <source id="srslp" src="" />
                    </audio>
                    <div className="flex mr-2">
						<button onClick={handlePlay} className="playbtn btn btn-sm bg-[#67e8f9] text-black m-0">
							<svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="#000000" stroke-width="2" stroke-linejoin="round"/>
							</svg>
						</button>
						<button onClick={handlePlay} className="pausebtn btn btn-sm hidden bg-[#67e8f9] text-black m-0">
							<svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 5V19M16 5V19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</button>
                    </div>
                    <div className="flex text-black w-full sm:w-1/2">
                        <div id="ct">00:00</div>
                        <input type="range" min="1" max="100" id="seekSlider" value={seek} className="range range-sm dark:bg-slate-700 dark:text-slate-700 bg-white text-white mx-2" onChange={handelSeek} />
                        <div id="tt">00:00</div>
                    </div>
                    <div className='sm:flex hidden ml-2 items-center justify-center p-4 lg:py-0 py-[1.4em]'>
						<button onClick={mutePlayer} className="btn btn-sm bg-[#67e8f9] text-black mr-2">
							<svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.0004 9.00009C16.6281 9.83575 17 10.8745 17 12.0001C17 13.1257 16.6281 14.1644 16.0004 15.0001M18 5.29177C19.8412 6.93973 21 9.33459 21 12.0001C21 14.6656 19.8412 17.0604 18 18.7084M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</button>
                        <input type="range" id="change_vol" onChange={volChange} step="0.1" min="0" max="1" className="range range-sm dark:bg-slate-700 dark:text-slate-700 bg-white text-white" />
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-lg pl-2 h-[4em]'>The reciter : <strong className='font-bold badge text-base badge-primary ' id='bbs'>Mohamed Siddiq al-Minshawi</strong></h3>
                    <div className='flex sm:flex-row flex-col mt-2 space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 p-2'>
                        <div className="space-x-2 flex w-full sm:w-1/2">
                            <div className="avatar  w-full online" id="rec8">
                                <div onClick={() => { ggd(8) }} className="shadow-lg w-full mask hover:opacity-80 cursor-pointer mask-squircle ">
                                    <img alt="" className=' object-cover object-center' src="/metadata/alminshawy.jpg"/>
                                </div>
                            </div>
                            <div className="avatar  w-full" id="rec2">
                                <div onClick={() => { ggd(2) }} className="shadow-lg w-full mask hover:opacity-80 cursor-pointer mask-squircle ">
                                    <img alt="" className=' object-cover object-center' src="/metadata/abdelbasset.jpeg" />
                                </div>
                            </div>
                            <div className="avatar  w-full" id="rec10">
                                <div onClick={() => { ggd(10) }} className="shadow-lg w-full mask hover:opacity-80 cursor-pointer mask-squircle ">
                                    <img alt="" className=' object-cover object-center' src="/metadata//shuraim.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="space-x-2 flex w-full sm:w-1/2">
                            <div className="avatar  w-full" id="rec5">
                                <div onClick={() => { ggd(5) }} className="shadow-lg w-full mask hover:opacity-80 cursor-pointer mask-squircle ">
                                    <img alt="" className=' object-cover object-center' src="/metadata/rifai.jpg" />
                                </div>
                            </div>
                            <div className="avatar  w-full" id="rec7">
                                <div onClick={() => { ggd(7) }} className="shadow-lg w-full mask hover:opacity-80 cursor-pointer mask-squircle ">
                                    <img alt="" className=' object-cover object-center' src="/metadata/afasy.jpg" />
                                </div>
                            </div>
                            <div className="avatar  w-full" id="rec3">
                                <div onClick={() => { ggd(3) }} className="shadow-lg w-full mask hover:opacity-80 cursor-pointer mask-squircle ">
                                    <img alt="" className=' object-cover object-center' src="/metadata/sudais.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Player;

