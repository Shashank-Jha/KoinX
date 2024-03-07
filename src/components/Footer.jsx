import React from 'react'
import { useEffect, useState } from 'react'
import CardCarousel from './CardCarousel'

const Footer = () => {
    let [trendingData, setTrendingData] = useState([]);
    function fetchData() {
        const API = `https://api.coingecko.com/api/v3/search/trending`;
        fetch(API).then(res => res.json()).then(data => {
            console.log(data.coins)
            setTrendingData(data.coins);
        });
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <div className="m-4">
                <h1 className="font-bold text-2xl">You Also May Like</h1>
                <CardCarousel cards={trendingData} />
            </div>
            <div className="m-4">
                <h1 className="font-bold text-2xl">Trending Coins</h1>
                <CardCarousel cards={trendingData} />
            </div>
        </div>
    )
}

export default Footer