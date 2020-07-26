import Link from "next/link";
import Router from "next/router";
import { MainLayout } from "../component/MainLayout";

export default () => {
  return (
    <MainLayout title="About Us">
      <h1>About Page</h1>

      <button
        onClick={() => {
          Router.push("/");
        }}
      >
        To Main Page
      </button>
    </MainLayout>
  );
};
