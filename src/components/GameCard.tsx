import React from 'react';

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const GameCard = ({ title, description, imageUrl, category }: GameCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-sm text-purple-600 font-semibold">{category}</span>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default GameCard;