import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/comments';
import Comment from './Comment';

class ListComments extends Component {
  sortData = (event) => {
    const option = event.target.value;

    switch(option) {
      case 'SORT_TIMESTAMP_ASC':
        this.props.sortTimestampAsc();
        break;

      case 'SORT_TIMESTAMP_DESC':
        this.props.sortTimestampDesc();
        break;

      case 'SORT_VOTESCORE_DESC':
        this.props.sortVotescoreDesc();
        break;

      default:
        this.props.sortVotescoreAsc();
        break;
    }
  }

  render() {
    const { comments, sortComments } = this.props;

    return (
      <div className="b-container">
        <div className="container__comments">
          <h2 className="home-item__title">Comments</h2>
          <spam className="item__sort-option">Sort option</spam>
          <select id='vote-score-selector' name='voteScore' onChange={this.sortData} value={sortComments.sort}>
            <option value='SORT_VOTESCORE_ASC'>More votes</option>
            <option value='SORT_VOTESCORE_DESC'>Less votes</option>
            <option value='SORT_TIMESTAMP_ASC'>Latest</option>
            <option value='SORT_TIMESTAMP_DESC'>Oldest</option>
          </select>
          <ul className='comment-list'>
            { comments.map((comment) => (
              <li key={comment.id}>
                <Comment comment={comment} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  const { comments, sortComments } = state;
  return {
    comments,
    sortComments
  };
};

export default withRouter(connect(mapStateToProps, actions)(ListComments));
