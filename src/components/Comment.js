import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { updateCommentVotes, deleteComment } from '../actions/comments';

class Comment extends Component {
  render() {
    const { comment, deleteComment, updateCommentVotes } = this.props;

    return (
      <div>
        <p>{`Body: ${comment.body}`}</p>
        <p>{`Timestamp: ${new Date(comment.timestamp).toLocaleString()}`}</p>
        <p>{`Vote score: ${comment.voteScore}`}</p>
        <p>{`Author: ${comment.author}`}</p>
        <div className='inner'>
          <Link to={`/comments/${comment.id}/edit`}><button className='fa fa-pencil'></button></Link>
          <button className='fa fa-thumbs-o-up' onClick={()=>updateCommentVotes(comment, 'upVote')}></button>
          <button className='fa fa-thumbs-o-down' onClick={()=>updateCommentVotes(comment, 'downVote')}></button>
          <button className='fa fa-trash-o' onClick={()=>deleteComment(comment)}></button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ comments }) => ({ comments });
const mapDispatchToProps = { updateCommentVotes, deleteComment };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment));
