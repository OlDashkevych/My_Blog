import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../components/MainLayout";
import { BlockLoading } from "react-loadingg";
import styles from "./HomePage.module.css";
import { postsOperations, postsSelectors } from "../../redux/posts";
import PostList from "../../components/PostList";

const HomeView = ({ posts: serverPosts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = () => {
      dispatch(postsOperations.getList()), [dispatch];
    };

    if (!serverPosts) {
      load();
    }
  }, []);

  const loading = useSelector(postsSelectors.getLoading);

  return (
    <MainLayout title={"Posts Page"}>
      <p className={styles.title}>My_Blog_</p>
      <PostList />
      {loading ? <BlockLoading /> : null}
    </MainLayout>
  );
};

HomeView.getInitialProps = ({ req, store }) => {
  if (!req || !store) {
    return { posts: null };
  }

  store.dispatch(postsOperations.getList());
  const posts = useSelector(postsSelectors.getPosts);

  return {
    posts,
  };
};

export default HomeView;
