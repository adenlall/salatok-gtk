function SlideDiv() {

    return (
        <>
            <div className="lg:w-[40%] w-full shadow-xl rounded-lg" style={{ background: 'url("https://i.redd.it/5rvq4jod8a4z.jpg") center center / cover ', backgroundRepeat: 'no-repeat' }} >
                <div className="flex flex-col h-full items-center lg:py-4 py-12 justify-between rounded-lg text-slate-100" style={{ background: 'linear-gradient(181deg, black, transparent)' }} >
                    <div className="flex flex-col items-center justify-center pt-8">
                        <h1 className=" font-extrabold text-4xl mb-2"></h1>
                        <p className=" font-light text-2xl"></p>
                    </div>
                    <div className="">
                        <div className=" font-bold text-xl mb-2 bg-gray-800 p-2 rounded-lg "></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SlideDiv;
