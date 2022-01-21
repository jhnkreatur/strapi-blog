import React, { useState } from "react";
import { posts } from "../../data";
import Post from "../../components/Post/Post";
const Blog = () => {
  console.log(posts);
  // const [posts, setPosts] = useState([...data]);
  return (
    <div>
      <h2>Blog</h2>
      {posts.map((post) => {
        return <Post title={post.title} body={post.body} tags={post.tags[0]} />;
      })}
    </div>
  );
};

export default Blog;
