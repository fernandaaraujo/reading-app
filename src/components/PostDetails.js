import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost } from '../actions/posts';
import { getPostComments } from '../actions/comments';
import ListComments from './ListComments';
import NotFound from './NotFound';
import Post from './Post';

class PostDetails extends Component {
  componentDidMount() {
    const { posts, match } = this.props;
    const { postId } = match.params;
    const post = posts.length > 0 && posts.find(post => post.id === postId);

    if (post) {
      this.props.getPostComments(post);
      this.props.getPost(post);
    } else {
      this.props.history.push('/page/not-found');      
    }
  }

  render() {
    const { posts, comments, match } = this.props;
    const { postId } = match.params;
    const post = posts.length > 0 && posts.find(post => post.id === postId);

    return (
      <div>
      { post ?
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
        </div> :
        <NotFound />
      }
      </div>
    )
  }
}

const mapStateToProps = ({ post, posts, comments }) => ({ post, posts, comments });
const mapDispatchToProps = { getPostComments, getPost };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));
