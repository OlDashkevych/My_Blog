import { combineReducers } from 'redux';
import postsReducers from './posts/postsReducer';

const rootReducer = combineReducers({
  posts: postsReducers,
});

export default rootReducer;
