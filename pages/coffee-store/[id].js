import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import coffeeStoreData from "../../data/coffee-stores.json";

import { MdOutlineArrowBack } from "react-icons/md";

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
  const storePaths = [];
  coffeeStoreData.forEach((store) => {
    storePaths.push({
      params: {
        id: String(store.id),
      },
    });
  });
  console.log(storePaths);

  return {
    paths: storePaths,
    fallback: false,
  };
}

function CoffeeStore({ coffeeStore }) {
  const { query } = useRouter();
  const { address, imgUrl, name, neighborhood, websiteUrl } = coffeeStore;
  return (
    <div>
      <Head>
        <title>{name} | Coffee Shop</title>
        <meta
          name="description"
          content={`All about the "${name}" coffee shop`}
        />
      </Head>
      <div>
        <Link href="/">
          <a>
            <MdOutlineArrowBack />
            Back to home
          </a>
        </Link>
        <div>
          <Image
            src={imgUrl}
            alt={`A picture of the store "${name}"`}
            width={400}
            height={300}
          />
          <h2>{name}</h2>
          <p>{address}</p>
          <p>{neighborhood}</p>
          <a href={websiteUrl} target="_blank" rel="noreferrer noopener">
            <p>{websiteUrl}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CoffeeStore;
