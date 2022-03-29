import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import cls from "classnames";

import { MdOutlineArrowForward } from "react-icons/md";

function Card(props) {
  const { name, imgUrl, url } = props;

  return (
    <Link href={url}>
      <a>
        <div className={cls("glass", styles.card)}>
          <h3 className={styles.shopName}>{name}</h3>{" "}
          <MdOutlineArrowForward className={styles.linkIcon} />
          <div className={styles.picture}>
            <Image
              src={imgUrl}
              alt={`A picture of the store "${name}"`}
              width={800}
              height={600}
            />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Card;
