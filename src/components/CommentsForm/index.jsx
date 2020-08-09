import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postsOperations } from '../../redux/posts';
import './CommentsForm.css';

const CommentsForm = ({ postId }) => {
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = ({ currentTarget: { value } }) => setBody(value);

  const handleSubmit = e => {
    e.preventDefault();
    postId = Number(postId);
    dispatch(postsOperations.createComment({ postId, body }));
    setBody('');
  };

  return (
    <form className="commentsForm" onSubmit={handleSubmit}>
      <label className="commentsForm-label">
        <input
          className="commentsForm-input"
          type="text"
          name="comment"
          value={body}
          onChange={handleInputChange}
          autoComplete="off"
          required
        />
      </label>

      <button type="submit" className="commentsForm-button">
        Add comment
      </button>
    </form>
  );
};

export default CommentsForm;
