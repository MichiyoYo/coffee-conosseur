import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function CoffeeStore(props) {
  const { query } = useRouter();

  return (
    <div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      {query.id}{" "}
    </div>
  );
}

export default CoffeeStore;
