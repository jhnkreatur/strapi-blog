import React from "react";
import postStyles from "./post.module.css";

const Post = ({ title, date, tags, body }) => {
  return (
    <article className={postStyles.post}>
      <header>
        <h3 className={postStyles.title}>{title}</h3>
        <p className={postStyles.details}>
          {date} | {tags}
        </p>
      </header>
      <footer className={postStyles.footer}>
        <p className={postStyles.body}>{body}</p>
      </footer>
    </article>
  );
};

export default Post;
