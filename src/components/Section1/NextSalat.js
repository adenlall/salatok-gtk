import { Routes, Route, NavLink } from 'react-router-dom'
import { useEffect }  from "react";
import   SelectByUser from '../AdblockCase/selectByUser';
import   Clock        from './Clock';
import   SalatsDay    from "./SalatsDay";
import   Ttst    from "./Ttst";

function NextSalat(props) {

    return (
        <>
            <div className="lg:w-[60%] w-full shadow-xl h-full max-h-full lg:h-[37em] lg:max-h-[37em] flex md:flex-row flex-col  justify-between items-center p-4 rounded-lg bg-slate-100 dark:bg-gray-800 dark:text-slate-100 text-gray-800">
                <SalatsDay />

                <div className='w-full flex flex-col items-center'>
                    <Routes>
                        <Route path='*' element={<Clock />} />
                        <Route path='/salat/fajr' element={<Ttst ynt="fajr" />} />
                        <Route path='/salat/sunrise' element={<Ttst ynt="sunrise" />} />
                        <Route path='/salat/dhuhr' element={<Ttst ynt="dhuhr" />} />
                        <Route path='/salat/asr' element={<Ttst ynt="asr" />} />
                        <Route path='/salat/maghrib' element={<Ttst ynt="maghrib" />} />
                        <Route path='/salat/isha' element={<Ttst ynt="isha" />} />
                    </Routes>
                    <div className="space-x-1 flex items-center justify-center mt-4">
                        <NavLink id='clos' to='/'><button className='btn btn-info w-[14em]'>Clock</button></NavLink>
                        <NavLink id='clos' to='/setting'><button className='h-[3.2em] w-[3.2em] ml-1 mt-[0.4em]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
                                <path
                                    d="M22.443 16.022A4.391 4.391 0 0022 16a4.279 4.279 0 00-.444.022 3.926 3.926 0 00-3.421 3.72 4.168 4.168 0 00.932 2.778L22 26.354l2.933-3.834a4.168 4.168 0 00.932-2.777 3.927 3.927 0 00-3.422-3.721zM22 22a2 2 0 112-2 2.002 2.002 0 01-2 2zm-8.16-11.299L1 8.867V26a5.006 5.006 0 005 5h3.78z"
                                    fill="#3ABFF8"
                                />
                                <path
                                    d="M15.823 10.985L11.82 31H26a5.006 5.006 0 005-5V13.153zm10.7 12.75h-.001l-3.728 4.872a.999.999 0 01-1.588 0l-3.727-4.872a6.166 6.166 0 01-1.34-4.13 5.91 5.91 0 015.215-5.573 6.64 6.64 0 011.292 0 5.91 5.91 0 015.216 5.574 6.173 6.173 0 01-1.34 4.129zM31 11.133V6a5.006 5.006 0 00-5-5H6a5.006 5.006 0 00-5 5v.847z"
                                    fill="#3ABFF8"
                                />
                            </svg>
                        </button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </>

    );

}

export default NextSalat;
