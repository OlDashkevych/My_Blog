import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postsOperations } from '../../redux/posts';
import styles from './PostItem.module.css';
import editIcon from '../../images/icons/icons8-edit-40.png';
import closeIcon from '../../images/icons/icons8-close-window-30.png';
import deleteIcon from '../../images/icons/delete.png';
import { path } from '../../routes';

const PostListItem = ({ title, body, id }) => {
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const deletePost = () => {
    dispatch(postsOperations.deletePost(id));
  };

  const openEdit = e => {
    setEdit(true);
  };

  const closeEdit = e => {
    setEdit(false);
  };

  const [updatedData, setIupdatedData] = useState({ title, body });

  const handleInputChange = ({ currentTarget: { name, value } }) =>
    setIupdatedData({
      ...updatedData,
      [name]: value,
    });

  const handleSubmit = e => {
    e.preventDefault();
    const updated = { ...updatedData, id };
    dispatch(postsOperations.updatePost(updated));
    closeEdit();
  };

  return !edit ? (
    <li className={styles.item}>
      <p className={styles.title}>{title}</p>
      <p>{body.length > 170 ? body.slice(0, 170) + '...' : body}</p>
      <div className={styles.controlPanel}>
        <button
          type="button"
          className={styles.controlBtn}
          onClick={deletePost}
        >
          <img src={deleteIcon} alt="deleteIcon" />
        </button>
        <Link to={`${path.DETAILS.url}/${id}`} className={styles.link}>
          <button className={styles.button} type="button">
            View details
          </button>
        </Link>
        <button type="button" className={styles.controlBtn} onClick={openEdit}>
          <img className={styles.editIcon} src={editIcon} alt="edit" />
        </button>
      </div>
    </li>
  ) : (
    <li className={styles.item}>
      <button className={styles.closeBtn} onClick={closeEdit}>
        <img src={closeIcon} alt="closeIcon" />
      </button>
      <form className={styles.editForm} onSubmit={handleSubmit}>
        <label className={styles.editItemLabel}>
          Title
          <input
            className={styles.edititemInput}
            type="text"
            name="title"
            value={updatedData.title}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
        </label>
        <label className={styles.editItemLabel}>
          Info
          <input
            className={styles.edititemInput}
            type="text"
            name="body"
            value={updatedData.body}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
        </label>

        <button type="submit" className={styles.edititemBtn}>
          Edit post
        </button>
      </form>
    </li>
  );
};

export default PostListItem;
