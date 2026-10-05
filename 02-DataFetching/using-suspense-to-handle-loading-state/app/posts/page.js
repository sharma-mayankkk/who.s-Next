'use client'
import { useEffect, useState } from "react";

//to do data fetching it is required to make component as client component

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function fetchPost() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data = await response.json();
      console.log(data)

      setPosts(data)
    }
    fetchPost();
  },[])
  return (
    <>
      <h1>Posts</h1>
      <div className="posts-container">
        {
          posts.map(({id,title,body})=>(
            <div className="post-card" key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Posts;