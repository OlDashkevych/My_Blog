import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postsOperations } from "../../redux/posts";
import styles from "./CommentsForm.module.css";

interface ID {
  id: string | string[];
}

const CommentsForm: React.FC<ID> = ({ id }) => {
  const [body, setBody] = useState<string>("");
  const dispatch = useDispatch();

  const handleInputChange = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setBody(value);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postId: number = Number(id);
    dispatch(postsOperations.createComment({ postId, body }));
    setBody("");
  };

  return (
    <form className={styles.commentsForm} onSubmit={handleSubmit}>
      <label htmlFor="5" className={styles.commentsFormLabel}>
        <input
          className={styles.commentsFormInput}
          type="text"
          name="comment"
          value={body}
          onChange={handleInputChange}
          autoComplete="off"
          required
          id="5"
        />
      </label>

      <button type="submit" className={styles.commentsFormButton}>
        Add comment
      </button>
    </form>
  );
};

export default CommentsForm;
