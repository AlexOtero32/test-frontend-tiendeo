import React from 'react';

const Card = ({ titulo, descripcion, url }) => (
    <div className="card">
        <img
            className="w-full"
            src={url || 'https://placehold.it/400x200'}
            alt={titulo}
        />
        <div className="px-6 py-4 w-full">
            <div className="font-bold text-xl mb-2 text-gray-600">{titulo}</div>
            <p className="text-gray-700 text-base">{descripcion}</p>
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
