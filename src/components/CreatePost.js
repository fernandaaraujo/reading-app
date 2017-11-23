import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize';
import * as actions from '../actions/posts';

class CreatePost extends Component {
  addPost = (event) => {
    const post = serializeForm(event.target, { hash: true });
    const newPost = {
      id: Math.random().toString(36).substr(2, 16) + Math.random().toString(36).substr(2, 16),
      timestamp: new Date().getTime(),
      title: post.title,
      body: post.body,
      author: "User",
      category: post.category,
      voteScore: 0,
      deleted: false,
      commentCount: 0
    };

    this.props.createPost(newPost);
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="b-container">
        <Link to='/' className="container__return fa fa-arrow-left">
          <spam>Back</spam>
        </Link>
        <div className="container__section">
          <form onSubmit={this.addPost} className='create-post-form'>
            <div className='create-post-details'>
              <input type='text' name='title' placeholder='title' defaultValue="" />
              <br/>
              <input type='text' name='body' placeholder='body' defaultValue="" />
              <br/>
              <select name='category' defaultValue={categories[Object.keys(categories)[0]]}>
                {
                  categories.length > 0 && categories.map(category => (
                    <option value={category.value} key={category.name}>{category.name}</option>
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

const mapStateToProps = ({ categories }) => ({ categories });

export default withRouter(connect(mapStateToProps, actions)(CreatePost));
