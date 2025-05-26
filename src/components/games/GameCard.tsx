// import React from 'react';
// import { Button } from '../ui/Button';

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const GameCard = ({
  title,
  // description,
  imageUrl,
}: // category,
GameCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        {/* <span className="text-sm text-purple-600 font-semibold">
          {category}
        </span> */}
        <h3 className="text-xl font-bold mt-2 text-center">{title}</h3>
        {/* <p className="text-gray-600 mt-2">{description}</p> */}
        {/* <Button variant="primary" className="mt-4">
          Play Now
        </Button> */}
      </div>
    </div>
  );
};

export default GameCard;
