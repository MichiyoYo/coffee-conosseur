import { useRouter } from "next/router";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";

function CoffeeStore(props) {
  const { query } = useRouter();

  return (
    <div>
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
