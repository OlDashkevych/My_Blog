import PostEditor from "../../components/PostEditor";
import { MainLayout } from "../../components/MainLayout";

const New = () => {
  return (
    <MainLayout title="Create new post">
      <h1>Create new post!</h1>
      <PostEditor />
    </MainLayout>
  );
};

export default New;
