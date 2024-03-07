import React from 'react';

const Performance = () => {
    return (
        <div className='m-4 p-4 lg:p-10'>
            <div className="mb-6 text-2xl font-bold">Performance</div>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4 flex-none rounded-lg p-4 flex items-start">
                    <div>
                        <div>
                            <p>Today's Low</p>
                            <p>46,930.22</p>
                        </div>
                    </div>
                    <div className="gradient-line">
                    </div>
                    <div>
                        <div>
                            <p>Today's High</p>
                            <p>49,343.83</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex-none rounded-lg p-4 flex items-start">
                    <div>
                        <div>
                            <p>52W Low</p>
                            <p>16,930.22</p>
                        </div>
                    </div>
                    <div className="gradient-line">
                    </div>
                    <div>
                        <div>
                            <p>52W High</p>
                            <p>49,743.83</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 lg:mt-6">
                <p className="mb-2 text-xl font-semibold text-gray-600">Fundamentals</p>
                <div className="mt-2 flex flex-col lg:flex-row xl:flex-row gap-8">
                    <div className="w-full lg:w-1/2">
                        <ul>
                            <li className="flex justify-between items-center py-2 mt-4 mb-4">
                                <span className="text-gray-500">Bitcoin Price</span>
                                <span>$16,815.46</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-gray-300 py-2 mt-4 mb-4">
                                <span className="text-gray-500">24h Low / 24h High</span>
                                <span>$16,382.07 / $16,874.12</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-gray-300 py-2 mt-4 mb-4">
                                <span className="text-gray-500">7d Low / 7d High</span>
                                <span>$16,382.07 / $16,874.12</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-gray-300 py-2 mt-4 mb-4">
                                <span className="text-gray-500">Trading Volume</span>
                                <span>$23,249,202,782</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-gray-300 py-2 mt-4 mb-4">
                                <span className="text-gray-500">Market Cap Rank</span>
                                <span>#1</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-gray-300 py-2">
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-8">
                        <ul>
                            <li className="flex justify-between items-center py-2 mt-4 mb-4">
                                <span className="text-gray-500">Market Cap</span>
                                <span>$323,507,290,047</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-gray-300 py-2 mt-4 mb-4">
                                <span className="text-gray-500">Market Cap Dominance</span>
                                <span>38.343%</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-gray-300 py-2 mt-4 mb-4">
                                <span className="text-gray-500">Volume / Market Cap</span>
                                <span>0.0718</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-gray-300 py-2 mt-4 mb-4">
                                <span className="text-gray-500">All-Time High</span>
                                <span>Value 4</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-gray-300 py-2 mt-4 mb-4">
                                <span className="text-gray-500">All-Time Low</span>
                                <span>Value 5</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-gray-300 py-2 mt-4 mb-4">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Performance;
