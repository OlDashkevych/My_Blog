import React from 'react';
import { useDispatch } from 'react-redux';
import './PostEditor.css';
import useInputChange from './hooks/useInputsChange';
import { postsOperations } from '../../redux/posts';

const PostEditor: React.FC = () => {
  const dispatch = useDispatch();

  const [input, handleInputChange, handleClearInput] = useInputChange();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postsOperations.createPost(input));
    handleClearInput();
  };

  return (
    <form className="postEditor" onSubmit={handleSubmit}>
      <label htmlFor="3" className="postEditor-label">
        Title
        <input
          className="postEditor-input"
          type="text"
          name="title"
          value={input.title}
          onChange={handleInputChange}
          autoComplete="off"
          id="3"
        />
      </label>
      <label htmlFor="4" className="postEditor-label">
        Info
        <input
          className="postEditor-input"
          type="text"
          name="body"
          value={input.body}
          onChange={handleInputChange}
          autoComplete="off"
          id="4"
        />
      </label>

      <button type="submit" className="postEditor-button">
        Add post
      </button>
    </form>
  );
};
export default PostEditor;
