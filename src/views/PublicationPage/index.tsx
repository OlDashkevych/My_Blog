import React, { useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postsOperations, postsSelectors } from '../../redux/posts';
import CommentsForm from '../../components/CommentsForm';
import styles from './PublicationPage.module.css';
import { IId, IData, IComments } from '../../interfaces';
import goBackIcon from '../../images/icons/icons8-go-back-40.png';

const PublicationPage: React.FC = () => {
  const match: any = useRouteMatch('/details/:id');
  let history = useHistory();
  const dispatch = useDispatch();
  const { id }: IId = match.params;

  useEffect(() => dispatch(postsOperations.getRetrievePost(id)), [
    dispatch,
    id,
  ]);

  const goBack = () => {
    history.push('/');
  };

  const { title, body }: IData = useSelector(postsSelectors.getDetails);
  const comments: IComments[] = useSelector(postsSelectors.getComments);

  return (
    <div className={styles.wrapper}>
      <button className={styles.goBackBtn} type="button" onClick={goBack}>
        <img src={goBackIcon} alt="goBackIcon" />
      </button>
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
