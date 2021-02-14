import * as types from '../constants/ActionTypes';

export const selectCategory = (category: string) => ({ type: types.SELECT_CATEGORY, category });
