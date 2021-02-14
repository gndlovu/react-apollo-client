import * as types from '../constants/ActionTypes';
// import { List, Map } from 'immutable';
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

export default combineReducers({
    activeCategory,
});