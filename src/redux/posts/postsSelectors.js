const getPosts = state => state.posts.postsList;

const getDetails = state => state.posts.details;

const getComments = state => state.posts.comments;

export default { getPosts, getDetails, getComments };
