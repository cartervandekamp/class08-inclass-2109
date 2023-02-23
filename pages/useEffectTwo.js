import styles from "../styles/useEffectTwo.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function useEffectTwo() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(number);
    setNumber(number + 50);
  }, []);
  return (
    <>
      <main className={styles.main}>
        <Link href="/">Home</Link>
        <div>useEffectTwo</div>
        <div>{number}</div>
      </main>
    </>
  );
}
