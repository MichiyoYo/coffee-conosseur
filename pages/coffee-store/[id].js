import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { MdOutlineArrowBack } from "react-icons/md";

function CoffeeStore(props) {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <Head>
        <title>Coffee Shop | {query.id}</title>
        <meta name="description" content="Discover coffee shops in your area" />
      </Head>
      <Link href="/">
        <a>
          <MdOutlineArrowBack />
          Back to home
        </a>
      </Link>
      {query.id}
    </div>
  );
}

export default CoffeeStore;
