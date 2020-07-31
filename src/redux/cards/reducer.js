import { v4 as uuid } from 'uuid';
import {
    CREATE_CARD,
    EDIT_CARD,
    DELETE_CARD,
    SET_EDITING_CARD,
    CLEAR_EDITING_CARD,
} from './types';

const initialState = {
    cardList: [],
    editingCard: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CARD:
            const card = {
                ...action.card,
                id: uuid(),
                fecha: new Date(),
            };

            return {
                cardList: [...state.cardList, card],
                editingCard: state.editingCard,
            };

        case EDIT_CARD:
            const cardList = state.cardList.map(function (card) {
                if (card.id === action.card.id) {
                    Object.assign(card, action.card);
                }
                return card;
            });

            return {
                cardList,
                editingCard: {},
            };

        case DELETE_CARD:
            return {
                cardList: state.cardList.filter(
                    (card) => card.id !== action.cardId
                ),
                editingCard: state.editingCard,
            };

        case SET_EDITING_CARD:
            return { cardList: state.cardList, editingCard: action.card };

        case CLEAR_EDITING_CARD:
            return { cardList: state.cardList, editingCard: {} };

        default:
            return state;
    }
};
