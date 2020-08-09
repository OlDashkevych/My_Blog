import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postsOperations } from '../../redux/posts';
import { postsSelectors } from '../../redux/posts';
import CommentsForm from '../../components/CommentsForm/';
import styles from './PublicationPage.module.css';

const PublicationPage = () => {
  let match = useRouteMatch('/details/:id');
  const dispatch = useDispatch();
  const id = match.params.id;

  useEffect(() => dispatch(postsOperations.getRetrievePost(id)), [
    dispatch,
    id,
  ]);

  const { title, body } = useSelector(postsSelectors.getDetails);
  const comments = useSelector(postsSelectors.getComments);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p>{body}</p>
      <CommentsForm postId={id} />
      <ul className={styles.list}>
        {comments.map(el => (
          <li key={el.id}>
            <span className={styles.name}>Nickname: </span>
            {el.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicationPage;
