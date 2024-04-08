import { useEffect } from "react";
import { motion } from "framer-motion";

function ChangeLog() {

    useEffect(() => {
        document.title = "Change Log - Salatok.App - Muslim Day Manager";
    }, []);


    return (
        <>
            <div className='xpag p-0 m-0 flex flex-col space-y-4 items-center bg-white dark:bg-gray-900'>
                <div className="lg:w-3/4 mt-16 w-4/5 shadow-xl flex md:flex-row flex-col items-center h-80 justify-center rounded-lg dark:text-slate-100 text-gray-800" style={{ background: 'url("https://www.macobserver.com/wp-content/uploads/2019/05/workfeatured-GitHub-2.png") center / cover' }}>
                    <div className="flex flex-col h-full w-full items-center content-center rounded-lg p-4 justify-center dark:bg-[linear-gradient(228deg,#000000ba,transparent)] bg-[linear-gradient(137deg,#fff,transparent)]">
                        <div className="flex flex-col items-start space-y-4">
                            <header className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Track full progress on GitHub</header>
                            <a rel="nofollow" href="https://www.github.com/adenlall/salatok"><button className="btn">GitHub</button></a>
                        </div>
                    </div>
                </div>
                

                <div className=" mt-12 w-full flex flex-col items-center min-h-fit  justify-center  p-4 rounded-lg space-y-10 dark:text-slate-100 text-gray-800">


                    {/* Independent */}
                    <article className="px-2 items-center ">
                        <div className="flex flex-col w-full space-y-2">
                            <span id="test"></span>
                            <motion.h2
                                whileTap={{ scale: 0.9 }}
                                onHoverStart={e => { document.querySelector('.xpag').classList.add('dark:bg-[#4b00c0]'); document.querySelector('.xpag').classList.add('bg-[#4b00c0]') }}
                                onHoverEnd={e   => { document.querySelector('.xpag').classList.remove('dark:bg-[#4b00c0]'); document.querySelector('.xpag').classList.remove('bg-[#4b00c0]') }}
                                className="bg-[#c061cb] rounded-lg px-3 py-1"
                                animate={{ backgroundColor: ['#4b00c0','#c061cb','#4b00c0'] }}
                                transition={{ repeat: Infinity, duration: 3}}
                                >
                                <span className="font-bold text-sm">version: 1.5.0</span>
                            </motion.h2>
                            <h1 class="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Salatok App : Independent Release ᐢ ᵕ ᐢ</h1>
                            <p>Friday 11-08-2023</p>
                        </div>
                        <div className="flex flex-col space-x-2">
                            <h3 className="w-full my-4 text-xl font-bold">A step to an offline website ( works without internet )</h3>
                            <p className="w-full space-y-6 md:space-x-6 mt-6 flex flex-wrap md:flex-row flex-col items-center tracking-tight text-gray-800 dark:text-gray-200 sm:text-2xl">
                                <p className="md:w-1/2 w-full">
                                    this release is independent from any salat api, because it use now PrayTimes.org library so we take a step to make this app work offline on the browser.<br />
                                    we also fix major bugs in the app and calculation algorithm.
                                    improve website UI ...
                                </p>
                                <div className="md:w-1/3 w-full min-h-fit">
                                    <img alt="" className="object-cover" src="/metadata/v1.5.0.png" />
                                </div>

                                <p className="space-y-2">
                                    <h4 className="text-white font-bold w-full ">Hijri Calendar</h4>
                                    <p>
                                        we abandon the muslimsalat.com api over PrayTimes.org library.
                                        this mean :
                                        <ul className="space-y-0 list-disc list-inside">
                                            <li className="ml-[1em]">The app is now independent from any third api to provide to you your salat times.</li>
                                            <li className="ml-[1em]">know we are on the road to make the app 100% independent. that's mean more user privacy protection.</li>
                                            <li className="ml-[1em]">we still use two apis in website the one is to get your lat/long from your ip adress and the second is for searching for your location via Nomination.org api is free and open source api provided by OpenStreetMap organization.</li>
                                        </ul>
                                    </p>
                                </p>


                                <p className="space-y-3">
                                    <h4 className="text-white font-bold w-full ">Bug fixes</h4>
                                    <p>
                                        This update come with major bug fixes and UI improvements in :
                                    </p>
                                    <ul className="space-y-0 list-disc list-inside">
                                        <li className="font-bold ml-[1em]">Quran player</li>
                                        <li className="font-bold ml-[1em]">LocalStorage issues</li>
                                        <li className="font-bold ml-[1em]">Next salat calculation errors</li>
                                        <li className="font-bold ml-[1em]">auto location detection errors</li>
                                    </ul>
                                    <p>
                                        we encourage you to report an issues in <a className="text-green-400" href="https://github.com/adenlall/salatok/issues">Github Repo</a> if you think we didn't already fix it here.
                                    </p>
                                </p>
                            </p>

                        </div>
                    </article>


                    {/* First */}
                    <article className="px-2 items-center ">
                        <div className="flex flex-col w-full space-y-2">
                            <span id="test"></span>
                            <motion.h2
                                whileTap={{ scale: 0.9 }}
                                onHoverStart={e => { document.querySelector('.xpag').classList.add('dark:bg-[rgb(13,132,161)]') }}
                                onHoverEnd={e   => { document.querySelector('.xpag').classList.remove('dark:bg-[rgb(13,132,161)]') }}
                                className="bg-cyan-600 rounded-lg px-3 py-1"
                                animate={{ backgroundColor: ['rgb(31,197,237)','rgb(13,132,161)', 'rgb(31,197,237)'] }}
                                transition={{ repeat: Infinity, duration: 3}}
                                >
                                <span className="font-bold text-sm">version: 1.0.0</span>
                            </motion.h2>
                            <h1 class="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Salatok App : First Release ᐢ ᵕ ᐢ</h1>
                            <p>Friday 18-03-2022</p>
                        </div>
                        <div className="flex flex-col space-x-2">
                            <h3 className="w-full my-4 text-xl font-bold">welcome to the First Release</h3>
                            <p className="w-full space-y-6 md:space-x-6 mt-6 flex flex-wrap md:flex-row flex-col items-center tracking-tight text-gray-800 dark:text-gray-200 sm:text-2xl">
                                <p className="md:w-1/2 w-full">
                                    let's start by introducing the main features and the website concept.<br />
                                    Salat App let you stay informed on on all Salats time on all next week as you can see in image title.
                                    The tolerance between those, daylight status, Quran verse to read & hear ...
                                </p>
                                <div className="md:w-1/3 w-full min-h-fit">
                                    <img alt="" className="object-cover" src="/metadata/v1.0.0.svg" />
                                </div>

                                <p className="space-y-2">
                                    <h4 className="text-white font-bold w-full ">Hijri Calendar</h4>
                                    <p>
                                        Get full next 7 days <i>Hijri</i> calendar.
                                    </p>
                                    <p><strong>Hijri</strong> & <strong>Gregorian</strong> month expiry percent <i>%</i></p>
                                    <p>
                                        More tips For You :
                                        <ul className="space-y-0 list-disc list-inside">
                                            <li className="ml-[1em]">How much stay to the <strong>day</strong> end</li>
                                            <li className="ml-[1em]">How much stay to the <strong>mounth</strong> end</li>
                                            <li className="ml-[1em]">How much stay to the <strong>week</strong> end</li>
                                        </ul>
                                    </p>
                                </p>


                                <p className="space-y-3">
                                    <h4 className="text-white font-bold w-full ">Quran</h4>
                                    <p>
                                        For the <strong>Quran</strong> section we do tha max for get a clean reactions for various reciters, Play the random verse from many reciters <i className="text-green-500">+5</i> :
                                    </p>
                                    <i>Wait for more</i>
                                    <ul className="space-y-0 list-disc list-inside">
                                        <li className="font-bold ml-[1em]">Mohamed Siddiq al-Minshawi</li>
                                        <li className="font-bold ml-[1em]">AbdulBaset AbdulSamad</li>
                                        <li className="font-bold ml-[1em]">Sa`ud ash-Shuraym</li>
                                        <li className="font-bold ml-[1em]">Hani ar-Rifai</li>
                                        <li className="font-bold ml-[1em]">Mishari Rashid al-`Afasy</li>
                                    </ul>
                                    <p>
                                        <p>
                                            The same random quran verse with many<strong>write style</strong> and <strong>language option</strong>
                                            , so you can here and read tha same verse in  the same time.
                                        </p>
                                        <ul className="space-y-0 list-disc list-inside">
                                            Many Font and write style :
                                            <li className="ml-[1em]">indopak</li>
                                            <li className="ml-[1em]">uthmani</li>
                                            <li className="ml-[1em]">...</li>
                                        </ul>
                                        <ul className="space-y-0 list-disc list-inside">
                                            Other language also available :
                                            <li className="ml-[1em]">English</li>
                                            <li className="ml-[1em]">French</li>
                                            <li className="ml-[1em]">Russian</li>
                                        </ul>
                                    </p>
                                </p>
                            </p>

                        </div>
                    </article>


                </div>


            </div>

        </>
    );
}

export default ChangeLog;
