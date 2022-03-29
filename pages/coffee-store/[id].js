import { useRouter } from "next/router";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/";

function CoffeeStore(props) {
  const { query } = useRouter();

  return (
    <div>
      <Link href="/" scroll={false}>
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
