import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize';
import * as actions from '../actions/posts';
import * as api from '../utils/ReadableAPI';

class CreateComment extends Component {
  addComment = (event) => {
    const comment = serializeForm(event.target, { hash: true });

    api.createComment({
      id: Math.random().toString(36).substr(2, 16) + Math.random().toString(36).substr(2, 16),
      timestamp: new Date().getTime(),
      parentId: this.props.post.id,
      body: comment.body,
      author: "User",
      voteScore: 0
    }).then(comment => {
      this.props.createComment(comment);
    });
  }

  render() {
    return (
      <div className="b-container">
        <Link to='/' className="container__return fa fa-arrow-left">
          <spam>Back</spam>
        </Link>
        <div className="container__section">
          <form onSubmit={this.addComment} className='create-comment-form'>
            <div className='create-comment-details'>
              <input type='text' name='body' placeholder='body' defaultValue="" />
              <br/>
              <div className="comments-save">
                <button className="save-item">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  const { post, comments } = state;
  return {
    post,
    comments
  };
};

export default withRouter(connect(mapStateToProps, actions)(CreateComment));