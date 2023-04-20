import Head from "next/head";
import Layout from "@/components/layout";
import styles from "@/styles/pages/Home.module.scss";
import CardsList from "@/components/cards_list";
import WalletList from "@/components/walletList";
import { useState, useEffect, useContext } from "react";
import Button from "@/components/button";
import { Context } from "@/store";
import SwitcherTheme from "@/components/switcher-theme";

export default function Home() {
  const [sectionCrypto, setSectionCrypto] = useState(true);
  const [sectionWallet, setSectionWallet] = useState(false);
  const [sectionWatchlist, setSectionWatchlist] = useState(false);
  const onHandleCrypto = () => setSectionCrypto((prev) => !prev);
  const onHandleWallet = () => setSectionWallet((prev) => !prev);
  const onHandleWatchlist = () => setSectionWatchlist((prev) => !prev);

  const { state, dispatch } = useContext(Context);

  const allCryptoData = state.cryptoListData;

  if (typeof window !== "undefined") {
    localStorage.getItem("watchlist")
      ? null
      : localStorage.setItem("watchlist", "[]");
    localStorage.getItem("wallet")
      ? null
      : localStorage.setItem("wallet", "[]");
  }

  const [wallet, setWallet] = useState(
    typeof window !== "undefined" ? localStorage.getItem("wallet") : null
    );
    
    const [watchlist, setWatchlist] = useState(
      typeof window !== "undefined" ? localStorage.getItem("watchlist") : null
      );

    let walletHome = [];
    if (wallet) {
      walletHome = allCryptoData.filter((crypto) => wallet.includes(crypto.id));
    }
  
    let watchlistHome = [];
    if (watchlist) {
      watchlistHome = allCryptoData.filter((crypto) => watchlist.includes(crypto.id));
    }

    //SWITCHER
    const [isSwitcherTheme, setIsSwitcherTheme] = useState(true);
    const [isLightActive, setLightActive] = useState(true);
    const onHandleChangeTheme = () => {
      setIsSwitcherTheme((prev) => !prev);
  };
  console.log()
  return (
    <>
      <Head>
        <title>Crypie - Cripto Wallet</title>
        <meta name="description" content="Generated by Crypie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Main}>
        <Layout theme={isSwitcherTheme}>
          <div className={styles.container}>
            <div
              className={`${styles.section} ${
                sectionCrypto && styles.sectionActive
              }`}
            >
              <label
                className={`${styles.sectionTitle} ${
                  sectionCrypto && styles.sectionTitleActive
                }`}
                onClick={onHandleCrypto}
              >
                All crypto
              </label>
              <div
                className={`${styles.sectionCont} ${
                  sectionCrypto && styles.sectionContActive
                }`}
              >
                <CardsList
                  data={allCryptoData.slice(0, 10)}
                  inHomeActive={true}
                />
              </div>
              <div className={styles.sectionButton}>
                <a href="../allCrypto">
                  <Button text={"See all"} />
                </a>
              </div>
            </div>
            <div
              className={`${styles.section} ${
                sectionWallet && styles.sectionActive
              }`}
            >
              <label
                className={`${styles.sectionTitle} ${
                  sectionWallet && styles.sectionTitleActive
                }`}
                onClick={onHandleWallet}
              >
                Wallet
              </label>
              
              <div
                className={`${styles.sectionCont} ${
                  sectionWallet && styles.sectionContActive
                }`}
              >
                {walletHome>0 ? (
                  <CardsList data={walletHome} inHomeActive={true} />
                ) : (
                  <h2>You don't have any elements in your wallet.</h2>
                )}
              </div>
             
              <div className={styles.sectionButton}>
                <a href="../wallet">
                  <Button text={"Go to wallet"} />
                </a>
              </div>
            </div>
            <div
              className={`${styles.section} ${
                sectionWatchlist && styles.sectionActive
              }`}
            >
              <label
                className={`${styles.sectionTitle} ${
                  sectionWatchlist && styles.sectionTitleActive
                }`}
                onClick={onHandleWatchlist}
              >
                Watchlist
              </label>
              <div
                className={`${styles.sectionCont} ${
                  sectionWatchlist && styles.sectionContActive
                }`}
              >
                {watchlistHome>0 ? (
                  <CardsList data={watchlistHome} inHomeActive={true} />
                ) : (
                  <h2>You don't have any elements in your watchlist.</h2>
                )}
              </div>
              <div className={styles.sectionButton}>
                <a href="../watchlist">
                  <Button text={"Go to watchlist"} />
                </a>
              </div>
            </div>
          </div>
          <SwitcherTheme status={isLightActive} func={onHandleChangeTheme} />
        </Layout>
      </main>
    </>
  );
}
