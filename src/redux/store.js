import { createStore, combineReducers } from 'redux';
import cardsReducer from './cards';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
    cards: cardsReducer,
    form: formReducer,
});

export const store = createStore(reducer);

export default store;
