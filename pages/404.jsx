import Link from "next/link";
import { MainLayout } from "../component/MainLayout";
import styles from "../styles/notFound.module.scss";

export default function NotFound() {
  return (
    <MainLayout>
      <h1 className={styles.Error}>Error 404</h1>
      <p>
        Please&nbsp;
        <Link href="/">
          <a>go back</a>
        </Link>
        &nbsp; to Home page
      </p>
    </MainLayout>
  );
}
