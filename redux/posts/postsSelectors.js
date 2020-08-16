const getPosts = state => state.posts.postsList;

const getDetails = state => state.posts.details;

const getComments = state => state.posts.comments;

const getLoading = state => state.posts.loading;

export default { getPosts, getDetails, getComments, getLoading };
