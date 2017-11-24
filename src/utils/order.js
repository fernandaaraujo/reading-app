import {
  SORT_VOTESCORE_ASC,
  SORT_VOTESCORE_DESC,
  SORT_TIMESTAMP_ASC,
  SORT_TIMESTAMP_DESC
} from '../constants';

import orderBy from 'lodash.orderby';

export const orderData = (items, sortType) => {
  switch (sortType) {
    case SORT_VOTESCORE_DESC:
      return orderBy(items, 'voteScore', 'asc');

    case SORT_VOTESCORE_ASC:
      return orderBy(items, 'voteScore', 'desc');

    case SORT_TIMESTAMP_DESC:
      return orderBy(items, 'timestamp', 'asc');

    case SORT_TIMESTAMP_ASC:
      return orderBy(items, 'timestamp', 'desc');
  }
}
