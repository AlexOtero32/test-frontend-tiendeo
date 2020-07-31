import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const CardList = (props) => {
    return (
        <main className="container grid-container">
            {props.cards.map((card) => {
                return (
                    <Card
                        key={card.id}
                        id={card.id}
                        titulo={card.titulo}
                        descripcion={card.descripcion}
                        url={card.url}
                    />
                );
            })}
        </main>
    );
};

const mapStateToProps = (state) => ({
    cards: state.cards.cardList,
});

export default connect(mapStateToProps, null)(CardList);
