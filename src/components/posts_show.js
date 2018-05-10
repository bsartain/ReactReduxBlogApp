import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import Modal from './modal'

class PostsShow extends Component {
    constructor(props){
        super(props);

        this.modalAction = this.modalAction.bind(this);
    }

    componentDidMount(){
        //Provided by our route function this gets the id of the url
        const url_id = this.props.match.params.id;
        this.props.fetchPost(url_id);
    }

    modalAction(){
        //Calls the modal's submit button
        this.props.deletePost(this.props.post, () => {
            this.props.history.push('/')
        })
    }
    
    render() {
        return (
            <div className="top row">

                <div className="col-md-12 navigation-links">
                    <Link to="/">&laquo; Back to Posts</Link>                 
                    <button type="button" className="btn btn-primary ml-auto" data-toggle="modal" data-target="#appModal">
                        Delete Post
                    </button>
                    <Modal modalAction={this.modalAction}/>
                </div>
                <div className="col-md-12">
                    <h1>{this.props.post.title}</h1>
                    <h5>Categories: {this.props.post.categories}</h5>
                    <hr/>
                    <p>{this.props.post.content}</p>                
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        post: state.posts
    }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
