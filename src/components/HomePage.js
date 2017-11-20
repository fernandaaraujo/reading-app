import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListCategories from './ListCategories';
import ListPosts from './ListPosts';

class HomePage extends Component {
  render() {
    const { categories, posts } = this.props;

    return (
      <div className="b-container">
        <div className="home-title">
          <h1>Readable App</h1>
        </div>
        <div className="home-item">
          <h2 className="home-item__title">Categories</h2>
          { categories.length > 0 ?
            <ListCategories
              categories={categories}
            /> :
            <p>No categories to show.</p>
          }
        </div>
        <div className="home-item">
          <h2 className="home-item__title">Posts</h2>
          { posts.length > 0 ?
            <ListPosts
              posts={posts}
            /> :
            <p>No posts to show.</p>
          }
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  const { categories, posts } = state;
  return {
    categories,
    posts
  };
};

export default withRouter(connect(mapStateToProps)(HomePage));
