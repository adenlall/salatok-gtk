function InformUser() {
    return (
        <>
            <div className="lg:w-1/2 w-full shadow-xl flex flex-col  justify-between items-center p-4 py-8 rounded-lg bg-slate-100 dark:bg-gray-800 dark:text-slate-100 text-gray-800">
                <h1 className="text-3xl font-extrabold">Welcome there</h1>
                <div className="flex flex-row items-center space-y-6 p-4">
                    <img className="w-28 h-28 rounded-2xl" alt="adblocker" src="https://e7.pngegg.com/pngimages/268/71/png-clipart-adblock-plus-web-browser-ad-blocking-computer-icons-opera-hand-rectangle.png" />
                    <div className="flex flex-col p-4">
                        <header className="text-2xl font-bold">We could not determine your location maybe because of the ad blocker or the browser itself, its ok, but you shoud select your location manually, or whitelist the website in your adblocker setting; we dont track you or show you any ads.</header><button className="badge badge-accent hover:text-black badge-outline">more info</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InformUser;
