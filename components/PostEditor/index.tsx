import { useDispatch } from "react-redux";
import styles from "./PostEditor.module.css";
import useInputChange from "./hooks/useInputsChange";
import { postsOperations } from "../../redux/posts";

const PostEditor: React.FC = () => {
  const dispatch = useDispatch();

  const [input, handleInputChange, handleClearInput] = useInputChange();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postsOperations.createPost(input));
    handleClearInput();
  };

  return (
    <form className={styles.postEditor} onSubmit={handleSubmit}>
      <label htmlFor="3" className={styles.postEditorLabel}>
        Title
        <input
          className={styles.postEditorInput}
          type="text"
          name="title"
          value={input.title}
          onChange={handleInputChange}
          autoComplete="off"
          id="3"
        />
      </label>
      <label htmlFor="4" className={styles.postEditorLabel}>
        Info
        <input
          className={styles.postEditorInput}
          type="text"
          name="body"
          value={input.body}
          onChange={handleInputChange}
          autoComplete="off"
          id="4"
        />
      </label>

      <button type="submit" className={styles.postEditorButton}>
        Add post
      </button>
    </form>
  );
};
export default PostEditor;
