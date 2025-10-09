import React from 'react';
import { Download, Star } from 'lucide-react';
import CardInfo from './CardInfo';
import { NavLink, useNavigate } from 'react-router';

const Card = ({ card }) => {
  const { image, title, downloads, ratingAvg } = card;
  const navigate = useNavigate();
  const cardClicker = () => {
    navigate(`/Apps/${card.id}`, {state: {card}})
  };

  return (
    <div
      onClick={cardClicker}
      className="w-full sm:w-[260px] md:w-[280px] lg:w-[300px] 
                 bg-white rounded-xl shadow-lg p-4 
                 transform transition-all duration-300 
                 hover:-translate-y-3 hover:shadow-2xl 
                 cursor-pointer group"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-lg 
                     transition-transform duration-300 group-hover:scale-105"
          src={image}
          alt={title}
        />
      </div>

      <h2
        className="text-base sm:text-lg md:text-xl font-semibold my-3 
                   text-gray-800 group-hover:text-[#00D390] 
                   transition-colors duration-300"
      >
        {title}
      </h2>

      <div className="flex justify-between items-center text-xs sm:text-sm md:text-base">
        <div className="text-[#00D390] flex items-center gap-1 font-medium">
          <Download className="w-4 h-4 sm:w-5 sm:h-5" /> {downloads}
        </div>
        <div className="text-[#FFD700] flex items-center gap-1 font-medium">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFD700]" /> {ratingAvg}
        </div>
      </div>
    </div>
  );
};

export default Card;
