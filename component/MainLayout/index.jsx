import Link from "next/link";
import Head from "next/head";

export const MainLayout = ({ children, title = "Next App" }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="next, main page" />
        <meta name="description" content="next js tutorial" />
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Head>

      <nav>
        <ul className="nav-list">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="main">{children}</main>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .nav-list {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          top: 0;
          background-color: lightblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
          list-style: none;
          font-size: 18px;
        }
        .nav-list a {
          text-decoration: none;
        }
        .main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
};
