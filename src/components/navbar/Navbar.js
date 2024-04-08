import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from "react";


function Navbar() {



    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('displayed');


    function hundelNavbar() { setCount(count + 1) }

    useEffect(() => {

        if (title === 'displayed') {
            setTitle('hidden')
            document.querySelector('.xnav').style.display = 'none';
            document.querySelector('body').style.overflow = 'auto';
        } else {
            setTitle('displayed')
            document.querySelector('.xnav').style.display = 'flex';
            document.querySelector('body').style.overflow = 'hidden';
        }

    }, [count])



    return (
        <>
            <nav className="xnav  hidden fixed top-0 pt-20 h-screen flex-col justify-between items-center sppace-y-4 w-full bg-slate-900" style={{ zIndex: '99999' }} >
                <ul className="flex w-[94%] flex-col items-center space-y-4 text-lg list-style-none z-50">
                    <NavLink onClick={hundelNavbar} to="/" className=" px-4 py-3 w-full hover:bg-slate-700 bg-slate-800 text-gray-200 rounded-lg text-2xl font-extrabold ">
                        Home
                    </NavLink>
                    <NavLink onClick={hundelNavbar} to="/ChangeLog" className=" px-4 py-3 w-full hover:bg-slate-700 text-gray-200 bg-slate-800 rounded-lg text-2xl font-extrabold ">
                        Change Log
                    </NavLink>
                    <NavLink onClick={hundelNavbar} to="/About" className=" px-4 py-3 w-full hover:bg-slate-700 text-gray-200 bg-slate-800 rounded-lg text-2xl font-extrabold">
                        About
                    </NavLink>
                    <NavLink onClick={hundelNavbar} to="/Privacy" className=" px-4 py-3 w-full hover:bg-slate-700 text-gray-200 bg-slate-800 rounded-lg text-2xl font-extrabold">
                        Privacy
                    </NavLink>
                    <a href="https://www.github.com/adenlall/salatok" className=" px-4 py-3 w-full hover:bg-slate-700 text-gray-200 bg-slate-800 rounded-lg text-2xl font-extrabold">
                        Github
                    </a>
                </ul>
                <div className='mx-4 mb-6 flex items-center sppace-x-4'>
                    <img className='w-10 h-10 rounded-sm' src="/favicon-194x194.png" alt="" />

                    <h1 className='text-lg font-bold text-gray-400'>Salatok App - Your daily guide</h1>
                </div>
            </nav>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
                <div className="container-fluid w-full flex flex-nowrap items-center justify-between px-6">
                    <button
                        className="navbar-toggler lg:hidden block text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline pr-4"
                        type="button"
                        style={{ zIndex: '99999' }}
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={hundelNavbar}
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bars"
                            className="w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            />
                        </svg>
                    </button>
                    <nav
                        className="flex flex-row items-center justify-between w-full flex-grow"
                        id="navbarSupportedContent1"
                    >
                        <div className='flex items-center space-x-2'>

                            <img className='w-10 h-10 rounded-sm' src="/favicon-194x194.png" alt="" />

                            <NavLink to="/" className="text-xl text-white pr-2 font-semibold" >
                                SALATOK
                            </NavLink>
                        </div>
                        {/* Left links */}
                        <ul className="space-x-2 hidden lg:flex flex-row pl-4 list-style-none">
                            <NavLink to="/" className="hover:bg-gray-800 rounded-lg py-1 px-2">
                                Home
                            </NavLink>
                            <NavLink to="/ChangeLog" className="hover:bg-gray-800 rounded-lg py-1 px-2">
                                ChangLog
                            </NavLink>
                            <NavLink to="/About" className="hover:bg-gray-800 rounded-lg py-1 px-2">
                                About
                            </NavLink>
                            <NavLink to="/Privacy" className="hover:bg-gray-800 rounded-lg py-1 px-2">
                                Privacy
                            </NavLink>
                            <a className="hover:bg-gray-800 rounded-lg py-1 px-2" href="https://www.github.com/adenlall/salatok">
                                Github
                            </a>
                        </ul>

                    </nav>

                </div>
            </nav>
        </>
    );

}

export default Navbar;