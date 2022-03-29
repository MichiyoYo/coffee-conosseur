import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner/Banner";
import Card from "../components/card/Card";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleOnBannerBtnClick = (e) => {
    console.log("clicked button");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Discover coffee shops in your area" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src="/static/hero.png"
              width={1920}
              height={875}
              alt="A coffee shop illustration in pixel art"
            />
          </div>
          <Banner
            buttonText="View stores nearby"
            buttonHandler={handleOnBannerBtnClick}
          />
        </div>
        <div className={styles.shopContainer}>
          <h2 className={styles.shopHeader}>Shop Header</h2>
          <div className={styles.cardLayout}>
            <Card
              name="One"
              imgUrl="/static/placeholder.jpg"
              url="/coffee-store/la-colombe"
            />
            <Card
              name="Two"
              imgUrl="/static/placeholder.jpg"
              url="/coffee-store/la-colombe"
            />
            <Card
              name="Three"
              imgUrl="/static/placeholder.jpg"
              url="/coffee-store/la-colombe"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
