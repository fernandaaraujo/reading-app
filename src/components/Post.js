import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { updatePostVotes, deletePost } from '../actions/posts';
import { getPostComments } from '../actions/comments';

class Post extends Component {
  componentDidMount() {
    const { post, getPostComments } = this.props;
    getPostComments(post);
  }

  getPostFromUrl() {
    const { posts } = this.props;
    const postId = this.props.match.params.postId;
    return posts.filter(post => post.id === postId)[0];
  }

  render() {
    const { post, comments, isDetail, deletePost, updatePostVotes } = this.props;

    const actualPost = isDetail ? this.getPostFromUrl() : post;
    const commentNumber = comments.length;

    return (
      <div className="b-container">
        <div className="post-body">
          <p>{'Title: ' + actualPost.title}</p>
          <p>{'Body: ' + actualPost.body}</p>
          <p>{'timestamp: ' + new Date(actualPost.timestamp).toLocaleString()}</p>
          <p>{'Vote score: ' + actualPost.voteScore}</p>
          <p>{'Author: ' + actualPost.author}</p>
          { isDetail &&
            <p>{'comments number: ' + commentNumber}</p>
          }
        </div>
        <div className='post-options'>
          { !isDetail &&
            <Link to={`/posts/${actualPost.id}`}><button className="fa fa-search"></button></Link>
          }
          <Link to={`/posts/${actualPost.id}/edit`}><button className='fa fa-pencil'></button></Link>
          <button className='fa fa-thumbs-o-up' onClick={()=>updatePostVotes(actualPost, 'upVote')}></button>
          <button className='fa fa-thumbs-o-down' onClick={()=>updatePostVotes(actualPost, 'downVote')}></button>
          <button className='fa fa-trash-o' onClick={()=>deletePost(actualPost)}></button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { posts, comments } = state;
  return {
    posts,
    comments
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updatePostVotes: (post, option) => dispatch(updatePostVotes(post, option)),
    deletePost: (post) => dispatch(deletePost(post)),
    getPostComments: (post) => dispatch(getPostComments(post))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
