import React from "react";
import Post from "../Post/Post";
import recentPostsStyles from "./recentPosts.module.css";

const posts = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    tags: ["design", "pattern"],
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    tags: ["figma", "icon design"],
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const RecentPosts = () => {
  return (
    <section className={recentPostsStyles.recentPosts}>
      <nav className={recentPostsStyles.posts__nav}>
        <p className={recentPostsStyles.title}>Recent posts</p>
        <a href="#s" className={recentPostsStyles.view__all}>
          view all
        </a>
      </nav>

      <div className={recentPostsStyles.posts__container}>
        {posts.map((post) => {
          return (
            <Post
              title={post.title}
              body={post.body}
              date={post.date}
              tags={post.tags[0]}
            ></Post>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
