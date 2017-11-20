import {
  GET_CATEGORIES
} from '../constants';

export function categories(state={}, action){
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
}
