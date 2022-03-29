import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner/Banner";
import Card from "../components/card/Card";
import styles from "../styles/Home.module.css";
import coffeeStores from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: { coffeeStores },
  };
}

export default function Home(props) {
  const { coffeeStores } = props;

  const handleOnBannerBtnClick = (e) => {
    console.log("clicked button");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur | Home</title>
        <meta name="description" content="Discover coffee shops in your area" />
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
          <h2 className={styles.shopHeader}>Shops Header</h2>
          <div className={styles.cardLayout}>
            {coffeeStores.map((store) => (
              <Card
                key={store.id}
                name={store.name}
                imgUrl={`https://picsum.photos/id/${Math.floor(
                  Math.random() * 200
                )}/800/600`}
                url={`/coffee-store/${store.id}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
