import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import { getCategories } from './actions/categories';
import { getPosts } from './actions/posts';

import HomePage from './components/HomePage';
import CategoryDetails from './components/CategoryDetails';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostDetails from './components/PostDetails';
import CreateComment from './components/CreateComment';
import EditComment from './components/EditComment';
import NotFound from './components/NotFound';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const { categories, posts } = this.props;

    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' render={() => (
            <HomePage
              categories={categories}
              posts={posts}
            />
          )} />
          <Route exact path={'/:category'} component={CategoryDetails} />
          <Route exact path={'/posts/create'} component={CreatePost} />
          <Route exact path={'/:category/:postId'} component={PostDetails} />
          <Route exact path={'/:category/:postId/edit'} component={EditPost} />
          <Route exact path={'/comments/create'} component={CreateComment} />
          <Route exact path={'/comments/:commentId/edit'} component={EditComment} />
          <Route exact path={'/page/not-found'} component={NotFound} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { categories, posts } = state
  return {
    categories,
    posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
    getPosts: () => dispatch(getPosts())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
