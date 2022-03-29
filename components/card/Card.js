import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";

function Card(props) {
  const { name, imgUrl, url } = props;

  return (
    <Link href={url}>
      <a className={styles.card}>
        <h3 className={styles.shopName}>{name}</h3>{" "}
        <MdOutlineArrowForward className={styles.linkIcon} />
        <div className={styles.picture}>
          <Image
            src={imgUrl}
            alt={`A picture of the store "${name}"`}
            width={1200}
            height={800}
          />
        </div>
      </a>
    </Link>
  );
}

export default Card;
