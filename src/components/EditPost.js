import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize';
import * as actions from '../actions/posts';

class EditPost extends Component {
  changePost = (event) => {
    const post = serializeForm(event.target, { hash: true });
    const editedPost = {
      id: this.props.match.params.postId,
      title: post.title,
      body: post.body,
      category: post.category
    };

    this.props.editPost(editedPost);
    this.props.history.push('/');
  }

  render() {
    const urlPostId = this.props.match.params.postId;
    const { categories, posts } = this.props;
    const post = posts.filter(post => post.id === urlPostId)[0];

    return (
      <div className="b-container">
        <Link to='/' className="container__return fa fa-arrow-left">
          <spam>Back</spam>
        </Link>
        <div className="container__section">
          <form onSubmit={this.changePost} className='edit-post-form'>
            <div className='edit-post-details'>
              <input type='text' name='title' placeholder='title' defaultValue={post && post.title}/>
              <br/>
              <input type='text' name='body' placeholder='body' defaultValue={post && post.body}/>
              <br/>
              <select name='category' defaultValue={post ? post.category : Object.keys(categories)[0] }>
                {
                  categories.map(category => (
                    <option value={category.name} key={shortid.generate()}>{category.name}</option>
                  ))
                }
              </select>
              <div className="posts-save">
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
  const { categories, posts } = state;
  return {
    categories,
    posts
  };
};

export default withRouter(connect(mapStateToProps, actions)(EditPost));
