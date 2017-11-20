import * as API from '../utils/ReadableAPI'

import {
  GET_CATEGORIES
} from '../constants';

export function getCategories() {
  return dispatch => {
    API.getCategories().then(categories => {
      dispatch({
        type: GET_CATEGORIES,
        categories
      })
    })
  }
}
