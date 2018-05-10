import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=john316'

export function fetchPosts(){

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return{
        type: FETCH_POSTS,
        payload: request
    }
}

//Passes in the callback function on createPost(), waits to execute the ajax post request then execute
//Navigation back to the posts_new.js component
export function createPost(values, callback){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback());

    return{
        type: CREATE_POST,
        payload: request
    }
}

export function getPost(post, callback){
    //http://reduxblog.herokuapp.com/api/posts/5	
    //const request = axios.get(`${ROOT_URL}/posts/${post}${API_KEY}`).then(() => callback());
    return{
        type: GET_POST,
        payload: post
    }
}

export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return{
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(post, callback){
    const request = axios.delete(`${ROOT_URL}/posts/${post.id}${API_KEY}`).then(() => callback());
    $('#appModal').modal('hide');
    return{
        type: DELETE_POST,
        payload: request
    }
}