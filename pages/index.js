import Link from "next/link";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Index = (props) => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a href="replace">{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch("http://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    shows: data
  };
};
export default Index;
