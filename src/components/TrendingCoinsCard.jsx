import React from 'react'
import { useState, useEffect } from 'react';
import Badge from './Badge';

const TrendingCoinsCard = () => {
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
    <div className="bg-white my-5 pt-12 pb-16 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl ">
      <h1 className='font-bold text-xl mb-5'>Trending Coins (24h)</h1>
      {trendingData.slice(0, 3).map((data, index) => (
        <div className='flex my-4 gap-3 justify-between items-center' key={index}>
          <div className='flex gap-5 items-center'>
            <img src={data.item.small} alt={data.item.name} />
            <span>{data.item.name} ({data.item.symbol})</span>
          </div>
          <div>
            <Badge data={parseFloat(data.item.data.price_change_percentage_24h.usd).toFixed(1)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrendingCoinsCard;