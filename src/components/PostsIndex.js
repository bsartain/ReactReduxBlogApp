import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchPosts, getPost } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';
 

class PostsIndex extends Component {
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    displayPosts(){
        return _.map(this.props.postsList, post => {
            return (
                <a href="#" key={ post.id } onClick={() => this.getPostFunction(post)} className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{ post.title }</h5>
                    </div>
                    <p className="mb-1">{ post.content }</p>
                    <small>Categories: { post.categories }</small>
                </a>
            )
        })
    }

    getPostFunction(post){
        this.props.getPost(post);
        this.props.history.push(`/posts/${post.id}`);
    }

    render() {
        return (
            <div className="row">
                <div className="navigation-links">
                    <h3>Posts</h3>
                    <Link className="btn btn-primary ml-auto" to="/posts/new">Add a post</Link>
                </div>
                <ul className="list-group">
                    {this.displayPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        postsList: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts, getPost })(PostsIndex)
