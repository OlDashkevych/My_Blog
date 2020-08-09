import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postsOperations, postsSelectors } from '../../redux/posts';
import CommentsForm from '../../components/CommentsForm';
import styles from './PublicationPage.module.css';

interface IComments {
  postId: number;
  body: string;
  id: number;
}

interface IData {
  title: string;
  body: string;
}

interface IId {
  id: string;
}

const PublicationPage: React.FC = () => {
  const match: any = useRouteMatch('/details/:id');
  const dispatch = useDispatch();
  const { id }: IId = match.params;

  useEffect(() => dispatch(postsOperations.getRetrievePost(id)), [
    dispatch,
    id,
  ]);

  const { title, body }: IData = useSelector(postsSelectors.getDetails);
  const comments: IComments[] = useSelector(postsSelectors.getComments);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p>{body}</p>
      <CommentsForm id={id} />
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
