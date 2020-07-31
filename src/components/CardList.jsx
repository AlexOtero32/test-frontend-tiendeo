import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const CardList = (props) => {
    console.log(props.cards);

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

const mapStateToProps = (state) => ({
    cards: state.cards,
});

export default connect(mapStateToProps, null)(CardList);
