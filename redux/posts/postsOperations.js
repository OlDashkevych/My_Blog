import axios from 'axios';
import postsActions from './postsActions';

axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com';

const getList = () => dispatch => {
  dispatch(postsActions.getListRequest());

  axios
    .get('/posts')
    .then(response => {
      dispatch(postsActions.getListSuccess(response));
    })
    .catch(error => dispatch(postsActions.getListError(error)));
};

const createPost = post => dispatch => {
  dispatch(postsActions.createPostRequest());

  axios
    .post('/posts', post)
    .then(response => {
      dispatch(postsActions.createPostSuccess(response));
    })
    .catch(error => dispatch(postsActions.createPostError(error)));
};

const getRetrievePost = id => dispatch => {
  dispatch(postsActions.getRetrieveRequest());

  axios
    .get(`/posts/${id}?_embed=comments`)
    .then(response => dispatch(postsActions.getRetrieveSuccess(response.data)))
    .catch(error => postsActions.getRetrieveError(error));
};

const updatePost = ({ title, body, id }) => dispatch => {
  dispatch(postsActions.updatePostRequest());

  axios
    .put(`/posts/${id}`, { title, body })
    .then(response =>
      dispatch(postsActions.updatePostSuccess({ title, body, id })),
    )
    .catch(error => postsActions.updatePostError(error));
};

const deletePost = id => dispatch => {
  dispatch(postsActions.deletePostRequest());

  axios
    .delete(`/posts/${id}`)
    .then(() => dispatch(postsActions.deletePostSuccess({ id })))
    .catch(error => postsActions.deletePostError(error));
};

const createComment = comment => dispatch => {
  dispatch(postsActions.createCommentRequest());

  axios
    .post('/comments', comment)
    .then(response => {
      dispatch(postsActions.createCommentSuccess(response.data));
    })
    .catch(error => dispatch(postsActions.createCommentError(error)));
};

export default {
  getList,
  createPost,
  getRetrievePost,
  updatePost,
  deletePost,
  createComment,
};
