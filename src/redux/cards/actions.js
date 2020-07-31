/**
 * Action creators
 */

import {
    CREATE_CARD,
    EDIT_CARD,
    DELETE_CARD,
    SET_EDITING_CARD,
    CLEAR_EDITING_CARD,
    ORDER_CARDS,
} from './types';

export function createCard(card) {
    return { type: CREATE_CARD, card };
}

export function editCard(card) {
    return { type: EDIT_CARD, card };
}

export function deleteCard(cardId) {
    return { type: DELETE_CARD, cardId };
}

export function setEditingCard(card) {
    return { type: SET_EDITING_CARD, card };
}

export function clearEditingCard() {
    return { type: CLEAR_EDITING_CARD };
}

export function orderBy(order) {
    return { type: ORDER_CARDS, order };
}
