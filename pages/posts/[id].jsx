import { useRouter } from "next/router";
import { MainLayout } from "../../component/MainLayout";

export default function Post({ post }) {
  const router = useRouter();

  return (
    // <MainLayout title={`Post ${router.query.id || ""}`}>
    <MainLayout title={`Post ${post.id || ""}`}>
      <h1>{post.title}</h1>

      <hr />

      <p>{post.body}</p>

      <button
        onClick={() => {
          router.push("/posts");
        }}
      >
        Back
      </button>
    </MainLayout>
  );
}

export async function getServerSideProps({ query }) {
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();
  return { props: { post } };
}
