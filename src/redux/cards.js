import { v4 as uuid } from 'uuid';

export const CREATE_CARD = 'create_card';
export const EDIT_CARD = 'edit_card';
export const DELETE_CARD = 'delete_card';

const initialState = {
    cards: [1, 2, 3],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CARD:
            const card = {
                ...action.card,
                id: uuid(),
                fecha: new Date(),
            };

            state.cards.push(card);

            return state;
        case EDIT_CARD:
            return state;
        case DELETE_CARD:
            return state;
        default:
            return state;
    }
};
