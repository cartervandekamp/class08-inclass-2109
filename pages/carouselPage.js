import Carousel from "../components/carousel";
import styles from "../styles/carouselPage.module.css";
import Link from "next/link";
export default function carouselPage() {
  return (
    <>
      <main className={styles.main}>
        <Link href="/">Home</Link>
        <Carousel />
      </main>
    </>
  );
}
