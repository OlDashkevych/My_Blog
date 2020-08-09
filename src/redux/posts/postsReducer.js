import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import postsActions from './postsActions';

const initialPostsState = [];

const postsList = createReducer(initialPostsState, {
  [postsActions.getListSuccess]: (_, { payload }) => payload.data,
  [postsActions.createPostSuccess]: (state, { payload }) => [
    ...state,
    payload.data,
  ],
  [postsActions.deletePostSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
  [postsActions.updatePostSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item.id === payload.id) {
        item = payload;
        return item;
      }
      return item;
    }),
});

const details = createReducer(
  {},
  {
    [postsActions.getRetrieveSuccess]: (_, { payload }) => {
      const { title, body } = payload;
      return { title, body };
    },
  },
);

const comments = createReducer([], {
  [postsActions.getRetrieveSuccess]: (_, { payload }) => payload.comments,
  [postsActions.createCommentSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
});

const error = createReducer(null, {
  [postsActions.getListError]: (_, { payload }) => payload,
  [postsActions.createPostError]: (_, { payload }) => payload,
  [postsActions.getRetrieveError]: (_, { payload }) => payload,
  [postsActions.updatePostError]: (_, { payload }) => payload,
  [postsActions.deletePostError]: (_, { payload }) => payload,
  [postsActions.createCommentError]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [postsActions.createPostRequest]: (_, { payload }) => true,
  [postsActions.getRetrieveRequest]: (_, { payload }) => true,
  [postsActions.getListRequest]: (_, { payload }) => true,
  [postsActions.updatePostRequest]: (_, { payload }) => true,
  [postsActions.deletePostRequest]: (_, { payload }) => true,
  [postsActions.createCommentRequest]: (_, { payload }) => true,

  [postsActions.createPostError]: (_, { payload }) => false,
  [postsActions.getRetrieveError]: (_, { payload }) => false,
  [postsActions.getListError]: (_, { payload }) => false,
  [postsActions.updatePostError]: (_, { payload }) => false,
  [postsActions.deletePostError]: (_, { payload }) => false,
  [postsActions.createCommentError]: (_, { payload }) => false,

  [postsActions.createPostSuccess]: (_, { payload }) => false,
  [postsActions.getRetrieveSuccess]: (_, { payload }) => false,
  [postsActions.getListSuccess]: (_, { payload }) => false,
  [postsActions.updatePostSuccess]: (_, { payload }) => false,
  [postsActions.deletePostSuccess]: (_, { payload }) => false,
  [postsActions.createCommentSuccess]: (_, { payload }) => false,
});

export default combineReducers({
  postsList,
  details,
  comments,
  error,
  loading,
});
