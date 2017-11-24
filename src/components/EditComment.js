import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize';
import * as actions from '../actions/comments';

class EditComment extends Component {
  changeComment = (event) => {
    const comment = serializeForm(event.target, { hash: true });
    const editedComment = {
      id: this.props.match.params.commentId,
      body: comment.body
    };

    this.props.editComment(editedComment);
    this.props.history.push('/');
  }

  render() {
    const urlCommentId = this.props.match.params.commentId;
    const { comments } = this.props;
    const comment = comments.filter(comment => comment.id === urlCommentId)[0];

    return (
      <div className="b-container">
        <Link to='/' className="container__return fa fa-arrow-left">
          <spam>Back</spam>
        </Link>
        <div className="container__section">
          <form onSubmit={this.changeComment} className='edit-comment-form'>
            <div className='edit-comment-details'>
              <input type='text' name='body' placeholder='body' defaultValue={comment && comment.body} required />
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

const mapStateToProps = ({ post, comments }) => ({ post, comments });

export default withRouter(connect(mapStateToProps, actions)(EditComment));
