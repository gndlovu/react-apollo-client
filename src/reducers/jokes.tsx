import * as types from '../constants/ActionTypes';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux';

function activeCategory(state = '', action: any) {
    switch (action.type) {
        case types.SELECT_CATEGORY:
            console.info('%cCategory changed: ' + action.category, 'color:red; font-weight:bold;');
            return action.category;
        default:
            return state;
    }
}

function favouriteJokes(state = List(), action: any) {
    switch (action.type) {
        case types.ADD_TO_FAVOURITES:
            console.info('%cAdding joke to favourites: ' + action.joke.value, 'color:red; font-weight:bold;');
            return state.push(Map({
                id: action.joke.id,
                value: action.joke.value
            }));
        default:
            return state;
    }
}

export default combineReducers({
    activeCategory,
    favouriteJokes
});