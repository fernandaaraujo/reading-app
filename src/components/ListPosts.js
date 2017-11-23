import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/posts';
import Post from './Post';

class ListPosts extends Component {
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

  getCategoryPosts() {
    const { posts, category } = this.props;
    return category ? posts.filter(post => post.category === category) : posts;
  }

  render() {
    const { sortPosts } = this.props;
    const posts = this.getCategoryPosts();

    return (
      <div className="b-container">
        <div className="container__posts">
          <spam className="item__sort-option">Sort option</spam>
          <select id='vote-score-selector' name='voteScore' onChange={this.sortData} value={sortPosts.sort}>
            <option value='SORT_VOTESCORE_ASC'>More votes</option>
            <option value='SORT_VOTESCORE_DESC'>Less votes</option>
            <option value='SORT_TIMESTAMP_ASC'>Latest</option>
            <option value='SORT_TIMESTAMP_DESC'>Oldest</option>
          </select>
          <ul className='post-list'>
            { posts.map((post) => (
              <li key={post.id}>
                <Post post={post} isDetail={false} />
              </li>
            ))}
          </ul>
        </div>
        <div className="posts-create">
          <Link to='/posts/create'><button className="create-item">Create post</button></Link>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ posts, sortPosts }) => ({ posts, sortPosts });

export default withRouter(connect(mapStateToProps, actions)(ListPosts));
