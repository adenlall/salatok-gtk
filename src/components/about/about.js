import { useEffect } from "react";

function About() {

    useEffect(() => {
        document.title = "About Salatok.App - Muslim Day Manager";
    }, []);

    return (
        <>
            <div className='p-0 m-0 bg-white dark:bg-gray-900'>
                <div className="lg:w-full m-0 lg:p-40 p-20 w-full flex md:flex-row flex-col items-center  justify-center  p-4 rounded-lg bg-white dark:bg-gray-900 dark:text-slate-100 text-gray-800">
                    <div className="p-4 flex flex-col items-center">
                        <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            YOUR DONATION MATTER.
                        </p>
                        <p className="text-center mb-32 text-xl font-normal text-gray-500">
                            as you can see, this project has free domain / hosting thanks to free plan of <a href="https://vercel.com" className="text-green-400">Vercel</a>.
                            We need financial and technical support to keep this project alive.
                            if you interested you can visit our <a href="https://github.com/adenlall/salatok" className="text-green-400">github repo</a>.
                        </p>
                    </div>
                </div>
            <div className='p-0 m-0 bg-white dark:bg-gray-900'>
                <div className="lg:w-full  w-full  flex md:flex-row flex-col items-center  justify-center  p-4 rounded-lg bg-white dark:bg-gray-900 dark:text-slate-100 text-gray-800">
                    <div className="p-4 flex flex-col items-center">
                        <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            From students to Your daily life.
                        </p>
                        <p className="text-center mb-32 text-xl font-normal text-gray-500">
                            this project was developed maintained from high school students in Sidi Bennour - Morocco, under free license GPL-V3.0 that's mean you can freely edit and redistribute this project.
                            Until now this project still supported by <a href="https://github.com/adenlall" className="text-green-400">adenlall</a>.
                        </p>
                        
                    </div>
                </div>
            </div>

                <div className="lg:w-full w-full flex md:flex-row flex-col items-center  justify-center  p-4 rounded-lg bg-slate-100 dark:bg-gray-800 dark:text-slate-100 text-gray-800">
                    <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
                        <div className="mb-16 text-center">
                            <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">
                                Features
                            </h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                A better way to live
                            </p>
                        </div>
                        <div className="flex flex-wrap my-12 dark:text-white">
                            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                                <div className="flex items-center mb-6">
                                    <svg width="20" height="20" fill="currentColor" className="h-6 w-6 text-cyan-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">
                                        Open Source
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                                    We are proud to be an open source platform, witch means our code is freely available for anyone to view, modify, and contribute to. 
                                </p>
                            </div>
                            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                                <div className="flex items-center mb-6">
                                    <svg width="20" height="20" fill="currentColor" className="h-6 w-6 text-cyan-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">
                                        Free Lisence
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                                    We operate under GPL-V3.0 a free license that allowing users to utilise our service without any restriction.
                                </p>
                            </div>
                            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                                <div className="flex items-center mb-6">
                                    <svg width="20" height="20" fill="currentColor" className="h-6 w-6 text-cyan-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">
                                        Your Privacy Matter
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                                    We prioritize user privacy by ensuring that we do not log any user data on our server even your ip adress.
                                </p>
                            </div>
                            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                                <div className="flex items-center mb-6">
                                    <svg width="20" height="20" fill="currentColor" className="h-6 w-6 text-cyan-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">
                                        Ad-Free
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                                    We are committed to delivering an ad-free experience allowing you to navigate our website without any interception or trackers.
                                </p>
                            </div>
                            <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                                <div className="flex items-center mb-6">
                                    <svg width="20" height="20" fill="currentColor" className="h-6 w-6 text-cyan-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">
                                        All in one
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                                    Here you can find all what you need as Muslim, Pray time, Quran and Hijri Calendar.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                                <div className="flex items-center mb-6">
                                    <svg width="20" height="20" fill="currentColor" className="h-6 w-6 text-cyan-400" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">
                                        Anywhere Everywhere.
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
									we aren't limited to any specifics areas or big cities, because our service based on lat/long thanks to praytimes.org you can get salat times every where even in the middle of ocean.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
