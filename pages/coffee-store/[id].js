import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import coffeeStoreData from "../../data/coffee-stores.json";
import styles from "../../styles/CoffeeStore.module.css";

import { MdOutlineArrowBack } from "react-icons/md";
import mitt from "next/dist/shared/lib/mitt";

export function getStaticProps({ params }) {
  const storeId = coffeeStoreData.find(
    (store) => store.id === Number(params.id)
  );

  return {
    props: {
      coffeeStore: storeId,
    },
  };
}

export function getStaticPaths() {
  const storePaths = coffeeStoreData.map((store) => {
    return {
      params: {
        id: String(store.id),
      },
    };
  });

  return {
    paths: storePaths,
    fallback: true,
  };
}

function CoffeeStore({ coffeeStore }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { address, imgUrl, name, neighborhood, websiteUrl } = coffeeStore;

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {name} | {neighborhood}
        </title>
        <meta
          name="description"
          content={`All about the "${name}" coffee shop`}
        />
      </Head>
      <div className={styles.storeContent}>
        <Link href="/">
          <a className={styles.backHomeLink}>
            <MdOutlineArrowBack /> Back to home
          </a>
        </Link>
        <div className={styles.storeDetails}>
          <div className={styles.storeImage}>
            <a
              className={styles.storeWebsite}
              href={websiteUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={imgUrl}
                alt={`A picture of the store "${name}"`}
                width={800}
                height={600}
                layout="responsive"
              />
            </a>
          </div>
          <div className={styles.storeInfo}>
            <a
              className={styles.storeWebsite}
              href={websiteUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <h2 className={styles.storeName}>{name}</h2>
            </a>
            <p className={styles.storeAddress}>{address}</p>
            <p className={styles.storeLocation}>{neighborhood}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeStore;
