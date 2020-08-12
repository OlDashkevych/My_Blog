import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlockLoading } from 'react-loadingg';
import styles from './HomePage.module.css';
import { postsOperations, postsSelectors } from '../../redux/posts';
import PostEditor from '../../components/PostEditor';
import PostList from '../../components/PostList';

const HomeView: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(postsOperations.getList()), [dispatch]);
  const loading: boolean = useSelector(postsSelectors.getLoading);
  return (
    <>
      {!loading ? (
        <>
          <h1 className={styles.title}>My_Blog_</h1>
          <PostEditor />
          <PostList />
        </>
      ) : (
        <BlockLoading />
      )}
    </>
  );
};

export default HomeView;
