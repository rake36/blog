import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

    // lifecycle events
    componentWillUpdate() {
        console.log("PostsIndex: willUpdate")
    }

    componentWillMount() {
        console.log("PostsIndex: willMount")
    }

    componentDidMount() {
        // Runs after component initializes in the Dom
        console.log("PostsIndex: didMount")
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>{post.title}</li>
            );
        });
    }

    render() {
        // console.log(this.props.posts);
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

// shorthand for mapDispatchToProps...
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);