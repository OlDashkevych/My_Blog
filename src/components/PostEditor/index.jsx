import React from 'react';
import { useDispatch } from 'react-redux';
import './PostEditor.css';
import useInputChange from './/hooks/useInputsChange';
import { postsOperations } from '../../redux/posts';

const PostEditor = () => {
  const dispatch = useDispatch();

  const [input, handleInputChange, handleClearInput] = useInputChange();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postsOperations.createPost(input));
    handleClearInput();
  };

  return (
    <form className="postEditor" onSubmit={handleSubmit}>
      <label className="postEditor-label">
        Title
        <input
          className="postEditor-input"
          type="text"
          name="title"
          value={input.title}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </label>
      <label className="postEditor-label">
        Info
        <input
          className="postEditor-input"
          type="text"
          name="body"
          value={input.body}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </label>

      <button type="submit" className="postEditor-button">
        Add post
      </button>
    </form>
  );
};
export default PostEditor;
