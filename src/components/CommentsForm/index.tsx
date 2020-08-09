import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postsOperations } from '../../redux/posts';
import './CommentsForm.css';

const CommentsForm: React.FC<{ id: string }> = ({ id }) => {
  const [body, setBody] = useState<string>('');
  const dispatch = useDispatch();

  const handleInputChange = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setBody(value);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postId: number = Number(id);
    dispatch(postsOperations.createComment({ postId, body }));
    setBody('');
  };

  return (
    <form className="commentsForm" onSubmit={handleSubmit}>
      <label htmlFor="5" className="commentsForm-label">
        <input
          className="commentsForm-input"
          type="text"
          name="comment"
          value={body}
          onChange={handleInputChange}
          autoComplete="off"
          required
          id="5"
        />
      </label>

      <button type="submit" className="commentsForm-button">
        Add comment
      </button>
    </form>
  );
};

export default CommentsForm;
