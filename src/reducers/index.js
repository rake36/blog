import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

// very important that the formReducer is assigned to 'form'... coding by convention

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer  // !!!
});

export default rootReducer;
