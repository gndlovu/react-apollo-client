import * as types from '../constants/ActionTypes';

export const selectCategory = (category: string) => ({ type: types.SELECT_CATEGORY, category });
export const addToFavourites = (joke: any) => ({ type: types.ADD_TO_FAVOURITES, joke });
