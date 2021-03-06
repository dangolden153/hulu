import Head from "next/head";
import Header from "./components/Header";
import Nav from "./components/Nav";
import requests from "../utils/request";
import Results from "./components/Results";

export default function Home({ props }) {
  console.log(props);
  const results = "";
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* nav  */}
      <Nav />

      {/* results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTrending.url}`
  );
  const reponse = await request.json();
  return {
    props: {
      reponse,
    },
  };
}
