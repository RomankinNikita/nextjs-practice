// import { useState, useEffect } from "react";
import Link from "next/link";
import { MainLayout } from "../../component/MainLayout";

export default function Posts({ posts }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function loadPosts() {
  //     try {
  //       const response = await fetch("http://localhost:4200/posts");
  //       const posts = await response.json();
  //       setPosts(posts);
  //     } catch (error) {
  //       setPosts([]);
  //       console.log(error);
  //     }
  //   }

  //   loadPosts();
  // }, []);

  return (
    <MainLayout title="Posts">
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();
  return {
    props: { posts },
  };
}
