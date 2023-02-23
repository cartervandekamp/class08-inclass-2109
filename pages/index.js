import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/useEffectOne">useEffectOne</Link>
        <Link href="/useEffectTwo">useEffectTwo</Link>
        <Link href="/useEffectThree">useEffectThree</Link>
        <Link href="/carouselPage">carouselPage</Link>
      </main>
    </div>
  );
}