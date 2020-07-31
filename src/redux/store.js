import { createStore, combineReducers } from 'redux';
import cardsReducer from './cards/reducer';
import { reducer as formReducer } from 'redux-form';
import uiReducer from './ui';
import { devToolsEnhancer } from 'redux-devtools-extension';

const reducer = combineReducers({
    cards: cardsReducer,
    ui: uiReducer,
    form: formReducer,
});

export const store = createStore(reducer, {}, devToolsEnhancer());

export default store;
