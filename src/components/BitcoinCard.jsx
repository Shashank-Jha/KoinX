import React from 'react'
import { useEffect, useState } from 'react';
import Badge from './Badge';
import BigBadge from './BigBadge';

const BitcoinCard = () => {
    let [btcData, setBtcData] = useState({});
    function fetchData() {
        const API = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`;
        fetch(API).then(res => res.json()).then(data => {
            console.log(data)
            setBtcData(data.bitcoin);
        });
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <>
            {/* {JSON.stringify(btcData)} */}
            <div className="flex gap-2 items-center border-bottom py-4 px-4 pb-4">
                <img width="100px" height="100px" src="https://bitcoin.org/img/icons/logotop.svg?1706112497" alt="BTC" title="BTC" />
                <h3 className='text-center text-grey-500'>BTC</h3>
                <span className='pl-4'><BigBadge /></span>
            </div>
            <div className='m-4'>
                <div className='flex items-center'>
                    {btcData != {} && <h1 className='text-3xl font-bold text-slate-800 pr-4'>${btcData?.inr}</h1>}
                    <Badge data="2.51" />
                    <small className='text-slate-500'>(24H)</small>
                </div>
                {btcData != {} && <h3 className='text-slate-800'>₹{btcData?.usd}</h3>}
            </div>
        </>
    )
}

export default BitcoinCard