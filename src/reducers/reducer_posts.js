import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';
import _ from 'lodash'

export default function(state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
            //_.mapKeys method takes an array of objects, extracts a property, in this case
            //an ID, and returns a simple object with a key of ID
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            return action.payload.data
        case DELETE_POST:
            return state
        default:
            return state;
    }
}