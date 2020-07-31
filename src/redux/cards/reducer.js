import { v4 as uuid } from 'uuid';
import {
    CREATE_CARD,
    EDIT_CARD,
    DELETE_CARD,
    SET_EDITING_CARD,
    CLEAR_EDITING_CARD,
    ORDER_CARDS,
} from './types';
import { getStateFromLocalStorage, orderCardsBy } from '../../lib/helpers';

const stateFromLocalStorage = getStateFromLocalStorage();

const initialState = {
    cardList: stateFromLocalStorage ? stateFromLocalStorage.cardList : [],
    editingCard: {},
    orderBy: stateFromLocalStorage.orderBy
        ? stateFromLocalStorage.orderBy
        : 'newest',
};

export default (state = initialState, action) => {
    let ordered = [];
    switch (action.type) {
        case CREATE_CARD:
            const card = {
                ...action.card,
                id: uuid(),
                fecha: new Date(),
            };

            ordered = orderCardsBy(state.orderBy, [...state.cardList, card]);

            return {
                cardList: ordered,
                editingCard: state.editingCard,
                orderBy: state.orderBy,
            };

        case EDIT_CARD:
            const cardList = state.cardList.map(function (card) {
                if (card.id === action.card.id) {
                    Object.assign(card, action.card);
                }
                return card;
            });

            ordered = orderCardsBy(state.orderBy, cardList);

            return {
                ...state,
                cardList: ordered,
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
            return { ...state, editingCard: action.card };

        case CLEAR_EDITING_CARD:
            return { ...state, editingCard: {} };

        case ORDER_CARDS:
            return {
                ...state,
                cardList: orderCardsBy(action.order, state.cardList),
                orderBy: action.order,
            };

        default:
            return state;
    }
};
