import React, { useState, useEffect } from 'react';
import Badge from './Badge';

const CardCarousel = ({ cards }) => {
  const [start, setStart] = useState(0);
  const [cardWidth, setCardWidth] = useState('full');
  const [cardsPerSlide, setCardsPerSlide] = useState(1);

  const updateDimensions = () => {
    if (window.innerWidth < 768) {
      setCardWidth('full');
      setCardsPerSlide(1);
    } else {
      setCardWidth('64');
      setCardsPerSlide(5);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleClickRight = () => {
    setStart((prev) => Math.min(prev + 1, cards.length - cardsPerSlide));
  };

  const handleClickLeft = () => {
    setStart((prev) => Math.max(prev - 1, 0));
  };

  const cardsToDisplay = cards
    .filter(card => !(card.item.data.price.includes("sub")))
    .slice(start, start + cardsPerSlide);

  return (
    <div className="flex h-100 my-10 justify-center items-center space-x-4">
      <button
        className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
        onClick={handleClickLeft}
        disabled={start === 0}
      >
        &lt;
      </button>
      <div className="flex items-center justify-center space-x-4 overflow-hidden">
        {cardsToDisplay.map((card) => (
          <div key={card.item.coin_id} className={`h-48 w-${cardWidth} bg-white shadow-md rounded-lg p-4 pr-10 m-5`}>
            <div className='flex gap-5 my-2 h-8 w-8 items-center justify-between'>
              <img src={card.item.small} />
              <h6 className="text-sm w-12">{card.item.name}</h6>
              <Badge data={parseFloat(card.item.data.price_change_percentage_24h.usd).toFixed(1)} />
            </div>
            <p className="text-gray-700 font-bold text-2xl">{(card.item.data.price)}</p>
            <img className="ml-8 my-4" src={card.item.data.sparkline} />
          </div>
        ))}
      </div>
      <button
        className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
        onClick={handleClickRight}
        disabled={start === cards.length - cardsPerSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default CardCarousel;
