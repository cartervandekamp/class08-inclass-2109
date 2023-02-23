import Image from "next/image";
import styles from "/components/carousel/Carousel.module.css";
import { useState } from "react";

export default function Carousel() {
  const [img, setImg] = useState(0);

  const changeImage = (change) => {
    if (change == "backward") {
      setImg(img - 1);

      if (img == 0) {
        setImg(5);
      }
      console.log(img);
    } else if (change == "forward") {
      setImg(img + 1);
      if (img == 5) {
        setImg(0);
      }
      console.log(img);
    }
  };
  return (
    <>
      <main className={styles.main}>
        <div
          style={{
            backgroundImage: "url(/carousel-images/" + img + ".jpg)",
            backgroundSize: "cover",
            BackgoundRepeat: "no-repeat",
            width: 500,
            height: 300,
          }}
        >
          <div className={styles.Arrows}>
            <div className={styles.leftArrow}>
              <Image
                src={"/icons/leftArrow.png"}
                alt={"/icons/leftArrow.png"}
                width={100}
                height={100}
                onClick={() => changeImage("backward")}
              />
            </div>
            <div className={styles.rightArrow}>
              <Image
                src={"/icons/rightArrow.png"}
                alt={"/icons/rightArrow.png"}
                width={100}
                height={100}
                onClick={() => changeImage("forward")}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
