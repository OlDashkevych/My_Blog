import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './HomePage.module.css';
import { postsOperations } from '../../redux/posts';

import PostEditor from '../../components/PostEditor';
import PostList from '../../components/PostList';

const HomeView: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(postsOperations.getList()), [dispatch]);

  return (
    <>
      <h1 className={styles.title}>My_Blog_</h1>
      <PostEditor />
      <PostList />
    </>
  );
};

export default HomeView;
