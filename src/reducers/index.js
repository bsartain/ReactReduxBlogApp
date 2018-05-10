import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form'
 
const rootReducer = combineReducers({
  posts: PostsReducer,
  //the form: key is critical for the form to work on the reducer.
  //All of the forms created in this application will look for 
  //the form: keyword and process accordingly
  form: formReducer
});

export default rootReducer;
