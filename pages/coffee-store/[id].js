import React from "react";
import { useRouter } from "next/router";

function CoffeeStore(props) {
  const { query } = useRouter();

  return <div> {query.id} </div>;
}

export default CoffeeStore;
