import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ListPosts from './ListPosts';

class CategoryDetails extends Component {
  render() {
    const { posts } = this.props;
    const urlCategoryName = this.props.match.params.category;

    return (
      <div className="b-container">
        <Link to='/' className="container__return fa fa-arrow-left">
          <spam>Back</spam>  
        </Link>
        <div className="container__section">
          <div className="category-datails__details">
            <div className="category-datails__name">
              {urlCategoryName}
            </div>
            <ListPosts posts={posts} category={urlCategoryName} />
          </div>
          <div className="category-datails__add-post">
            <Link to='/post/create' />
          </div>
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

export default withRouter(connect(mapStateToProps)(CategoryDetails));
