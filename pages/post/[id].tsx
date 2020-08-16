import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { postsOperations, postsSelectors } from "../../redux/posts";
import { MainLayout } from "../../components/MainLayout";
import CommentsForm from "../../components/CommentsForm";
import { IPosts } from "../../interfaces";
import { IComments } from "../../interfaces";
import styles from "./PublicationPage.module.css";

interface PostPageProps {
  post: IPosts;
}

export default function Post({ post: serverPost }: PostPageProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const id: string | string[] = router.query.id;
  useEffect(() => {
    const load = () => {
      dispatch(postsOperations.getRetrievePost(id)), [dispatch];
    };

    if (!serverPost) {
      load();
    }
  }, []);
  const { title, body } = useSelector(postsSelectors.getDetails);
  const comments: IComments[] = useSelector(postsSelectors.getComments);

  return (
    <MainLayout title="Post Page">
      <div className={styles.wrapper}>
        <Link href={"/posts"}>
          <a>Back to all posts</a>
        </Link>
        <h2 className={styles.title}>{title}</h2>
        <p>{body}</p>
        <CommentsForm id={id} />
        <ul className={styles.list}>
          {comments.map((el) => (
            <li key={el.id}>
              <span className={styles.name}>Nickname: </span>
              {el.body}
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}

Post.getInitialProps = ({ req, store, query }) => {
  if (!req || !store) {
    return { post: null };
  }

  store.dispatch(postsOperations.getRetrievePost(query.id));
  const post = useSelector(postsSelectors.getDetails);

  return {
    post,
  };
};
