import React from 'react';

import Card from './Card';

const CardList = () => {
    return (
        <main className="container grid-container">
            <Card
                titulo="Esto es una tarjeta"
                descripcion="lorem ipsum dolor sit amet"
            />
            <Card
                titulo="Esto es una tarjeta"
                descripcion="lorem ipsum dolor sit amet"
            />
            <Card
                titulo="Esto es una tarjeta"
                descripcion="lorem ipsum dolor sit amet"
            />
            <Card
                titulo="Esto es una tarjeta"
                descripcion="lorem ipsum dolor sit amet"
            />
            <Card
                titulo="Esto es una tarjeta"
                descripcion="lorem ipsum dolor sit amet"
            />
        </main>
    );
};

export default CardList;
