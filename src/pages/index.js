import Head from "next/head";
import Layout from "@/components/layout";
import styles from "@/styles/pages/Home.module.scss";

export default function Home() {
  const mode = "bg_dark";
  return (
    <>
      <Head>
        <title>Crypie - Cripto Wallet</title>
        <meta name="description" content="Generated by Crypie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mode}>
        <Layout>
          <h1>Main</h1>
          {/* {data.map((item) => (
            <h2>{item.id}</h2>
          ))} */}
        </Layout>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
