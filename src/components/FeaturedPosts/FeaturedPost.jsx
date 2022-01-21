import React from "react";
import featuredPostStyles from "./featuredPost.module.css";

const FeaturedPost = ({ img, title, date, tag, body }) => {
  return (
    <article className={featuredPostStyles.featured__post}>
      <img className={featuredPostStyles.post__image} src={img} alt={img} />
      <div className={featuredPostStyles.details}>
        <h3 className={featuredPostStyles.title}>{title}</h3>
        <div>
          <span className={featuredPostStyles.date}>{date}</span>
          <span className={featuredPostStyles.tag}>{tag}</span>
        </div>
        <p className={featuredPostStyles.preview}>{body}</p>
      </div>

      <div className={featuredPostStyles.line}></div>
    </article>
  );
};

export default FeaturedPost;
