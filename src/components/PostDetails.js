import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost } from '../actions/posts';
import { getPostComments } from '../actions/comments';
import ListComments from './ListComments';
import Post from './Post';

class PostDetails extends Component {
  componentDidMount() {
    const idPost = this.props.match.params.postId;
    const post = this.props.posts.filter(post => post.id === idPost)[0];
    
    this.props.getPostComments(post);
    this.props.getPost(post);
  }

  render() {
    const { posts, comments } = this.props;
    const idPost = this.props.match.params.postId;
    const post = posts.filter(post => post.id === idPost)[0];

    return (
      <div>
        <Link to='/' className="container__return fa fa-arrow-left">
          <spam>Back</spam>
        </Link>
        <div className="container__section">
          <Post post={post} isDetail={true} />
          { comments.length > 0 ?
            <ListComments
              comments={comments}
              post={post}
            /> :
            <p>No comments to show.</p>
          }
        </div>
        <div className="comments-create">
          <Link to='/comments/create'><button className="create-item">Create comment</button></Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { post, posts, comments } = state;
  return {
    post,
    posts,
    comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPostComments: (post) => dispatch(getPostComments(post)),
    getPost: (post) => dispatch(getPost(post))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));