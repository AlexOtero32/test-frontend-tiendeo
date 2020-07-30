import React from 'react';

const Card = ({ title, description, image }) => (
    <div className="card">
        <img
            className="w-full"
            src={image || 'https://placehold.it/400x200'}
            alt={title}
        />
        <div className="px-6 py-4 w-full">
            <div className="font-bold text-xl mb-2 text-gray-600">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #winter
            </span>
        </div>
    </div>
);

export default Card;
