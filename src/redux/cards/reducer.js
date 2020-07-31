import { v4 as uuid } from 'uuid';
import { CREATE_CARD, EDIT_CARD, DELETE_CARD } from './types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CARD:
            const card = {
                ...action.card,
                id: uuid(),
                fecha: new Date(),
            };

            return [...state, card];
        case EDIT_CARD:
            return state;
        case DELETE_CARD:
            return state;
        default:
            return state;
    }
};
