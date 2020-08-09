import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from '../PostItem';
import { postsSelectors } from '../../redux/posts';
import styles from './PostList.module.css';
import popTransition from './transition/pop.module.css';

const PostList = () => {
  const posts = useSelector(postsSelectors.getPosts);

  return (
    <TransitionGroup className={styles.list} component="ul">
      {posts.map(post => (
        <CSSTransition key={post.id} timeout={250} classNames={popTransition}>
          <PostItem key={post.id} {...post} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default PostList;
