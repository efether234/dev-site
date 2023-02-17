import React from "react";

const blog = ({ posts }) => {
  return (
    <div className="container">
      <h1>Blog</h1>
      {posts.map((post) => (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ))}

      {console.log({ posts })}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default blog;
