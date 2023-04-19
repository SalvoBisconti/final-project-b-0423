import Head from "next/head";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import CardsList from "@/components/cards_list";

export default function watchlist() {
  const mode = "dark_mode";
  const [allCrypto, setAllCrypto] = useState([]);

  const [coin, setCoin] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("watchlist"))
      : []
  );
  useEffect(() => {
    fetch(
      process.env.NEXT_PUBLIC_API_URL +
        "markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then((res) => res.json())
      .then((data) => setAllCrypto(data));
  }, []);

  let stars = [];
  if (coin.length > 0) {
    stars = allCrypto.filter((crypto) => coin.includes(crypto.id));
  }

  useEffect(() => {
    if (typeof windo !== "undefined") {
      localStorage.setItem("watchlistHome", [...stars]);
    }
  }, [stars]);

  return (
    <>
      <Head>
        <title>Crypie - Cripto watchlist</title>
        <meta name="description" content="Generated by Crypie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mode}>
        <Layout>
          <h2> watchlist </h2>
          <div>
            <CardsList data={stars} />
          </div>
        </Layout>
      </main>
    </>
  );
}
