import Head from "next/head";
import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/pages/aboutUs.module.scss";
import { useContext } from "react";
import { Context } from "@/store";

export default function aboutUs() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: "SELECTED_ICON", payload: "aboutUs" });
  }, []);

  return (
    <>
      <Head>
        <title>Crypie - About us</title>
        <meta name="description" content="Generated by Crypie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Main}>
        <Layout theme={state.modeData}>
          <h1>About us</h1>
          <div className={styles.content}>
            <div className={styles.aboutCard}>
              <div className={styles.myImage}>
                <Image
                  src="/aboutusPhoto/Salvo_Bisconti.png"
                  alt="myImage"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className={styles.myName}>
                Salvo
                <br />
                Bisconti
              </h3>
              <div className={styles.info}>
                <p>FRONT-END DEVELOPER</p>
              </div>
              <div className={styles.contacts}>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/salvo-bisconti/ ">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/SalvoBisconti">Github</a>
                  </li>
                  <li>
                    <a href="mailto:sabisco@live.it">Email</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div className={styles.aboutCard}>
              <div className={styles.myImage}>
                <Image
                  src="/aboutusPhoto/SoniaGrassia2.jpg"
                  alt="Sonia-Grassia"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className={styles.myName}>
                Sonia
                <br />
                Grassia
              </h3>
              <div className={styles.info}>
                <p>FRONT-END DEVELOPER</p>
              </div>
              <div className={styles.contacts}>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/sonia-grassia/">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/SoniaGrassia">Github</a>
                  </li>
                  <li>
                    <a href="mailto:grassiasonia@gmail.com">Email</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div className={styles.aboutCard}>
              <div className={styles.myImage}>
                <Image
                  src="/aboutusPhoto/FrancescoPioCoppola2.jpg"
                  alt="Francesco-Pio-Coppola"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className={styles.myName}>
                Francesco Pio
                <br />
                Coppola
              </h3>
              <div className={styles.info}>
                <p>FRONT-END DEVELOPER</p>
              </div>
              <div className={styles.contacts}>
                <ul>
                  <li>
                    <a href="http://linkedin.com/in/fra-coppola-5ab6b4257">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Franceschio">Github</a>
                  </li>
                  <li>
                    <a href="mailto:coppolaciccio1@gmail.com">Email</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div className={styles.aboutCard}>
              <div className={styles.myImage}>
                <Image
                  src="/aboutusPhoto/ElisabettaMonaco.jpg"
                  alt="Elisabetta Monaco"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className={styles.myName}>
                Elisabetta
                <br />
                Monaco
              </h3>
              <div className={styles.info}>
                <p>FRONT-END DEVELOPER</p>
              </div>
              <div className={styles.contacts}>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/elisabetta-monaco-5869a9109">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/bennina">Github</a>
                  </li>
                  <li>
                    <a href="mailto:info@elisabettamonaco.it">Email</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div className={styles.aboutCard}>
              <div className={styles.myImage}>
                <Image
                  src="/aboutusPhoto/VincenzoCostantino.jpg"
                  alt="Elisabetta Monaco"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className={styles.myName}>
                Vincenzo
                <br />
                Costantino
              </h3>
              <div className={styles.info}>
                <p>FRONT-END DEVELOPER</p>
              </div>
              <div className={styles.contacts}>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/mwlite/in/vincenzo-costantino-67b624257">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Vinci97">Github</a>
                  </li>
                  <li>
                    <a href="mailto:vincenzo.costantino04@gmail.com">Email</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
