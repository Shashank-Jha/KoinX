import React from 'react';

const Sentiments = () => {
    return (
        <div className="p-4 lg:p-8">
            <div className="mb-4 text-2xl font-bold">Sentiment</div>
            <div className="mb-2 text-xl text-gray-600 font-semibold">Key Events</div>
            <div className="flex flex-col lg:flex-row overflow-x-auto lg:overflow-visible">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4 flex-none bg-blue-100 rounded-lg p-4 flex items-start">
                    <div className="rounded-full bg-blue-500 h-12 w-12 p-4 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-newspaper">
                            <path
                                d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                            <path d="M18 14h-8" />
                            <path d="M15 18h-5" />
                            <path d="M10 6h8v4h-8V6Z" />
                        </svg>
                    </div>
                    <div>
                        <div className="mb-2">
                            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos
                                voluptatum
                                a voluptas?</p>
                        </div>
                        <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                            exercitationem
                            animi ad. Soluta, libero beatae, asperiores nisi iste veniam laboriosam, non blanditiis quia
                            unde
                            quas! Tempora eligendi ut ab doloremque.</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex-none bg-green-100 rounded-lg p-4 flex items-start">
                    <div className="rounded-full p-4 bg-green-500 h-12 w-12 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-trending-up">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                            <polyline points="16 7 22 7 22 13" />
                        </svg>
                    </div>
                    <div>
                        <div className="mb-2">
                            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos
                                voluptatum
                                a voluptas?</p>
                        </div>
                        <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                            exercitationem
                            animi ad. Soluta, libero beatae, asperiores nisi iste veniam laboriosam, non blanditiis quia
                            unde
                            quas! Tempora eligendi ut ab doloremque.</p>
                    </div>
                </div>
            </div>
            <div className="mb-2 mt-4 text-xl text-gray-600 font-semibold">Analyst Estimates</div>
            <div className="flex justify-between items-center">
                <div className="relative rounded-full bg-green-100 h-32 w-32 flex items-center justify-center mr-4">
                    <p className="text-green-500 text-4xl p-8 font-semibold">76%</p>
                </div>
                <div className="w-full h-full flex flex-col justify-between text-center text-xs text-slate-500 font-medium h-8">
                    <div className='flex items-center gap-5'><span>Buy </span><div className="bg-green-500 my-5 h-2" style={{ width: '76%' }}></div><span>76%</span></div>
                    <div className='flex items-center gap-5'><span>Hold </span><div className="bg-gray-300 my-5 h-2" style={{ width: '8%' }}></div><span>8%</span></div>
                    <div className='flex items-center gap-5'><span>Sell </span><div className="bg-red-500 text-white my-5 h-2" style={{ width: '16%' }}></div><span>16%</span></div>
                </div>
            </div>
        </div>
    );
};

export default Sentiments;
