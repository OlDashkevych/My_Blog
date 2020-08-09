import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import postsActions from './postsActions';

const initialPostsState = [];

const postsList = createReducer(initialPostsState, {
  [postsActions.getListSuccess]: (_, { payload }) => payload.data,
  [postsActions.createPostSuccess]: (state, { payload }) => [
    payload.data,
    ...state,
  ],
  [postsActions.deletePostSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
  [postsActions.updatePostSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item.id === payload.id) {
        return payload;
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
  [postsActions.createPostRequest]: () => true,
  [postsActions.getRetrieveRequest]: () => true,
  [postsActions.getListRequest]: () => true,
  [postsActions.updatePostRequest]: () => true,
  [postsActions.deletePostRequest]: () => true,
  [postsActions.createCommentRequest]: () => true,

  [postsActions.createPostError]: () => false,
  [postsActions.getRetrieveError]: () => false,
  [postsActions.getListError]: () => false,
  [postsActions.updatePostError]: () => false,
  [postsActions.deletePostError]: () => false,
  [postsActions.createCommentError]: () => false,

  [postsActions.createPostSuccess]: () => false,
  [postsActions.getRetrieveSuccess]: () => false,
  [postsActions.getListSuccess]: () => false,
  [postsActions.updatePostSuccess]: () => false,
  [postsActions.deletePostSuccess]: () => false,
  [postsActions.createCommentSuccess]: () => false,
});

export default combineReducers({
  postsList,
  details,
  comments,
  error,
  loading,
});
