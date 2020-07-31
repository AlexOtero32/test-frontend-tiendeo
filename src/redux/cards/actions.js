/**
 * Action creators
 */

import { CREATE_CARD, EDIT_CARD, DELETE_CARD } from './types';

export function createCard(card) {
    return { type: CREATE_CARD, card };
}

export function editCard(card) {
    return { type: EDIT_CARD, card };
}

export function deleteCard(cardId) {
    return { type: DELETE_CARD, cardId };
}
