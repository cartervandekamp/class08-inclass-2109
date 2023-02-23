import Link from "next/link";
import styles from "../styles/useEffectThree.module.css";
import { useState, useEffect } from "react";
export default function useEffectThree() {
  const [number, setNumber] = useState(0);

  const [value, setValue] = useState(-10);

  useEffect(() => {
    setValue(value + 10);
  }, [number]);

  return (
    <>
      <main className={styles.main}>
        <Link href="/">Home</Link>
        <div>
          <div className={styles.content}>
            <button
              className={styles.content}
              onClick={() => setNumber(number + 1)}
            >
              Click Me
            </button>
          </div>
        </div>
        <div>useEffectThree</div>
        <div>{value}</div>
      </main>
    </>
  );
}
