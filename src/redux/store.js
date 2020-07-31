import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import uiReducer from './ui';
import cardsReducer from './cards/reducer';
import { saveState } from '../lib/helpers';

const reducer = combineReducers({
    cards: cardsReducer,
    ui: uiReducer,
    form: formReducer,
});

export const store = createStore(reducer, {}, devToolsEnhancer());

store.subscribe(() => saveState({ cardList: store.getState().cards.cardList }));

export default store;
