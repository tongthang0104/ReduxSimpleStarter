import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router'
class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        List of blog Posts
      </div>
    );
  }

}

// Use this shortcut no need to add DispatchMAP...
export default connect(null, {fetchPosts})(PostsIndex);
